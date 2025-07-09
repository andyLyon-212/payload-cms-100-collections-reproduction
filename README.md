# Payload CMS - 100+ Collections Reproduction

This repository demonstrates an issue that occurs when creating more than 100 collections in Payload CMS v3.46.0.

## 🐛 Issue Description

When attempting to create and configure 100+ collections in Payload CMS, the application may encounter performance issues, memory problems, or other unexpected behaviors. This reproduction case creates exactly 100 collections, each with a simple `name` field, to test the limits of Payload's collection handling.

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
5. Observe the behavior with 100 collections loaded
6. Check for any console errors, performance issues, or memory usage

## 📋 Expected vs Actual Behavior

**Expected**: The application should handle 100 collections smoothly without performance degradation or errors.

**Actual**: [Document any issues you encounter here, such as:]
- Slow loading times
- Memory usage spikes
- Bundle size issues
- Admin panel performance problems
- Any error messages

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

1. Reference this reproduction repository
2. Include specific error messages or performance metrics
3. Mention your system specifications
4. Describe the expected vs actual behavior

## 📝 Notes

- All collections are identical except for their slug and export name
- This is a minimal reproduction case to isolate the issue
- The collections are automatically generated and imported in `payload.config.ts`

## 🤝 Contributing

If you experience similar issues or have solutions, please:
1. Document your findings
2. Create an issue with reproduction steps
3. Submit pull requests with improvements
