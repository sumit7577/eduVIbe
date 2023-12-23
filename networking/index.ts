import Axios from "axios";
import { AuthenticationError, ClientError, NetworkError, ServerError } from "./error";

const BASE_URL = "https://api.majoringlearn.com"
//const BASE_URL = "http://127.0.0.1:8000"

const apiClient = Axios.create({
    headers: {
        "Content-Type": "application/json",
    }
})

apiClient.interceptors.request.use(async (request: any) => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
        request.headers['Authorization'] = `Token ${token}`;
    }
    return request;
});



apiClient.interceptors.response.use(
    (response) => {
        //console.log("response",response.data);
        return response;
    },
    (error) => {
        //console.log("error",error);
        if (error.message === "Network Error") {
            return Promise.reject(new NetworkError('Please Turn On Your Mobile Data'));
        } else if (error.response.status >= 500) {
            return Promise.reject(
                new ServerError(error.response.data.error, error.response.status)
            );
        } else if (error.response.status === 401) {
            return Promise.reject(new AuthenticationError("The username or password that you've entered is incorrect."));
        } else if (error.response.status >= 400 && error.response.status < 500) {
            return Promise.reject(
                new ClientError(
                    Object.entries(error.response.data).join(" ").replace(","," "),
                    error.response.status
                )
            );
        }
        return Promise.reject({ ...error });
    }
);



export { BASE_URL, apiClient };