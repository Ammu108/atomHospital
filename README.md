# Atom Hospital - Doctor Appointment Booking Platform

A modern, full-stack healthcare platform enabling patients to book appointments with doctors, manage their medical history, and healthcare providers to manage their practice. Built with Next.js 15, tRPC, and PostgreSQL.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Authentication & Authorization](#authentication--authorization)
- [Database](#database)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)

## ✨ Features

### Patient Features

- **User Authentication** - Secure sign-up and login with JWT-based authentication
- **Doctor Discovery** - Browse doctors by specialty with detailed profiles and ratings
- **Appointment Booking** - Multi-step appointment booking with date/time selection
- **My Appointments** - View, reschedule, and cancel appointments with status tracking
- **Medical Records** - Access consultation notes and appointment history
- **Profile Management** - Update personal information and medical history

### Core Platform Features

- **Real-time Availability** - Live doctor availability and appointment slots
- **Responsive Design** - Mobile-first UI with Tailwind CSS and dark theme
- **Type-Safe API** - End-to-end type safety with TypeScript and tRPC
- **Performance Optimized** - Next.js 15 with Turbo for fast builds and optimal performance
- **Accessible UI** - Base UI components with accessibility best practices

## 🛠️ Tech Stack

### Frontend

- **Framework** - Next.js 15 (App Router)
- **Language** - TypeScript
- **Styling** - Tailwind CSS 4
- **UI Components** - Base UI, Shadcn/ui, Tabler Icons
- **State Management** - React Query (TanStack Query)
- **Validation** - Zod

### Backend

- **API** - tRPC 11
- **Authentication** - JWT with bcryptjs
- **Server** - Next.js API routes with Node runtime

### Database

- **ORM** - Drizzle ORM
- **Database** - PostgreSQL
- **Migrations** - Drizzle Kit

### Development Tools

- **Code Quality** - Biome (linting & formatting)
- **Package Manager** - pnpm
- **Build Tool** - Next.js + Turbopack

## 📁 Project Structure

```
atom-hospital/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── doctors/           # Doctors directory
│   │   ├── book-appointment/  # Appointment booking flow
│   │   ├── my-appointments/   # User appointments dashboard
│   │   ├── contact/           # Contact page
│   │   ├── privacy-policy/    # Privacy policy
│   │   ├── auth/              # Authentication pages
│   │   ├── layout.tsx         # Root layout
│   ├── server/
│   │   ├── api/               # tRPC routers
│   │   └── db/                # Database configuration
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── navbar.tsx         # Navigation bar
│   │   ├── footer.tsx         # Footer
│   │   └── kokonutui/         # Third-party components
│   ├── features/
│   │   └── home/              # Home page sections
│   ├── trpc/                  # tRPC client setup
│   ├── styles/
│   │   └── globals.css        # Global styles and animations
│   └── lib/                   # Utilities and helpers
├── drizzle/                   # Database migrations
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── drizzle.config.ts         # Drizzle configuration
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL 13+
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/atom-hospital.git
cd atom-hospital
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Setup environment variables**

```bash
cp .env.example .env
```

Update `.env` with your configuration (see [Environment Variables](#environment-variables) section)

4. **Setup the database**

```bash
# Create database schema
pnpm run db:push

# (Optional) Open Drizzle Studio to view your database
pnpm run db:studio
```

5. **Start the development server**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/atom-hospital"

# JWT (for authentication)
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"

# (Optional) NextAuth.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Variable Descriptions

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:password@localhost:5432/atom-hospital` |
| `JWT_SECRET` | Secret key for JWT token signing (min 32 chars) | Random secure string |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js session encryption | Random secure string |
| `NEXTAUTH_URL` | Base URL for NextAuth.js callbacks | `http://localhost:3000` (dev), `https://yourdomain.com` (prod) |

## 📜 Available Scripts

### Development

```bash
# Start development server with Turbo
pnpm run dev

# Type-check TypeScript without emitting
pnpm run typecheck

# Format code with Biome
pnpm run format

# Lint code with Biome
pnpm run lint

# Check and fix linting issues
pnpm run check:write
```

### Database

```bash
# Generate database migrations
pnpm run db:generate

# Apply pending migrations
pnpm run db:migrate

# Push schema changes to database (development only)
pnpm run db:push

# Open Drizzle Studio for database management
pnpm run db:studio
```

### Production

```bash
# Build for production
pnpm run build

# Start production server
pnpm run start

# Preview production build locally
pnpm run preview
```

## 🏗️ Architecture

### Why This Architecture?

The project uses a **single-app structure** with **tRPC + Next.js** for several reasons:

1. **Type Safety** - tRPC provides end-to-end type safety between frontend and backend
2. **Code Colocation** - API and frontend code in the same repository for easier refactoring
3. **Performance** - Server-side rendering, incremental static regeneration, and optimization
4. **Developer Experience** - Hot module reloading, TypeScript support, minimal boilerplate

### API Layer (tRPC)

The backend is structured as tRPC routers in `/src/server/api/`:

- **Type-safe RPC calls** - Fully typed procedures with input validation
- **React Query Integration** - Automatic caching and synchronization
- **Middleware Support** - Authentication checks and authorization
- **Error Handling** - Structured error responses

```typescript
// Client usage
const { data: doctors } = trpc.doctor.getAll.useQuery();

// Server definition
export const doctorRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.doctors.findMany();
  }),
});
```

### Database Layer (Drizzle ORM)

- **Type-safe queries** - Fully typed SQL from schema definitions
- **Migrations** - Version-controlled database changes
- **PostgreSQL** - Robust, production-ready database

## 🔐 Authentication & Authorization

### How It Works

1. **Sign Up** - Users register with email and password (hashed with bcryptjs)
2. **Login** - Users receive a JWT token stored securely in cookies
3. **Protected Routes** - Middleware checks JWT validity before accessing protected pages
4. **Role-Based Access** - Roles (PATIENT, DOCTOR, ADMIN) control access to features

### Protected Procedures

```typescript
// Server-side authentication check
const protectedProcedure = t.procedure.use(async (opts) => {
  const user = await getUser(); // Get from JWT
  if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return opts.next({ ctx: { user } });
});
```

## 🗄️ Database

### Key Tables

- **users** - Patient/doctor accounts with authentication data
- **doctors** - Doctor profiles with specialization and availability
- **appointments** - Booking records with status tracking
- **consultations** - Medical records of completed appointments

### Migrations

Migrations are stored in `/drizzle` and versioned with your code:

```bash
# Create a new migration after schema changes
pnpm run db:generate

# Apply migrations to database
pnpm run db:push
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Branch naming** - Use `feature/` or `fix/` prefixes
   ```bash
   git checkout -b feature/appointment-reminders
   ```

2. **Code quality** - Run linters before committing
   ```bash
   pnpm run check:write
   pnpm run format
   ```

3. **Type safety** - Ensure no TypeScript errors
   ```bash
   pnpm run typecheck
   ```

4. **Testing** - Add tests for new features (when test setup is added)

5. **Commit messages** - Use conventional commits
   ```
   feat: add appointment reminders
   fix: resolve booking form validation
   ```

## 🚀 Future Improvements

- **Payment Integration** - Stripe/Razorpay for online consultations and deposits
- **Email Notifications** - Appointment reminders, confirmations, and follow-ups
- **SMS Alerts** - Two-way SMS for appointment updates
- **Video Consultations** - WebRTC integration for remote consultations
- **Analytics Dashboard** - Admin analytics for bookings, revenues, and user behavior
- **Appointment Ratings** - Patient reviews and ratings for doctors
- **Prescription Management** - Digital prescriptions and medication history
- **Insurance Integration** - Coverage verification and claims processing
- **Multi-language Support** - Internationalization (i18n) for global reach
- **Mobile App** - React Native app for iOS and Android
- **AI-Powered Chatbot** - Initial consultation and symptom checking

## 📞 Support

For issues, questions, or feedback:

- **GitHub Issues** - Report bugs and request features
- **Email** - contact@atomhospital.com
- **Documentation** - [Full docs](https://docs.atomhospital.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy coding! Let's revolutionize healthcare together. 🏥**
