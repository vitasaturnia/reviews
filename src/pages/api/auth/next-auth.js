import NextAuth from "next-auth";
import { providers } from "next-auth"; // Corrected import statement for providers
import { supabase } from "../../../../supabase.js";

export default NextAuth({
    providers: [
        providers.Credentials({
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
