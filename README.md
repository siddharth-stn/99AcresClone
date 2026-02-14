# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Since you have transitioned your **99acres Clone** from a static HTML project to a modern **React + Vite** architecture, your README needs to reflect the new build tools and project structure.

Here is the updated README tailored for your **learn-react** project.

---

# 99acres Clone - React + Vite Edition 🏠

## 📖 About The Project

This is a **responsive frontend clone** of the Indian real estate portal, **99acres**, rebuilt using **React.js** and **Vite**.

I am developing this as part of my **Full Stack Web Development** journey at **WsCube Tech**. Moving from Vanilla JS to React allows for a more scalable, component-based architecture, which is essential for modern web applications.

This project also serves as a testing ground for **Tailwind CSS v4** and **AI-Assisted Development**, where I utilize AI to optimize React component logic and refine UI nuances.

---

## 🛠️ Tech Stack

| Technology            | Usage                                                             |
| --------------------- | ----------------------------------------------------------------- |
| **React (Vite)**      | Core library for building a component-based UI with fast HMR.     |
| **Tailwind CSS v4**   | Utility-first styling with the latest PostCSS integration.        |
| **Font Awesome**      | React-integrated icons for search, menus, and UI elements.        |
| **JavaScript (ES6+)** | Modern logic handling, including props destructuring and mapping. |
| **Git & GitHub**      | Version control for the project hosted on my **Mac Air M4**.      |

---

## ✨ Key Features

### 🧩 Component-Based Architecture

- Broken down the UI into reusable components like `Card`, `Header`, and `HeroSection`.
- Uses a **Styles Object Pattern** to pass custom Tailwind classes into nested elements for high reusability.

### ⚡ Lightning Fast Development

- Leveraging **Vite 7** for near-instant server starts and Hot Module Replacement (HMR).
- Optimized for the **Apple M4 chip** to ensure a smooth coding experience in the Zed editor.

### 📱 Responsive & Accessible

- **Mobile-First Design:** Fully responsive using Tailwind's breakpoint system.
- **Semantic React:** Using proper HTML5 tags within JSX to maintain high SEO and Accessibility standards.

---

## 🚀 Getting Started

To run this project locally on your **Mac Air M4** (or any other machine), follow these steps:

### Prerequisites

- **Node.js** (Latest LTS version recommended)
- **npm** (v7 or higher)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/SiddharthPande/99acres-clone-react.git
cd learn-react

```

2. **Install Dependencies**

```bash
npm install

```

3. **Run the Development Server**

```bash
npm run dev

```

4. **Build for Production**

```bash
npm run build

```

---

## 📚 Lessons Learned (React Nuances)

1. **Prop Handling:** Learning how to pass complex style objects to children for nested customization.
2. **Tailwind v4 Integration:** Successfully configured the new `@tailwindcss/postcss` plugin to work with Vite.
3. **State Management:** Transitioning from DOM manipulation to React's declarative state-driven UI.

---

## 👤 Author

**Siddharth Pande**

- **School Principal** & Aspiring Full Stack Developer
- Founder of **BaseCamp Edu Prep**
- Connect on [GitHub](https://github.com/dashboard)

---

_This project is for educational purposes only and is not affiliated with 99acres._

---
