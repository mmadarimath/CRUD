# 📝 React Todo App

A fully functional **React Todo application** built with a **clean mental model, proper component architecture, and real-world patterns**.

This project focuses not just on features, but on **how to think in React**:
- Single source of truth
- Clear data flow
- Separation of concerns
- Predictable state updates

---

## 🚀 Features

- ✅ Add todos using **Enter key**
- 🔍 Search todos by text
- 🏷 Filter todos by category
- ✏️ Inline edit todos  
  - **Enter** → save  
  - **Escape** → cancel
- ☑️ Toggle completed / uncompleted tasks
- ❌ Delete todos
- 🎨 Clean and minimal UI with CSS
- 🧠 Derived state (no duplicated data)

---

## 🧠 Core Mental Model

> **App owns the data.  
> Child components report user actions.**

- All todos and business logic live in the `App` component
- Child components are **stateless or UI-focused**
- Search and filters are **derived**, not stored
- Editing is **temporary UI state**, not part of the todo object

This approach avoids common React bugs and scales well for larger apps.

---

## 🧱 Todo Data Structure

Each todo item has the following shape:

```js
{
  id: number,
  task: string,
  completed: boolean,
  category: "Personal" | "Work" | "Study"
}


