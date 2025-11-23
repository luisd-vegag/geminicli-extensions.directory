# SQL Generator

Translate natural language queries into complex SQL statements for various database dialects using Gemini AI.

## Features

- 💬 **Natural Language**: Write queries in plain English
- 🗄️ **Multi-Dialect**: Supports PostgreSQL, MySQL, SQLite, SQL Server
- 🎯 **Schema-Aware**: Understands your database structure
- ✅ **Validated Output**: Generates syntactically correct SQL
- 📚 **Learning Mode**: Explains the generated SQL

## Installation

```bash
gemini extensions install sql-gen
```

## Usage

```bash
gemini sql-gen "find all users who signed up in the last 30 days"
```

### Specify Dialect

```bash
gemini sql-gen --dialect postgres "get top 10 products by revenue"
```

### With Schema Context

```bash
gemini sql-gen --schema schema.sql "join users and orders tables"
```

## Example

**Input:**
```
Find all active users who made a purchase in the last month, ordered by total spent
```

**Output (PostgreSQL):**
```sql
SELECT 
  u.id,
  u.name,
  u.email,
  SUM(o.total_amount) as total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE 
  u.status = 'active' 
  AND o.created_at >= NOW() - INTERVAL '30 days'
GROUP BY u.id, u.name, u.email
ORDER BY total_spent DESC;
```

## Supported Dialects

- PostgreSQL
- MySQL
- SQLite
- Microsoft SQL Server
- Oracle

## Configuration

```json
{
  "sql-generator": {
    "defaultDialect": "postgres",
    "schemaFile": "schema.sql",
    "explainQuery": true
  }
}
```

## License

MIT
