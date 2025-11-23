# Regex Explainer

Explain complex regex patterns in plain English or generate regex from natural language descriptions using Gemini AI.

## Features

- 🔍 **Pattern Explanation**: Understand complex regex patterns
- 🎯 **Generation**: Create regex from descriptions
- 🧪 **Test Cases**: Generate test strings automatically
- 📊 **Visual Breakdown**: See pattern components highlighted
- ⚡ **Multi-Language**: Supports different regex flavors

## Installation

```bash
gemini extensions install regex-help
```

## Usage

### Explain a Regex Pattern

```bash
gemini regex-explain "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
```

**Output:**
```
Email Address Pattern:

^ - Start of string
[a-zA-Z0-9._%+-]+ - One or more alphanumeric characters or ._%+-
@ - Literal @ symbol  
[a-zA-Z0-9.-]+ - One or more alphanumeric characters or .-
\. - Literal dot
[a-zA-Z]{2,} - Two or more letters (TLD)
$ - End of string

Matches: user@example.com, test.email+tag@domain.co.uk
```

### Generate from Description

```bash
gemini regex-generate "match URLs starting with http or https"
```

**Output:**
```regex
^https?://[^\s]+$

Explanation:
- ^https? - Start with http or https (s is optional)
- :// - Literal ://
- [^\s]+ - One or more non-whitespace characters
- $ - End of string
```

## Test Your Regex

```bash
gemini regex-test "^\d{3}-\d{2}-\d{4}$" --input "123-45-6789"
```

## Supported Flavors

- JavaScript
- Python
- Java
- PHP
- Go

## Configuration

```json
{
  "regex-explainer": {
    "flavor": "javascript",
    "generateTests": true,
    "verboseMode": true
  }
}
```

## License

MIT
