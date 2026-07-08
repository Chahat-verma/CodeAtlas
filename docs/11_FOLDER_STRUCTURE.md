# Folder Structure

**Project:** CodeAtlas

**Version:** 1.0

---

# 1. Purpose

This document defines the official folder structure for CodeAtlas.

It ensures that every developer knows where code belongs and prevents an unorganized codebase as the project grows.

---

# 2. Design Principles

The folder structure should:

- Be easy to understand
- Separate responsibilities
- Scale as features grow
- Follow Next.js App Router conventions
- Encourage reusable code
- Avoid deeply nested folders

---

# 3. Proposed Project Structure

```
codeatlas/
│
├── docs/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── hooks/
│   ├── lib/
│   ├── providers/
│   ├── public/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── tests/
│   ├── types/
│   ├── utils/
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
│
└── README.md
```

---

# 4. Folder Responsibilities

## app/

Contains all routes using the Next.js App Router.

---

## components/

Reusable UI components shared across the application.

Examples:

- Button
- Input
- Sidebar
- Navbar
- Card

---

## features/

Business logic grouped by feature.

Each feature owns its own logic and feature-specific components.

---

## hooks/

Reusable custom React hooks.

Example:

- useTheme
- useSidebar

---

## lib/

Configuration and third-party integrations.

Examples:

- Utility libraries
- Theme configuration

---

## services/

Communication with APIs and backend services.

---

## store/

Global state management.

Examples:

- Theme
- User preferences
- Playground state

---

## types/

Shared TypeScript types and interfaces.

---

## utils/

Pure helper functions.

Examples:

- Date formatting
- String utilities

---

## constants/

Application-wide constants.

Examples:

- Routes
- Navigation items
- Theme values

---

## public/

Static assets.

Examples:

- Images
- Icons
- Fonts

---

## styles/

Global styling beyond Tailwind where needed.

---

## docs/

Project documentation.

---

## tests/

Unit and integration tests.

---

# 5. Component Organization

Reusable UI components belong in:

```
components/ui/
```

Feature-specific components belong in:

```
features/<feature-name>/
```

Example:

```
features/
└── playground/
    ├── components/
    ├── hooks/
    ├── types/
    └── utils/
```

---

# 6. Naming Conventions

Folders

- lowercase
- kebab-case when needed

Examples

```
code-viewer
execution-panel
memory-visualizer
```

Files

Components

```
AppButton.tsx
Sidebar.tsx
Navbar.tsx
```

Hooks

```
useTheme.ts
useSidebar.ts
```

Utilities

```
formatCode.ts
parseOutput.ts
```

Types

```
execution.ts
memory.ts
```

---

# 7. Architecture Rules

- Do not place business logic inside UI components.
- Keep reusable components generic.
- Keep feature-specific code inside its feature folder.
- Avoid circular dependencies.
- Keep files focused on one responsibility.

---

# 8. Future Growth

This structure is designed to support:

- Authentication
- AI Assistant
- Multiple programming languages
- Collaboration
- User accounts
- Cloud synchronization
- Plugin system

without major restructuring.

---

# 9. Folder Structure Checklist

Before creating a new folder:

- Does a suitable folder already exist?
- Is the folder reusable?
- Does it follow naming conventions?
- Does it have a single responsibility?
- Will another developer immediately understand its purpose?