# 🚀 Dev Stack

A modern React app that lets developers explore, compare, and build their ideal development stack from a curated list of technologies across frontend, backend, database, and more.

---

## 🛠️ Technologies Used

- **React** + **TypeScript**
- **Tailwind CSS**
- **Vite** (build tool)
- **React-Toastify** (NPM package)
- **JSON** (technology data)

---

## ✨ Features

1. **Browse Technologies** — 12+ tech cards with icons, ratings, difficulty, and badges loaded from a JSON file.
2. **Your Stack Panel** — Add or remove technologies to a personal sidebar with live count and empty state.
3. **Toast Notifications** — Instant alerts for adding, removing, and duplicate attempts using React-Toastify.

---

## ❓ React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets you write HTML-like code inside JavaScript. It is used in React to make UI code easier to read and write by combining markup and logic in one place.

### 2. What is the difference between props and state?
Props are read-only data passed from a parent to a child. State is data managed inside a component that can change over time and trigger re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` lets a component store and update local data. In this project, I used it to manage `technologies` (JSON data), `stack` (selected items), and `loading` (fetch status).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after render. I used it to load the JSON data once when the component mounts.

### 5. Why does every item in a .map() list need a unique key prop?
The `key` helps React identify which items changed, were added, or removed — so it can update the DOM efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. I used it in the Sidebar to show *"Your stack is empty."* when the stack length is 0.

### 7. How do you pass data from a parent to a child, and how does a child send something back?
Data goes down via **props**. A child sends data back by calling a **callback function** passed from the parent (e.g., `onAdd={addToStack}`).