# Report Generator Web App

This is a [Next.js](https://nextjs.org) project that provides a web-based report generation tool with a rich text editor interface.

## Features

- Rich text editing with TipTap editor
- Report generation functionality
- Modern UI components using shadcn/ui
- Responsive design with Tailwind CSS
- API endpoint for report analysis

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - React components including:
  - UI components (buttons, cards, inputs, etc.)
  - TipTap editor implementation
  - Report generator interface
  - Header and footer components
- `/lib` - Utility functions and core report generation logic
- `/public` - Static assets and SVG icons

## Technology Stack

- [Next.js](https://nextjs.org) - React framework
- [TipTap](https://tiptap.dev) - Rich text editor
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- TypeScript for type safety

## Development

The project uses TypeScript for better type safety and developer experience. Key files to note:

- `app/page.tsx` - Main application page
- `components/report-generator.tsx` - Core report generation interface
- `lib/report-generator.ts` - Report generation logic
- `app/api/analyze/route.ts` - API endpoint for report analysis

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
