import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

interface  pageProps {
  
}
 
const page : FC<pageProps> = async({}) => {
  return (
    <div>Dashboard</div>
  );
}
 
export default  page;