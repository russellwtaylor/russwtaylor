# System Patterns: Russell Taylor Portfolio Website

## Architecture Overview

The portfolio website follows a modern React/Next.js architecture with the App Router pattern, emphasizing component-based development and server-side rendering capabilities.

## Key Design Patterns

### 1. Component Architecture

-   **Functional Components**: All components use modern React functional components with hooks
-   **Component Composition**: Reusable components like `Navbar` that can be composed across pages
-   **Props Interface**: TypeScript interfaces define component contracts (e.g., `NavLinkProps`)

### 2. State Management

-   **Local State**: React `useState` for component-level state management
-   **Form State**: Controlled components for form inputs with validation
-   **Toast Notifications**: Local state for user feedback messages

### 3. Routing Pattern

-   **App Router**: Next.js 15 App Router for file-based routing
-   **Page Components**: Each route has a dedicated page component
-   **Layout Wrapper**: Root layout provides consistent structure across all pages

### 4. API Integration

-   **API Routes**: Next.js API routes for backend functionality
-   **Email Service**: SendGrid integration for contact form submissions
-   **Error Handling**: Try-catch patterns with user-friendly error messages

### 5. Styling Patterns

-   **Tailwind Utilities**: Utility-first CSS approach for rapid development
-   **Responsive Design**: Mobile-first responsive breakpoints
-   **Dark Theme**: Consistent dark color scheme with opacity overlays
-   **Component Styling**: Consistent button and form styling patterns

## Component Relationships

### Layout Hierarchy

```
RootLayout
├── Analytics (Vercel)
├── Background Image (with overlay)
├── Navbar (fixed position)
└── Main Content (children)
    ├── Home Page
    ├── About Page
    ├── Projects Page
    └── Contact Page
```

### Navigation Structure

-   **Desktop**: Horizontal navigation with hover effects
-   **Mobile**: Hamburger menu with slide-out navigation
-   **Responsive**: Breakpoint-based navigation switching

### Form Patterns

-   **Contact Form**: Controlled inputs with validation
-   **Error Display**: Inline validation and toast notifications
-   **Success Handling**: Form clearing and user feedback

### Project Display Patterns

-   **Project Structure**: Title, image, GitHub URL, and description
-   **Description Flexibility**: Mix of technical deep-dives and business impact stories
-   **Image Integration**: Next.js Image component with optimization
-   **External Links**: GitHub URLs with proper security attributes

## Data Flow Patterns

### Contact Form Flow

1. User input → Component state
2. Form submission → API route
3. SendGrid email → Success/error response
4. User feedback → Toast notification

### Page Navigation Flow

1. User click → Next.js routing
2. Page component → Layout wrapper
3. Content rendering → User interaction

## Responsive Design Patterns

### Breakpoint Strategy

-   **Mobile First**: Base styles for mobile devices
-   **Tablet**: `md:` prefix for medium screens
-   **Desktop**: `lg:` prefix for large screens

### Layout Adaptations

-   **Grid Systems**: CSS Grid with responsive column counts
-   **Flexbox**: Flexible layouts that adapt to content
-   **Spacing**: Responsive padding and margins

## Performance Patterns

### Image Optimization

-   **Next.js Image**: Automatic optimization and lazy loading
-   **Priority Loading**: Critical images marked with priority
-   **Responsive Images**: Appropriate sizing for different devices

### Code Splitting

-   **Page-based**: Automatic code splitting by route
-   **Component Lazy Loading**: Components loaded as needed
-   **Bundle Optimization**: Next.js automatic optimization

## Security Patterns

### Form Validation

-   **Client-side**: Real-time validation feedback
-   **Server-side**: API route validation
-   **Email Validation**: Regex pattern matching

### Environment Variables

-   **API Keys**: Secure storage in environment variables
-   **Email Configuration**: Verified sender addresses
-   **Production Security**: No hardcoded sensitive data

## Accessibility Patterns

### Semantic HTML

-   **Proper Headings**: Hierarchical heading structure
-   **Form Labels**: Associated labels for form inputs
-   **Navigation**: ARIA labels for mobile menu

### Keyboard Navigation

-   **Focus Management**: Proper focus indicators
-   **Tab Order**: Logical tab sequence
-   **Interactive Elements**: Keyboard accessible buttons and links
