'use client';

export default function CopyButton({ text }: { text: string }) {
    return (<button
        onClick={() => navigator.clipboard.writeText(text)}
        className="ml-4 px-3 py-1 text-xs rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
    >
        Copy
    </button>
    );
}
