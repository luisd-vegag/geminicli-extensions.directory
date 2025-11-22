// @ts-nocheck
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

const extensionSchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    tags: z.array(z.string()).min(1, "At least one tag is required"),
    installCommand: z.string().regex(/^gemini extensions install .+$/, "Install command must start with 'gemini extensions install '"),
    author: z.string().min(1, "Author is required"),
    version: z.string().regex(/^\d+\.\d+\.\d+$/, "Version must be semantic (x.y.z)"),
});

const extensionsSchema = z.array(extensionSchema);

const validateExtensions = () => {
    try {
        const dataPath = path.join(process.cwd(), 'data', 'extensions.json');
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const extensions = JSON.parse(rawData);

        const result = extensionsSchema.safeParse(extensions);

        if (!result.success) {
            console.error('❌ Validation Failed:');
            result.error.errors.forEach((err) => {
                console.error(`  - Path: ${err.path.join('.')}: ${err.message}`);
            });
            process.exit(1);
        }

        // Check for duplicate IDs
        const ids = extensions.map((e: any) => e.id);
        const uniqueIds = new Set(ids);
        if (ids.length !== uniqueIds.size) {
            console.error('❌ Validation Failed: Duplicate IDs found');
            process.exit(1);
        }

        console.log('✅ Validation Passed: extensions.json is valid');
    } catch (error) {
        console.error('❌ Error reading or parsing extensions.json:', error);
        process.exit(1);
    }
};

validateExtensions();
