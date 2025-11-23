# Gemini Git Commit

Automatically generate conventional commit messages from your staged changes using Gemini AI.

## Features

- 🤖 **AI-Powered**: Leverages Gemini to analyze your changes and generate meaningful commit messages
- 📝 **Conventional Commits**: Follows the conventional commit format (feat, fix, docs, etc.)
- ⚡ **Fast**: Analyzes diffs in seconds
- 🎯 **Context-Aware**: Understands the purpose of your changes
- ✅ **Interactive**: Review and edit suggestions before committing

## Installation

```bash
gemini extensions install git-commit
```

## Usage

After staging your changes with `git add`, simply run:

```bash
gemini git-commit
```

The extension will:
1. Analyze your staged changes
2. Generate a conventional commit message
3. Present it for your review
4. Commit with your approval

## Example Output

```
feat(auth): add OAuth2 authentication flow

- Implement Google OAuth2 provider
- Add token refresh mechanism
- Update user session handling
```

## Configuration

You can customize the behavior in your `.gemini/config.json`:

```json
{
  "git-commit": {
    "conventionalCommits": true,
    "includeBody": true,
    "maxLength": 72
  }
}
```

## License

Apache 2.0
