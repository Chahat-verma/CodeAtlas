# Design System

**Project:** CodeAtlas

**Version:** 1.0

---

# 1. Design Philosophy

CodeAtlas is a professional educational platform designed to help developers understand how C++ code executes internally.

The interface should always prioritize learning over decoration.

## Core Principles

- Simplicity over complexity
- Readability first
- Developer-focused interface
- Fast interactions
- Accessibility by default
- Consistent spacing
- Responsive design
- Reusable components
- Minimal cognitive load

---

# 2. Brand Identity

## Product Name

CodeAtlas

## Tagline

Understand Code Visually.

## Brand Personality

- Professional
- Modern
- Educational
- Trustworthy
- Technical
- Clean
- Minimal

---

# 3. Color Palette

The application will use semantic colors instead of page-specific colors.

## Primary

Tailwind Blue

- Primary: blue-600
- Hover: blue-700
- Active: blue-800

## Secondary

Slate

- slate-600
- slate-700
- slate-800

## Background

### Light Mode

- gray-50

### Dark Mode

- gray-950

## Surface

### Light

- white

### Dark

- gray-900

## Success

- green-600

## Warning

- amber-500

## Error

- red-600

## Information

- cyan-600

---

# 4. Typography

## Primary Font

Inter

Purpose:

General application UI.

## Monospace Font

JetBrains Mono

Purpose:

Source code.

## Heading Sizes

| Element | Weight |
|----------|---------|
| H1 | Bold |
| H2 | Semibold |
| H3 | Medium |

## Body

Regular

## Caption

Small

## Code

JetBrains Mono

---

# 5. Spacing System

The project follows an 8-point spacing system.

Common spacing values

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px
- 64px

---

# 6. Border Radius

Buttons

Medium rounded corners

Cards

Large rounded corners

Inputs

Medium rounded corners

Dialogs

Large rounded corners

---

# 7. Shadows

Small

Used for buttons.

Medium

Used for cards.

Large

Used for dialogs.

Avoid heavy shadows.

---

# 8. Icons

Library

Lucide React

Guidelines

- Outline icons only
- Consistent sizing
- Do not mix icon libraries

---

# 9. Buttons

Variants

## Primary

Main user actions.

## Secondary

Alternative actions.

## Ghost

Low emphasis actions.

## Danger

Delete operations.

## Disabled

Unavailable actions.

## Loading

Operations in progress.

Each button must support:

- Hover
- Focus
- Active
- Disabled

---

# 10. Inputs

Standard components

- Text Input
- Password Input
- Search Input
- Textarea
- Select
- Checkbox
- Radio
- Switch

Requirements

- Clear labels
- Keyboard accessible
- Visible focus state
- Error messages below input

---

# 11. Cards

Every card contains

- Header
- Body
- Optional Footer

Cards should use consistent padding and border radius.

---

# 12. Navigation

The application includes

- Top Navigation
- Left Sidebar
- Breadcrumb Navigation
- Tabs where appropriate

Navigation must remain consistent across all pages.

---

# 13. Code Blocks

Code blocks are a primary feature of CodeAtlas.

Requirements

- JetBrains Mono font
- Line numbers
- Horizontal scrolling
- Syntax highlighting support
- Copy button
- Responsive layout

---

# 14. Animations

Animations should improve usability, not distract.

Recommended duration

150ms–250ms

Examples

- Button hover
- Sidebar open/close
- Modal transitions
- Loading indicators

Avoid excessive animations.

---

# 15. Responsive Breakpoints

Tailwind default breakpoints

- Mobile
- Tablet
- Laptop
- Desktop
- Large Desktop

---

# 16. Accessibility

Minimum requirements

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Proper ARIA attributes where required
- High color contrast
- Reduced motion support

---

# 17. Dark Mode

Dark mode is supported from the beginning.

Requirements

- Proper background hierarchy
- Readable typography
- Appropriate border colors
- Compatible syntax highlighting

---

# 18. Component Naming

Examples

- AppButton
- AppInput
- Navbar
- Sidebar
- CodeEditor
- CodeViewer
- ExecutionPanel
- MemoryPanel
- VariablePanel

Use PascalCase for all React components.

---

# 19. File Naming

Follow Next.js App Router conventions.

Examples

- page.tsx
- layout.tsx
- loading.tsx
- error.tsx

Reusable components should use PascalCase.

Example

AppButton.tsx

---

# 20. Design Checklist

Every new component should satisfy the following checklist before it is merged:

- Uses the design system
- Reuses existing components where possible
- Supports keyboard navigation
- Works on supported screen sizes
- Supports dark mode
- Uses semantic HTML
- Avoids unnecessary animations
- Maintains consistent typography and spacing