import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";
console.log(authOptions)
export default NextAuth(authOptions)