"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
    const { user, signIn, signOut, loading } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <span className="font-mono text-lg">geminicli-extensions.directory</span>
                    <span className="text-muted-foreground font-mono">/&gt;</span>
                </Link>

                <div className="flex items-center gap-4">
                    {!loading && user && (
                        <Link
                            href="https://github.com/your-username/geminicli-extensions.directory/blob/main/CONTRIBUTING.md"
                            target="_blank"
                            className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        >
                            Submit Extension
                        </Link>
                    )}

                    {!loading && (
                        user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground hidden sm:inline-block">
                                    {user.displayName}
                                </span>
                                <button
                                    onClick={() => signOut()}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => signIn()}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                            >
                                Sign In
                            </button>
                        )
                    )}
                </div>
            </div>
        </header>
    );
}

