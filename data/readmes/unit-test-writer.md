# Unit Test Writer

Generate comprehensive unit tests for your code automatically using Gemini AI.

## Features

- 🧪 **Framework Support**: Jest, Mocha, PyTest, JUnit, and more
- 🎯 **Smart Coverage**: Generates edge cases and common scenarios
- 🚀 **Fast Generation**: Create tests in seconds
- 📊 **Mocking**: Auto-generates mocks for dependencies  
- ✅ **Type-Safe**: Respects TypeScript types

## Installation

```bash
gemini extensions install test-writer
```

## Usage

### Generate Tests for a Function

```bash
gemini test-gen src/utils/formatDate.ts
```

### Generate for Entire File

```bash
gemini test-gen src/api/auth.ts --coverage
```

### Specify Framework

```bash
gemini test-gen src/calculator.py --framework pytest
```

## Example

**Input (auth.ts):**
```typescript
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

**Generated Test (auth.test.ts):**
```typescript
import { validateEmail } from './auth';

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should return false for email without @', () => {
    expect(validateEmail('userexample.com')).toBe(false);
  });

  it('should return false for email without domain', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('should return false for email with spaces', () => {
    expect(validateEmail('user @example.com')).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(validateEmail('')).toBe(false);
  });
});
```

## Supported Frameworks

- **JavaScript/TypeScript**: Jest, Mocha, Vitest
- **Python**: PyTest, unittest
- **Java**: JUnit, TestNG
- **Go**: testing
- **Ruby**: RSpec

## Configuration

```json
{
  "test-writer": {
    "framework": "jest",
    "coverage": 90,
    "generateMocks": true,
    "edgeCases": true
  }
}
```

## License

MIT
