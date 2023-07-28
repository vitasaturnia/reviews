import { useSession } from "next-auth/react"
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();

    const handleSignOut = async () => {
        await signOut();
        // Optionally redirect or show a sign-out message.
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <h1>logo</h1>
                    </a>
                </Link>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">Home</a>
                    </Link>

                    <Link href="/documentation">
                        <a className="navbar-item">Documentation</a>
                    </Link>

                    {/* Add more navbar items if needed */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {session ? (
                                // If the user is authenticated, show the "Sign Out" button
                                <button className="button is-danger" onClick={handleSignOut}>
                                    Sign Out
                                </button>
                            ) : (
                                // If the user is not authenticated, show the "Sign In" button
                                <button className="button is-primary" onClick={() => signIn()}>
                                    Sign In
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
