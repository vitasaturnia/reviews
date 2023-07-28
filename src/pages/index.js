import styles from "./index.module.css";
import Head from "next/head";
import { useSession } from "next-auth/client";
import Header from "../components/Header.js";

export default function Home() {
    const [session, loading] = useSession();

    return (
        <>
            <Head>
                <Header />
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Originals Leaderboard
                    </h1>
                    {!loading && (
                        <div>
                            {session ? (
                                <p>Welcome, {session.user.name}!</p>
                                /* Add other content for logged-in users */
                            ) : (
                                <p>You are not logged in.</p>
                                /* Add login button or link here */
                            )}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
