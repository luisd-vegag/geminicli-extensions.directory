# API Client Generator

Generate type-safe API clients from OpenAPI/Swagger specifications for multiple programming languages using Gemini AI.

## Features

- 🔧 **Multi-Language**: TypeScript, Python, Java, Go, Rust
- 📝 **Type-Safe**: Generates strongly-typed clients
- 🚀 **Fast**: Create clients in seconds
- ✅ **Validated**: Ensures spec compliance
-  **Customizable**: Templates and output options

## Installation

```bash
gemini extensions install api-client-gen
```

## Usage

### From OpenAPI/Swagger File

```bash
gemini api-gen openapi.json --lang typescript --output src/api
```

### From URL

```bash
gemini api-gen https://api.example.com/openapi.json --lang python
```

### Multiple Languages

```bash
gemini api-gen spec.yaml --lang typescript,python,go
```

## Example

**Input (OpenAPI spec):**
```yaml
paths:
  /users:
    get:
      summary: List users
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
```

**Generated TypeScript Client:**
```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}

export class ApiClient {
  constructor(private baseUrl: string) {}

  async listUsers(): Promise<User[]> {
    const response = await fetch(`${this.baseUrl}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  }
}

// Usage
const client = new ApiClient('https://api.example.com');
const users = await client.listUsers();
```

## Supported Languages

- **TypeScript** - Axios, Fetch API
- **Python** - Requests, httpx
- **Java** - OkHttp, Spring RestTemplate
- **Go** - net/http
- **Rust** - reqwest

## Features

- ✅ Request/Response validation
- 🔐 Authentication handling (API keys, OAuth2, JWT)
- 📊 Error handling
- 🎯 Retry logic
- 📝 Comprehensive documentation
- 🧪 Mock clients for testing

## Configuration

```json
{
  "api-client-gen": {
    "language": "typescript",
    "httpClient": "axios",
    "authentication": "bearer",
    "includeTests": true
  }
}
```

## Advanced Options

```bash
# Custom templates
gemini api-gen spec.yaml --template ./templates/custom.hbs

# With authentication
gemini api-gen spec.yaml --auth bearer --auth-header Authorization

# Generate mock client
gemini api-gen spec.yaml --generate-mocks
```

## License

Apache 2.0
