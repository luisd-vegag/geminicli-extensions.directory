import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import extensions from '@/data/extensions.json';
import { notFound } from 'next/navigation';

interface Extension {
    slug: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    installCommand: string;
    author: string;
    version: string;
    repository: string;
}

async function getReadme(repository: string): Promise<string> {
    try {
        // Convert GitHub URL to raw README URL
        const repoPath = repository.replace('https://github.com/', '');
        const readmeUrl = `https://raw.githubusercontent.com/${repoPath}/main/README.md`;

        const response = await fetch(readmeUrl, { next: { revalidate: 3600 } });

        if (!response.ok) {
            // Try master branch if main doesn't exist
            const masterUrl = `https://raw.githubusercontent.com/${repoPath}/master/README.md`;
            const masterResponse = await fetch(masterUrl, { next: { revalidate: 3600 } });

            if (!masterResponse.ok) {
                return '# README not found\n\nThis extension does not have a README.md file in the repository.';
            }

            return await masterResponse.text();
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching README:', error);
        return '# Error loading README\n\nCould not fetch the README file for this extension.';
    }
}

export default async function ExtensionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    console.log('Received slug:', slug);
    console.log('Available extensions:', extensions.map(ext => ({ id: ext.id, slug: ext.slug })));

    const extension = extensions.find((ext: Extension) => ext.slug === slug);

    console.log('Found extension:', extension);

    if (!extension) {
        console.log('Extension not found, calling notFound()');
        notFound();
    }

    const readme = await getReadme(extension.repository);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
                        <span className="text-muted-foreground">←</span>
                        <span className="font-mono text-sm">Back to Extensions</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="container py-8">
                {/* Extension Header */}
                <div className="mb-8 border-b pb-6">
                    <h1 className="text-4xl font-bold mb-2">{extension.name}</h1>
                    <p className="text-lg text-muted-foreground mb-4">{extension.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {extension.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Author:</span>
                            <span className="font-medium">{extension.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Version:</span>
                            <span className="font-mono font-medium">{extension.version}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href={extension.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                GitHub Repository →
                            </Link>
                        </div>
                    </div>

                    {/* Install Command */}
                    <div className="mt-6">
                        <label className="text-sm font-medium mb-2 block">Installation</label>
                        <div className="flex items-center justify-between rounded-md bg-muted px-4 py-3 text-sm font-mono">
                            <code className="text-foreground">{extension.installCommand}</code>
                            <button
                                onClick={() => navigator.clipboard.writeText(extension.installCommand)}
                                className="ml-4 px-3 py-1 text-xs rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>

                {/* README Content */}
                <div className="prose prose-invert prose-zinc max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
