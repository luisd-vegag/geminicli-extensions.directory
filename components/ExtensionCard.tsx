'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Extension {
    id: string;
    slug: string;
    name: string;
    description: string;
    tags: string[];
    installCommand: string;
    author: string;
    version: string;
}

export default function ExtensionCard({ extension }: { extension: Extension }) {
    const [copied, setCopied] = useState(false);

    const copyCommand = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(extension.installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Link
            href={`/extension/${extension.slug}`}
            className="block group"
        >
            <div className="flex flex-col h-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200">
                <div className="flex flex-col gap-2 p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {extension.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {extension.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {extension.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mt-2 gap-3">
                        <span>{extension.author}</span>
                        <span>•</span>
                        <span className="font-mono">{extension.version}</span>
                    </div>

                    <div
                        className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-mono cursor-pointer hover:bg-muted/80 transition-colors group/copy mt-4"
                        onClick={copyCommand}
                    >
                        <code className="truncate mr-2 text-muted-foreground group-hover/copy:text-foreground transition-colors">
                            {extension.installCommand}
                        </code>
                        <span className="text-xs font-sans text-primary shrink-0">
                            {copied ? '✓ Copied!' : 'Copy'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
