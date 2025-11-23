"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExtensionCard from "@/components/ExtensionCard";
import CategoryFilter from "@/components/CategoryFilter";
import extensionsData from "@/data/extensions.json";

interface Extension {
  id: string;
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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from extensions
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(extensionsData.map((ext: Extension) => ext.category))];
    return uniqueCategories.sort();
  }, []);

  // Filter extensions by search query and category
  const filteredExtensions = (extensionsData as Extension[]).filter((ext) => {
    const matchesSearch =
      ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null || ext.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero onSearch={setSearchQuery} />

        <section className="container pb-20">
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">
              {selectedCategory || 'All Extensions'}
              <span className="ml-2 text-muted-foreground text-sm font-normal">
                ({filteredExtensions.length})
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExtensions.map((ext) => (
              <ExtensionCard key={ext.id} extension={ext} />
            ))}
          </div>

          {filteredExtensions.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>No extensions found{searchQuery && ` matching "${searchQuery}"`}{selectedCategory && ` in "${selectedCategory}"`}</p>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t py-8 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gemini CLI Extensions Directory. Not affiliated with Google.</p>
        </div>
      </footer>
    </div>
  );
}
