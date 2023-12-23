'use client'

import { useAuth } from "@/app/context/AuthContext";
import Signin from "@/components/Auth/Signin";
import { useRouter } from "next/navigation";


const SigninPage = () => {
  const { isUserAuthenticated, authState } = useAuth()
  const router = useRouter()
  if (isUserAuthenticated()) {
    router.push("/")
  }
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
