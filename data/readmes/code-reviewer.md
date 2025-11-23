# Code Reviewer

Get instant code review feedback on your current branch compared to main using Gemini AI.

## Features

- 🔍 **Deep Analysis**: Examines code quality, security, and best practices
- 🎯 **Contextual Feedback**: Understands your codebase and provides relevant suggestions
- 🚀 **Quick Reviews**: Get feedback in seconds
- 📊 **Severity Levels**: Issues categorized by importance (critical, warning, info)
- ✨ **Auto-Fix Suggestions**: Provides code snippets to fix issues

## Installation

```bash
gemini extensions install code-reviewer
```

## Usage

From your feature branch, run:

```bash
gemini code-review
```

### Review Specific Files

```bash
gemini code-review src/auth.ts src/utils.ts
```

### Compare Against Different Branch

```bash
gemini code-review --base develop
```

## Example Output

```
🔴 CRITICAL: Potential SQL injection vulnerability
File: src/database.ts:45
Suggestion: Use parameterized queries instead of string concatenation

⚠️  WARNING: Missing error handling
File: src/api.ts:23
Suggestion: Add try-catch block around async operation

ℹ️  INFO: Consider using const instead of let
File: src/config.ts:12
```

## Configuration

```json
{
  "code-reviewer": {
    "severity": ["critical", "warning", "info"],
    "exclude": ["*.test.ts", "dist/**"],
    "autoFix": true
  }
}
```

## License

MIT
