import { useState } from 'react';

export default function Hero({ onSearch }: { onSearch: (query: string) => void }) {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    Supercharge your <br className="hidden sm:inline" />
                    Gemini CLI workflow
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    The community-driven directory for Gemini CLI extensions. Discover, share, and install tools to boost your productivity.
                </p>
            </div>

            <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search extensions..."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
            </div>
        </section>
    );
}
