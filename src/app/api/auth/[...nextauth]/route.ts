import { Options } from "@/provider/AuthOption";
import NextAuth from "next-auth";

const handdler = NextAuth(Options);

export { handdler as GET, handdler as POST };