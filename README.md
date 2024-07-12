# Next.js Boilerplate with Prisma and MSSQL Database

This boilerplate sets up a Next.js project with Prisma ORM connected to a Microsoft SQL Server (MSSQL) database. It includes basic configuration and an example of how to use Prisma to interact with your MSSQL database.

## Features

- **Next.js**: A React framework for production.
- **Prisma**: Modern ORM (Object-Relational Mapping) for Node.js and TypeScript.
- **MSSQL**: Microsoft SQL Server for database management.
- **TypeScript**: Superset of JavaScript that adds types.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- Microsoft SQL Server

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VikashAnandJha/nextjs-sql-prisma-boilerplate.git
cd nextjs-sql-prisma-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Database

Update the `DATABASE_URL` in your `.env` file with your MSSQL connection string. For example:

```
DATABASE_URL="sqlserver://username:password@localhost:1433/dbname?schema=dbo"
```

If you're using Windows Authentication, use:

```
DATABASE_URL="sqlserver://localhost:1433;database=testdb;integratedSecurity=true;trustServerCertificate=true;"
```

### 4. Initialize Prisma

Generate the Prisma Client and create the initial migration:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the Development Server

```bash
npm run dev
```

## Example Prisma Usage

Here's an example of how to get users from the database using Prisma:

```js
// app/api/users/route.js

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users });
}
```

## Project Structure

- `/app`: Contains all the Next.js pages.
- `/prisma`: Contains the Prisma schema file.
- `/api`: Contains API routes.

## Learn More

To learn more about the technologies used in this boilerplate, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MSSQL Documentation](https://docs.microsoft.com/en-us/sql/sql-server)

## License

This project is licensed under the MIT License.
