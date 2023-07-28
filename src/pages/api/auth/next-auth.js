// pages/api/auth/nextauth.js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { supabase } from "../../../../supabase"; // Import your supabase instance

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
                const { user, error } = await supabase.auth.signIn({
                    email: credentials.username,
                    password: credentials.password,
                });

                if (user) {
                    return { id: user.id, name: user.email };
                }

                return null;
            },
        }),
        // Add other authentication providers here if needed
    ],
    adapter: null, // Remove the adapter configuration since we are not using Prisma
    // Add any other custom configurations here if needed
});
