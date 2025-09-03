# Technical Context: Russell Taylor Portfolio Website

## Technology Stack

### Frontend Framework

-   **Next.js 15.1.6**: React framework with App Router
-   **React 19.0.0**: Latest React version with modern features
-   **TypeScript 5**: Type-safe development environment

### Styling & UI

-   **Tailwind CSS 3.4.1**: Utility-first CSS framework
-   **PostCSS 8**: CSS processing and optimization
-   **Geist Fonts**: Modern typography from Vercel

### Development Tools

-   **ESLint 9**: Code quality and consistency
-   **ESLint Config Next**: Next.js-specific linting rules
-   **Node.js**: Runtime environment

### External Services

-   **SendGrid**: Email delivery service for contact form
-   **Vercel Analytics**: Performance and user analytics
-   **Vercel**: Hosting and deployment platform

## Development Setup

### Prerequisites

-   Node.js (version compatible with Next.js 15)
-   npm or yarn package manager
-   Git for version control

### Environment Variables Required

```env
SENDGRID_API_KEY=your_sendgrid_api_key
YOUR_EMAIL_ADDRESS=your_email@domain.com
VERIFIED_SENDER_EMAIL=verified_sender@domain.com
```

### Available Scripts

-   `npm run dev`: Start development server
-   `npm run build`: Build for production
-   `npm run start`: Start production server
-   `npm run lint`: Run ESLint checks

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── send-email/    # Contact form endpoint
│   ├── components/        # Reusable components
│   │   └── Navbar.tsx     # Navigation component
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                 # Static assets
│   └── images/            # Image files
```

## Technical Constraints

-   **Browser Support**: Modern browsers with ES6+ support
-   **Performance**: Lighthouse score targets for Core Web Vitals
-   **Accessibility**: WCAG 2.1 AA compliance
-   **SEO**: Next.js built-in optimization features

## Dependencies

### Production Dependencies

-   `@sendgrid/mail`: Email functionality
-   `@vercel/analytics`: Analytics integration
-   `lucide-react`: Icon library
-   `next`: React framework
-   `react`: UI library
-   `react-dom`: React DOM rendering

### Development Dependencies

-   `@eslint/eslintrc`: ESLint configuration
-   `@types/node`: Node.js type definitions
-   `@types/react`: React type definitions
-   `@types/react-dom`: React DOM type definitions
-   `eslint`: Code linting
-   `eslint-config-next`: Next.js ESLint config
-   `postcss`: CSS processing
-   `tailwindcss`: CSS framework
-   `typescript`: Type checking

## Deployment

-   **Platform**: Vercel
-   **Build Command**: `npm run build`
-   **Output Directory**: `.next`
-   **Node Version**: Compatible with Next.js 15 requirements
