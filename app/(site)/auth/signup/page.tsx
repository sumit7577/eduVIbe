"use client"

import { useAuth } from "@/app/context/AuthContext";
import Signup from "@/components/Auth/Signup";
import { useRouter } from "next/navigation";



export default function Register() {
  const { isUserAuthenticated } = useAuth()
  const router = useRouter();
  if (isUserAuthenticated()) {
    router.push("/")
  }
  return (
    <>
      <Signup />
    </>
  );
}
