import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  console.log('sign-in--->',session);
  return <div>Sign In</div>;
};

export default page;
