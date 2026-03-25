# AGENTS.md

## Project Overview
RepManagement is a web platform for a social media manager that also includes e-commerce functionality.
The project is built with Next.js, TypeScript, Tailwind CSS, Prisma, Zod, and MongoDB.

## Main Goals
- Deliver a professional, fast, responsive, and conversion-oriented experience
- Keep content management, service presentation, and e-commerce flows clean and scalable
- Maintain high code quality and consistent architecture across the project

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- Zod
- MongoDB

## Architecture Rules
- Use TypeScript strictly. Avoid `any` unless absolutely necessary
- Prefer App Router conventions in Next.js
- Keep server-side logic on the server
- Use Prisma for all database access
- Validate all inputs with Zod before processing
- Do not bypass validation for forms, APIs, or server actions
- Keep data access isolated and predictable
- Separate UI concerns from business logic
- Prefer reusable components over duplicated UI blocks

## Database Rules
- MongoDB is the source of truth for persisted data
- Prisma schema changes must remain consistent with existing collections and relations
- Avoid unsafe queries or assumptions about optional fields
- Model entities clearly for both service pages and e-commerce features
- Be careful with nullability and defaults

## Validation Rules
- Use Zod for:
  - form validation
  - API payload validation
  - server action input validation
  - environment variable parsing when possible
- Return user-friendly validation errors
- Keep schemas close to the domain they validate

## Frontend Rules
- Use Tailwind CSS for styling
- Build responsive UI by default
- Keep styling consistent across marketing pages, admin areas, and shop flows
- Prefer accessible HTML structure
- Avoid overly complex client-side state when server-driven UI is enough
- Optimize for clarity, performance, and conversion

## Next.js Rules
- Prefer server components unless client components are necessary
- Use client components only for interactive UI
- Keep data fetching close to where data is used
- Handle loading and error states explicitly
- Be mindful of caching and dynamic rendering behavior
- Use server actions or route handlers consistently based on the feature

## E-commerce Rules
- Product, cart, checkout, and order flows must be predictable and easy to maintain
- Treat prices, availability, and order data carefully
- Never trust client-provided pricing values without server-side verification
- Ensure product-related actions are validated and safe
- Keep future scalability in mind for catalog expansion

## Code Style
- Write small, readable functions
- Prefer explicit names over abbreviations
- Avoid deeply nested logic where possible
- Extract repeated logic into utilities, services, or hooks
- Keep components focused on one responsibility
- Comment only when the intent is not obvious from the code

## File/Folder Expectations
- Organize by feature or domain when reasonable
- Keep Prisma-related logic separate from presentation
- Keep validation schemas separate but near the relevant feature
- Shared UI components should remain generic and reusable

## What AI Agents Should Optimize For
- Code readability
- Long-term maintainability
- Safe database access
- Strong input validation
- Good UX across marketing and e-commerce pages
- Production-ready patterns over quick hacks

## What AI Agents Must Avoid
- Introducing unvalidated inputs
- Mixing business logic directly inside UI components
- Bypassing Prisma or Zod conventions
- Creating inconsistent styling patterns
- Using fragile or hardcoded logic that hurts scalability
