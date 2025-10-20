# immutadeep
A lightweight utility for deep, immutable updates in JS.
# ImmutaDeep

**ImmutaDeep** is a simple, yet powerful micro-utility for performing **deep, immutable updates** on JavaScript objects and arrays. It's designed to solve the problem of verbose, nested spread operators (`...`) when managing complex state.

## 🚀 Why Use ImmutaDeep?

1.  **Immutability Guaranteed:** It only clones the objects/arrays along the path to the updated property, leaving the original source object completely untouched.
2.  **Simple API:** A single function, `updateDeep(source, path, value)`.
3.  **Lightweight:** Zero dependencies and under 1KB minified, making it fast and portable.

## 📦 Installation

```bash
npm install immutadeep
# or
yarn add immutadeep
