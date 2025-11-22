import { useState } from 'react';

interface Extension {
    id: string;
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
        e.stopPropagation();
        navigator.clipboard.writeText(extension.installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary/50 transition-colors">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">{extension.name}</h3>
                    <span className="text-xs text-muted-foreground">v{extension.version}</span>
                </div>
                <p className="text-sm text-muted-foreground">by {extension.author}</p>
            </div>

            <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {extension.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {extension.tags.map(tag => (
                        <div key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            {tag}
                        </div>
                    ))}
                </div>

                <div
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-mono cursor-pointer hover:bg-muted/80 transition-colors group"
                    onClick={copyCommand}
                >
                    <code className="truncate mr-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        {extension.installCommand}
                    </code>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {copied ? 'Copied' : 'Copy'}
                    </span>
                </div>
            </div>
        </div>
    );
}
