# C Boilerplate Generator for VS Code

A Visual Studio Code extension that generates **clean, exam-ready C boilerplate code**
for university programming assignments.

The extension parses the problem statement written as a multiline C comment and
automatically generates a structured C file layout with menus, function stubs,
and best practices — **without generating full solutions**.

> 🚧 This extension is under active development.

---

## ✨ Motivation

Many university C assignments follow a repetitive structure:
- A long problem statement at the top of the file
- An interactive menu
- One function per requirement
- No global variables
- Clear separation between utility code and requirements

This extension aims to **save time** by generating only the boilerplate structure,
so you can focus on implementing the actual logic.

---

## ⚙️ Current Features

- Adds a command:  
  **`Generate C Assignment Boilerplate`**
- Accesses the active editor and target file

---

## 🛠️ Planned Features

- Detect and parse the first multiline C comment (`/* ... */`)
- Extract menu options from problem statements (e.g. `1.`, `2.`, `0. Exit`)
- Generate:
  - Standard includes (`stdio.h`, `stdlib.h`, etc.)
  - Clearly separated sections:
    - `UTILS`
    - `CERINTE` (requirements)
    - `MAIN`
  - A `do { ... } while(opt != 0);` menu loop
  - A `switch(opt)` with placeholder cases
- Exam-ready, readable, and clean C code

---

## 📌 Design Principles

- **No global variables**
- **One function per menu option**
- **Clear separation of concerns**
- **No solution logic generated**
- Heuristic-based parsing (not strict NLP)

---

## 🚀 Usage (Planned)

1. Write your assignment problem as a multiline comment at the top of a `.c` file
2. Open Command Palette (`Ctrl+Shift+P`)
3. Run **Generate C Assignment Boilerplate**
4. Fill in the logic manually

---

## 🧩 Requirements

- Visual Studio Code
- Node.js (for development)

---

## 🐛 Known Issues

- None (early development stage)

---

## 📝 Release Notes

### 0.1.0
- Initial extension setup
- Command registration
- Active editor access

---

## 📚 Development Notes

This project is developed incrementally using:
- TypeScript
- VS Code Extension API
- Small feature branches and commits

---