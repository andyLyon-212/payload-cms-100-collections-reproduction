# Payload CMS - 100+ Collections Reproduction

This repository demonstrates an issue that occurs when creating more than 100 collections in Payload CMS v3.46.0.

## 🐛 Issue Description

We're encountering a PostgreSQL error when working with a Payload CMS instance that has more than 100 collections.

**The Problem:**
Payload internally uses a table called `payload_locked_documents_rels` to manage document locking. This table has one column per collection. When the number of collections exceeds 100, PostgreSQL throws an error when trying to edit a document. The issue stems from how the locking mechanism constructs a SQL query that touches all those columns, resulting in a statement that exceeds PostgreSQL's function argument limit.

**Error Message:**
```
ERROR: cannot pass more than 100 arguments to a function
err: {
  "type": "DatabaseError", 
  "message": "cannot pass more than 100 arguments to a function",
  "stack": "error: cannot pass more than 100 arguments to a function"
}
```

This reproduction case creates exactly 100 collections, each with a simple `name` field, to demonstrate this PostgreSQL limitation in Payload's document locking system.

## 📦 Collections Structure

Each collection follows this simple structure:
- **Slug**: `collection-001`, `collection-002`, ..., `collection-100`
- **Fields**: Single `name` field (text, required)
- **Access**: Authenticated users can create/update/delete, anyone can read

## 🚀 Getting Started

### Prerequisites

- Node.js (^18.20.2 || >=20.9.0)
- PostgreSQL database
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd my-payload-app
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
```

3. **Set up PostgreSQL database:**

Option A - Using Docker:
```bash
docker-compose up -d postgres
```

Option B - Local PostgreSQL:
```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql
brew services start postgresql

# Create database and user
createdb payload
psql -d postgres -c "CREATE USER payload WITH PASSWORD 'payload';"
psql -d postgres -c "GRANT ALL PRIVILEGES ON DATABASE payload TO payload;"
psql -d payload -c "GRANT ALL ON SCHEMA public TO payload;"
```

4. **Configure environment variables:**
```bash
# Copy the existing .env file or create one with:
DATABASE_URI=postgresql://payload:payload@localhost:5432/payload
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

5. **Generate TypeScript types:**
```bash
npm run generate:types
```

6. **Start the development server:**
```bash
npm run dev
```

7. **Access the application:**
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

## 🔬 Reproduction Steps

1. Follow the installation steps above
2. Start the application with `npm run dev`
3. Navigate to the admin panel at http://localhost:3000/admin
4. Create a user account if needed
5. Try to create a new document in ANY collection (e.g., Posts, Pages, or any Collection001-100)
6. Attempt to save/edit the document
7. **Expected Error**: PostgreSQL will throw "cannot pass more than 100 arguments to a function"
8. Check the server console for the full error stack trace
9. Note that this affects ALL collections, not just the 100+ ones

## 📋 Expected vs Actual Behavior

**Expected**: The application should handle 100+ collections smoothly, allowing users to create and edit documents in any collection without database-level errors.

**Actual**: When attempting to edit any document in any collection (after having 100+ collections configured), PostgreSQL throws an error:
- Error occurs during document editing operations
- PostgreSQL function argument limit exceeded (100 arguments max)
- Related to `payload_locked_documents_rels` table structure
- Affects all collections, not just the 100th+ ones
- Makes the admin panel unusable for document editing

## 🛠 Technical Details

- **Payload CMS Version**: 3.46.0
- **Database**: PostgreSQL with `@payloadcms/db-postgres`
- **Next.js Version**: 15.3.3
- **Node.js Version**: [Your version]
- **Collections Count**: Exactly 100 collections
- **Collection Configuration**: Simple collections with single `name` field

## 📁 Repository Structure

```
src/
├── collections/
│   ├── Collection001.ts through Collection100.ts
│   ├── Categories.ts
│   ├── Media.ts
│   ├── Pages/
│   ├── Posts/
│   └── Users/
├── payload.config.ts (updated with all 100 collections)
└── ...
```

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Generate types
npm run generate:types

# Linting
npm run lint
npm run lint:fix

# Testing
npm run test
npm run test:e2e
```

## 📤 Uploading to Repository

To share this reproduction:

1. **Initialize git repository:**
```bash
git init
git add .
git commit -m "Initial commit: Payload CMS 100 collections reproduction"
```

2. **Create a GitHub repository** and push:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

3. **Make repository public** for issue reporting

## 🐛 Issue Reporting

When reporting this issue to Payload CMS:

### 1. **Go to Payload repository:**
[https://github.com/payloadcms/payload/issues](https://github.com/payloadcms/payload/issues)

### 2. **Create new issue with title:**
```
PostgreSQL error: "cannot pass more than 100 arguments to a function" with 100+ collections
```

### 3. **Use this template:**

```markdown
## Describe the Bug
PostgreSQL error when editing documents in Payload CMS with 100+ collections: "cannot pass more than 100 arguments to a function"

## Error Details
The issue occurs with Payload's document locking mechanism. The `payload_locked_documents_rels` table has one column per collection, and when there are 100+ collections, PostgreSQL's function argument limit is exceeded during document edit operations.

**Error message:**
```
ERROR: cannot pass more than 100 arguments to a function
err: {
  "type": "DatabaseError",
  "message": "cannot pass more than 100 arguments to a function"
}
```

## Reproduction
Repository: https://github.com/YOUR-USERNAME/payload-cms-100-collections-reproduction

Steps:
1. Clone the reproduction repository
2. Follow the setup instructions in README.md
3. Run `npm run dev`
4. Navigate to admin panel at http://localhost:3000/admin
5. Try to create/edit any document in any collection
6. Observe the PostgreSQL error in console

## Expected Behavior
Users should be able to create and edit documents regardless of the number of collections configured.

## Environment
- Payload Version: 3.46.0
- Database: PostgreSQL with @payloadcms/db-postgres
- Next.js Version: 15.3.3
- Node.js Version: [your version]
- OS: macOS 24.5.0

## Additional Context
This appears to be a fundamental limitation in how Payload handles document locking with PostgreSQL when scaling to many collections. The `payload_locked_documents_rels` table structure may need to be redesigned to avoid PostgreSQL's function argument limits.
```

### 4. **Suggested labels:**
- `bug`
- `database`
- `postgresql`
- `collections`

## 📝 Notes

- All collections are identical except for their slug and export name
- This is a minimal reproduction case to isolate the issue
- The collections are automatically generated and imported in `payload.config.ts`

## 🤝 Contributing

If you experience similar issues or have solutions, please:
1. Document your findings
2. Create an issue with reproduction steps
3. Submit pull requests with improvements
