# Contributing to Gemini CLI Extensions Directory

We welcome community submissions! To add your extension to the directory, follow these steps:

1.  **Fork** this repository.
2.  Edit `data/extensions.json`.
3.  Add your extension object to the array.
4.  **Submit a Pull Request**.

## Extension Format

Your entry must follow this JSON structure:

```json
{
  "id": "unique-id",
  "name": "Extension Name",
  "description": "A brief description of what it does.",
  "tags": ["Tag1", "Tag2"],
  "installCommand": "gemini extensions install your-repo-name",
  "author": "Your Name or Org",
  "version": "1.0.0"
}
```

## Validation

Our CI system will automatically validate your Pull Request to ensure:
- All fields are present.
- `installCommand` starts with `gemini extensions install`.
- `version` uses semantic versioning (x.y.z).
- No duplicate IDs exist.
