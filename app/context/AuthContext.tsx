"use client"

import React, { ReactNode, useEffect } from "react";
import { userResponse } from "@/networking/types";


interface User {
    token: string,
    user: typeof userResponse | null
}

type AuthContext = {
    authState: User,
    setAuthState: (user: User) => void,
    isUserAuthenticated: () => boolean,
}

const AuthContext = React.createContext<AuthContext | null>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = React.useState<User>({
        token: "",
        user: null
    });

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        if ((token && token !== "") && (user && user !== "")) {
            setAuthState({ token: token, user: JSON.parse(user) })
        }
    }, [])

    const setUserAuthInfo = (data: User) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setAuthState(data)
    };

    // checks if the user is authenticated or not
    const isUserAuthenticated = () => {
        if (authState.token !== "") {
            return true;
        }
        return false;
    };

    return (
        <Provider
            value={{
                authState,
                setAuthState: (userAuthInfo: User) => setUserAuthInfo(userAuthInfo),
                isUserAuthenticated,
            }}
        >
            {children}
        </Provider>
    );
};

function useAuth() {
    const context = React.useContext(AuthContext);

    if (!context)
        throw new Error('useAuth must be used within an AuthContextProvider');

    return context;
}

export { AuthContext, AuthProvider, useAuth };