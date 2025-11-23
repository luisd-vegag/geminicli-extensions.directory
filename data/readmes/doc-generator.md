# Documentation Generator

Create comprehensive documentation for your codebase automatically using Gemini AI.

## Features

- 📚 **Multiple Formats**: Markdown, HTML, PDF
- 🎯 **Smart Parsing**: Understands code structure and intent
- 🚀 **Quick Generation**: Document entire codebases in minutes
- 📊 **API Docs**: Generates API reference documentation
- ✨ **Examples**: Includes usage examples automatically

## Installation

```bash
gemini extensions install doc-gen
```

## Usage

### Document Entire Project

```bash
gemini doc-gen
```

### Document Specific Files

```bash
gemini doc-gen src/api/**/*.ts --format markdown
```

### Generate API Reference

```bash
gemini doc-gen --api-reference --output docs/api
```

## Example Output

**Input (calculator.ts):**
```typescript
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

**Generated Documentation:**

# Calculator Class

A simple calculator utility for basic mathematical operations.

## Methods

### add(a, b)

Adds two numbers together.

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Returns:** (number) The sum of a and b

**Example:**
```typescript
const calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
```

### subtract(a, b)

Subtracts the second number from the first.

**Parameters:**
- `a` (number): The minuend  
- `b` (number): The subtrahend

**Returns:** (number) The difference between a and b

**Example:**
```typescript
const calc = new Calculator();
console.log(calc.subtract(10, 4)); // Output: 6
```

## Features

- 📝 **JSDoc Compatible**: Parses existing JSDoc comments
- 🌐 **Multi-Language**: TypeScript, JavaScript, Python, Java, Go
- 📊 **Diagrams**: Generates class diagrams and flow charts
- 🔗 **Cross-References**: Links between related documentation
- 🎨 **Themes**: Beautiful, customizable output themes

## Output Formats

- Markdown (`.md`)
- HTML (`.html`)
- PDF (`.pdf`)
- JSON (`.json`)

## Configuration

```json
{
  "doc-generator": {
    "format": "markdown",
    "includePrivate": false,
    "generateExamples": true,
    "outputDir": "docs"
  }
}
```

## License

MIT
