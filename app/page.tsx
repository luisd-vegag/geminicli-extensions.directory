"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExtensionCard from "@/components/ExtensionCard";
import extensionsData from "@/data/extensions.json";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExtensions = extensionsData.filter((ext) =>
    ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ext.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ext.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero onSearch={setSearchQuery} />

        <section className="container pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">
              All Extensions
              <span className="ml-2 text-[var(--secondary)] text-sm font-normal">
                ({filteredExtensions.length})
              </span>
            </h2>

            {/* Filter dropdowns could go here */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExtensions.map((ext) => (
              <ExtensionCard key={ext.id} extension={ext} />
            ))}
          </div>

          {filteredExtensions.length === 0 && (
            <div className="text-center py-20 text-[var(--secondary)]">
              <p>No extensions found matching "{searchQuery}"</p>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-[var(--card-border)] py-8 mt-auto">
        <div className="container text-center text-sm text-[var(--secondary)]">
          <p>© {new Date().getFullYear()} Gemini CLI Extensions Directory. Not affiliated with Google.</p>
        </div>
      </footer>
    </div>
  );
}
