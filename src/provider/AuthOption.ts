import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { verifyPassword } from "@/function/encryption";
import { PrismaClient } from '@prisma/client'
import { toast } from "sonner";

const prisma = new PrismaClient()

export const Options: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await prisma.$connect();
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials?.email,
                        },
                    });
                    if (user) {
                        const isVerified = verifyPassword(credentials?.password, user.password);
                        if (isVerified) {
                            return {
                                id: user.id as string,
                                name: user.name as string,
                                email: user.email as string,
                                image: user.image as string,
                                isEmailVerified: user.isEmailVerified,
                                createdAt: user.createdAt,
                                updatedAt: user.updatedAt
                            }
                        }
                    }
                } catch (error) {
                    console.log(error);

                } finally {
                    await prisma.$disconnect();
                }
                return null;
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: profile.sub as string,
                    name: profile.name as string,
                    email: profile.email as string,
                    image: profile.picture as string,
                    isEmailVerified: profile.email_verified as boolean,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: profile.id as string,
                    name: profile.name as string,
                    email: profile.email as string,
                    image: profile.avatar_url as string,
                    isEmailVerified: true,
                    isSubscribed: false,
                    credits: 0,
                    plan: "free",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }
        }),
    ],
    jwt: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/api/auth/signIn",
        newUser: "/api/auth/signUp",
    },
    callbacks: {
        async redirect({ url }) {
            // Redirect to home page after sign-in
            return url;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken as string;
            session.user.id = token.id as string;
            session.user.name = token.name as string;
            session.user.email = token.email as string;
            session.user.image = token.image as string;
            session.user.isEmailVerified = token.isEmailVerified as boolean;
            session.user.createdAt = token.createdAt as Date;
            session.user.updatedAt = token.updatedAt as Date;
            return session;
        },
        async jwt({ account, user, token }) {
            if (account) {
                token.accessToken = account.accessToken as string;
            }
            if (user) {
                token.id = user.id as string;
                token.name = user.name as string;
                token.email = user.email as string;
                token.image = user.image as string;
                token.isEmailVerified = user.isEmailVerified as boolean;
                token.createdAt = user.createdAt as Date;
                token.updatedAt = user.updatedAt as Date;
            }
            return token;
        },
    }
}