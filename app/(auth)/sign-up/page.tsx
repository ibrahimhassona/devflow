

"use client";
 
import React from "react";
 
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validaions";
 
const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data)=>{Promise.resolve({success:true,data})}}
    />
  );
};
 
export default SignIn;