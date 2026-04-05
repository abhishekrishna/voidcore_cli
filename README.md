<div align="center">

<br />

```
██╗   ██╗ ██████╗ ██╗██████╗  ██████╗ ██████╗ ██████╗ ███████╗
██║   ██║██╔═══██╗██║██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║   ██║██║██║  ██║██║     ██║   ██║██████╔╝█████╗  
╚██╗ ██╔╝██║   ██║██║██║  ██║██║     ██║   ██║██╔══██╗██╔══╝  
 ╚████╔╝ ╚██████╔╝██║██████╔╝╚██████╗╚██████╔╝██║  ██║███████╗
  ╚═══╝   ╚═════╝ ╚═╝╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
```

**Scaffold production-ready NestJS CRUD APIs in seconds — not hours.**

[![npm version](https://img.shields.io/npm/v/voidcore-cli?color=7c3aed&style=flat-square)](https://www.npmjs.com/package/voidcore-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-7c3aed?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.x-e0234e?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

[Getting Started](#-quick-start) · [Commands](#-cli-commands) · [Generated Output](#-what-gets-generated) · [Roadmap](#-roadmap) · [Contributing](#-contributing)

</div>

---

## What is VoidCore CLI?

VoidCore is a **scaffolding engine** for NestJS backends. Point it at your schema, choose MongoDB or PostgreSQL, and get a fully-wired CRUD module — controller, service, DTO, entity/schema, and module registration — all generated and ready to run.

No more copying boilerplate between projects. No more hand-rolling the same `findAll`, `findOne`, `create`, `update`, `remove` methods for every resource.

```bash
# Before VoidCore — copy-paste hell
# After VoidCore
npx voidcore-cli generate --resource user --db mongo
# ✔ Generated: users.module.ts
# ✔ Generated: users.controller.ts
# ✔ Generated: users.service.ts
# ✔ Generated: user.schema.ts          (Mongoose)
# ✔ Generated: create-user.dto.ts
# ✔ Generated: update-user.dto.ts
# Done in 0.3s
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Full CRUD scaffolding** | Controller + Service + DTO + Schema/Entity, all wired together |
| **MongoDB support** | Generates Mongoose schemas with `@Schema` / `@Prop` decorators |
| **PostgreSQL support** | Generates TypeORM entities with `@Entity` / `@Column` decorators |
| **NestJS-native** | Output follows NestJS module conventions — drop it in and go |
| **Interactive UI** | Optional Next.js dashboard for managing scaffolds visually |
| **TypeScript throughout** | Strict TS, no JavaScript output |
| **Zero magic** | Generated files are plain, readable code — no hidden abstractions |

---

## 📦 Installation

### Global (recommended)

```bash
npm install -g voidcore-cli
# or
yarn global add voidcore-cli
# or
pnpm add -g voidcore-cli
```

Verify the installation:

```bash
voidcore --version
```

### Use without installing (npx)

```bash
npx voidcore-cli generate --resource product --db postgres
```

### Prerequisites

| Dependency | Version |
|---|---|
| Node.js | ≥ 18.x |
| npm / yarn / pnpm | any recent version |
| A NestJS project | ≥ 10.x |

---

## 🚀 Quick Start

### 1. Navigate to your NestJS project

```bash
cd my-nestjs-app
```

VoidCore generates files into your existing project. It does **not** create a new NestJS app — use the [NestJS CLI](https://docs.nestjs.com/cli/overview) for project initialization.

```bash
# Don't have a NestJS project yet?
npm i -g @nestjs/cli
nest new my-nestjs-app
cd my-nestjs-app
```

### 2. Scaffold a resource

**MongoDB (Mongoose)**

```bash
voidcore generate --resource user --db mongo
```

**PostgreSQL (TypeORM)**

```bash
voidcore generate --resource product --db postgres
```

### 3. Register the module

Add the generated module to your `app.module.ts`:

```ts
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```

### 4. Run your app

```bash
npm run start:dev
```

Your CRUD endpoints are live at `/users`:

```
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

---

## 🗂 What Gets Generated

### MongoDB (Mongoose) — `voidcore generate --resource post --db mongo`

```
src/
└── posts/
    ├── posts.module.ts          # NestJS module, MongooseModule.forFeature wired
    ├── posts.controller.ts      # REST controller with full CRUD routes
    ├── posts.service.ts         # Injectable service with Mongoose model injection
    ├── schemas/
    │   └── post.schema.ts       # @Schema class with Document export and SchemaFactory
    └── dto/
        ├── create-post.dto.ts   # Create DTO (extend with class-validator as needed)
        └── update-post.dto.ts   # Update DTO (PartialType of create)
```

**Example generated schema:**

```ts
// schemas/post.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  name: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
```

---

### PostgreSQL (TypeORM) — `voidcore generate --resource order --db postgres`

```
src/
└── orders/
    ├── orders.module.ts         # NestJS module, TypeORM entity registered
    ├── orders.controller.ts     # REST controller with full CRUD routes
    ├── orders.service.ts        # Injectable service with Repository<Order> injected
    ├── entities/
    │   └── order.entity.ts      # @Entity class with @PrimaryGeneratedColumn + @Column
    └── dto/
        ├── create-order.dto.ts
        └── update-order.dto.ts
```

**Example generated entity:**

```ts
// entities/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

---

## ⚙️ CLI Commands

```
voidcore [command] [options]
```

| Command | Description |
|---|---|
| `generate` | Scaffold a new CRUD resource |
| `--version` | Show CLI version |
| `--help` | Show help |

### `generate` options

| Flag | Alias | Required | Description |
|---|---|---|---|
| `--resource <name>` | `-r` | ✅ | Resource name (singular, lowercase). e.g. `user`, `product` |
| `--db <type>` | `-d` | ✅ | Database type: `mongo` or `postgres` |

**Examples:**

```bash
# Scaffold a "category" resource for PostgreSQL
voidcore generate --resource category --db postgres

# Scaffold an "invoice" resource for MongoDB
voidcore generate -r invoice -d mongo
```

---

## 🖥 Dashboard (Optional)

VoidCore ships with an optional **Next.js web UI** for managing your scaffolds visually. It provides a point-and-click interface to generate modules without touching the terminal.

### Running the dashboard locally

```bash
# Clone the repo
git clone https://github.com/abhishekrishna/voidcore_cli.git
cd voidcore_cli

# Install dependencies
npm install

# Start the dashboard
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The dashboard mirrors all CLI capabilities and lets you configure resource names, pick your database, and preview generated file output before writing to disk.

---

## 🏗 Project Structure

```
voidcore_cli/
├── app/                  # Next.js dashboard (UI layer)
│   ├── page.tsx          # Main dashboard page
│   └── ...
├── core/                 # Core scaffolding engine
│   └── ...               # Template logic and file writers
├── voidcore/             # CLI entrypoint and command definitions
│   └── ...
├── public/               # Static assets for dashboard
├── package.json
└── tsconfig.json
```

---

## 🔧 Integration Guide

### Setting up Mongoose in your NestJS app

```ts
// app.module.ts
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydb'),
    UsersModule,
  ],
})
export class AppModule {}
```

### Setting up TypeORM in your NestJS app

```ts
// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true, // disable in production
    }),
    OrdersModule,
  ],
})
export class AppModule {}
```

### Adding validation

VoidCore-generated DTOs are plain classes. Add `class-validator` decorators to the DTOs as needed:

```bash
npm install class-validator class-transformer
```

```ts
// dto/create-user.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
```

Enable the global `ValidationPipe` in `main.ts`:

```ts
app.useGlobalPipes(new ValidationPipe());
```

---

## 🛠 Local Development

Clone and run VoidCore CLI locally:

```bash
git clone https://github.com/abhishekrishna/voidcore_cli.git
cd voidcore_cli
npm install
npm run dev         # starts the Next.js dashboard on :3000
```

To test the CLI logic directly, run the generator scripts from the `voidcore/` directory.

---

## 🗺 Roadmap

- [x] NestJS + MongoDB (Mongoose) CRUD scaffolding
- [x] NestJS + PostgreSQL (TypeORM) CRUD scaffolding
- [x] Next.js visual dashboard
- [ ] Schema-driven generation via `voidcore.schema.yaml`
- [ ] JWT auth module scaffolding (`--auth jwt`)
- [ ] Role-based access control scaffold
- [ ] GraphQL resolver generation
- [ ] Swagger/OpenAPI decorator injection into generated files
- [ ] `--dry-run` flag (preview output without writing files)
- [ ] Interactive `init` wizard for project-level config
- [ ] Relations support (`--relation user:post hasMany`)
- [ ] npx-first zero-install mode
- [ ] Plugin system for custom templates

---

## 🤝 Contributing

Contributions are welcome! Whether it's a bug report, feature request, or pull request — all input is appreciated.

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/voidcore_cli.git
cd voidcore_cli
npm install
```

Please open an issue first for large changes so we can discuss the direction before you invest time building it.

**Good first issues:**
- Adding `--dry-run` preview mode
- Supporting additional databases (SQLite, MySQL)
- Improving error messages when run outside a NestJS project

---

## 📜 License

MIT © [Abhishek Krishna](https://github.com/abhishekrishna)

---

<div align="center">

Built for developers who'd rather ship features than boilerplate.

**[⭐ Star this repo](https://github.com/abhishekrishna/voidcore_cli)** if VoidCore saves you time.

</div>
