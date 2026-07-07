# CodeAtlas - System Architecture

## Version

v1.0

---

# Objective

Define the overall architecture of CodeAtlas Version 1.

The architecture is designed to be modular, beginner-friendly, and easy to extend in future versions.

---

# High-Level Architecture

```text
                 User
                   │
                   ▼
         ┌──────────────────┐
         │    Next.js UI    │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ Monaco Code Editor│
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ C++ Parser Engine │
         └────────┬─────────┘
                  │
                  ▼
      ┌─────────────────────────┐
      │ Execution State Engine  │
      └────────┬────────────────┘
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
Variables   Call Stack  Timeline
     │         │         │
     └─────────┼─────────┘
               ▼
      Visualization Components
```

---

# Major Components

## 1. User Interface

Responsible for:

* Layout
* Buttons
* Panels
* Navigation

Technology:

* Next.js
* React
* Tailwind CSS

---

## 2. Code Editor

Responsible for:

* Writing C++ code
* Syntax highlighting
* Line numbers

Technology:

* Monaco Editor

---

## 3. C++ Parser Engine

Responsible for:

* Reading source code
* Breaking code into understandable structures
* Preparing execution steps

---

## 4. Execution State Engine

Responsible for:

* Current line
* Variable values
* Memory state
* Function calls
* Loop tracking

This is the core of CodeAtlas.

---

## 5. Visualization Engine

Responsible for displaying:

* Current execution line
* Variables
* Memory
* Call stack
* Execution timeline

---

# Data Flow

```text
Write Code
      │
      ▼
Parse Code
      │
      ▼
Generate Execution States
      │
      ▼
Visualize Each Step
```

---

# Design Principles

* Modular architecture
* Separation of responsibilities
* Reusable components
* Easy to test
* Easy to extend

---

# Version 1 Limitations

* Single language (C++)
* Single-user application
* No authentication
* No cloud storage
