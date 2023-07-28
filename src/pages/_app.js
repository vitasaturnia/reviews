import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
    // Manual mock session for development mode
    const mockSession = {
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
            // Add more user properties as needed
        },
    };

    // Use mockSession in development mode, actual session in production
    const session = process.env.NODE_ENV === "development" ? mockSession : pageProps.session;

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
