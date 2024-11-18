# NestJS GraphQL Blog API

A modern blog API built with NestJS, GraphQL, Prisma, and PostgreSQL. This project implements a fully-featured blog system with users, posts, and comments functionality.
<p align="center" style="font-size: 20px">
	<a href="https://nestjs-graphql-blog.duong.website/graphql">Demo</a>
</p>

## Features

- 🚀 GraphQL API with Apollo Server
- 📱 Type-safe database access with Prisma ORM
- 🔐 User management system
- 📝 Blog posts with CRUD operations
- 💬 Comments system
- ✨ Input validation
- 🔄 Real-time updates (coming soon)

## Tech Stack

- [NestJS](https://nestjs.com/) - A progressive Node.js framework
- [GraphQL](https://graphql.org/) - A query language for APIs
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js
- [PostgreSQL](https://www.postgresql.org/) - Open source relational database
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/nduongg04/nestjs-graphql-blog.git
cd nestjs-graphql-blog
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add:

```
DATABASE_URL="postgresql://username:password@localhost:5432/blog_db"
PORT=3000
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run start:dev
```

The GraphQL playground will be available at: `http://localhost:3000/graphql`

## Available Scripts

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

# run tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Structure

### Models

- User
- Post
- Comment

### Operations

#### Queries

- `users`: Get all users
- `user(id: Int!)`: Get a specific user
- `posts`: Get all posts
- `post(id: Int!)`: Get a specific post
- `comments`: Get all comments
- `comment(id: Int!)`: Get a specific comment

#### Mutations

- Users:
  - `createUser`
  - `updateUser`
  - `removeUser`
- Posts:
  - `createPost`
  - `updatePost`
  - `removePost`
- Comments:
  - `createComment`
  - `updateComment`
  - `removeComment`

## Project Structure

The project follows a modular architecture with separate modules for users, posts, and comments. Each module contains its own resolvers, services, and DTOs.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is MIT licensed.

## Support

For support, email `nduongg04@gmail.com`.
