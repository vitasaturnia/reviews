// pages/api/auth/nextauth.js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Your custom authentication logic here to validate username and password
                // For example, check against a database or external API.
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });

                if (user && user.password === credentials.password) {
                    return { id: user.id, name: user.username };
                }
                return null;
            },
        }),
        // Remove the Discord provider from here
        // Add other authentication providers here if needed
    ],
    adapter: PrismaAdapter(prisma),
    // Add any other custom configurations here if needed
});
