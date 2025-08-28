# Vite + React + Tailwind CSS Boilerplate

A modern, fast, and feature-rich boilerplate for building React applications with Vite, TypeScript, Tailwind CSS v4, and Framer Motion animations.

## ✨ Features

- ⚡ **Vite 7.0** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with concurrent features
- 🎨 **Tailwind CSS v4** - Latest version with new `@import` syntax
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Full type safety
- 🔍 **ESLint** - Code linting and formatting
- 🚀 **SWC** - Ultra-fast TypeScript/JSX compilation
- 🎯 **React Icons** - Comprehensive icon library

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | ^7.0.0 | Build tool and dev server |
| **React** | ^19.1.0 | UI library |
| **TypeScript** | ~5.8.3 | Type safety |
| **Tailwind CSS** | ^4.1.11 | Utility-first CSS framework |
| **Framer Motion** | ^12.23.0 | Animation library |
| **React Icons** | ^5.5.0 | Icon components |
| **ESLint** | ^9.29.0 | Code linting |
| **SWC** | ^3.10.2 | Fast TypeScript/JSX compiler |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** (for cloning the repository)

### Check your Node.js version:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vite-react-tailwind-boilerplate.git
cd vite-react-tailwind-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

Or using yarn:
```bash
yarn install
```

Or using pnpm:
```bash
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📁 Project Structure

```
vite-react-tailwind-boilerplate/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo
│   ├── App.tsx                 # Main application component
│   ├── index.css              # Global styles with Tailwind imports
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # Vite type declarations
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TypeScript config
├── tsconfig.node.json        # Node-specific TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🎨 Tailwind CSS v4 Setup

This boilerplate uses **Tailwind CSS v4** with the new simplified import syntax:

### Key Changes from v3 to v4:

**Old syntax (v3):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**New syntax (v4):**
```css
@import "tailwindcss";
```

### Vite Configuration

The Tailwind CSS Vite plugin is configured in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 🎭 Framer Motion Integration

Framer Motion is pre-configured for smooth animations. Example usage:

```tsx
import { motion } from "framer-motion";

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Animated content
  </motion.div>
);
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration Files

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js specific settings

### ESLint Configuration

ESLint is configured with React-specific rules in `eslint.config.js`:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## 🎯 Creating from Scratch

If you want to recreate this boilerplate from scratch:

### 1. Initialize Vite Project

```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

### 2. Install Tailwind CSS v4

```bash
npm install tailwindcss@next @tailwindcss/vite@next
```

### 3. Configure Vite

Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 4. Update CSS

Replace content in `src/index.css`:

```css
@import "tailwindcss";

body {
  margin: 0;
}
```

### 5. Install Additional Dependencies

```bash
npm install framer-motion react-icons
```

### 6. Clean Up

- Remove default Vite CSS
- Update `App.tsx` with your content
- Add your custom components

## 🚀 Production Build

To build for production:

```bash
npm run build
```

This will create a `dist` folder with optimized assets ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

The built application in the `dist` folder can be deployed to any static hosting service:

- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Configure GitHub Actions
- **Surge** - `surge dist/`

## 🔍 IDE Setup

### VS Code Extensions

Recommended extensions for the best development experience:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **ESLint**
- **Prettier**
- **Auto Rename Tag**

### VS Code Settings

Add to your `.vscode/settings.json`:

```json
{
  "css.validate": false,
  "tailwindCSS.emmetCompletions": true,
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - For the lightning-fast build tool
- [React](https://reactjs.org/) - For the amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) - For the comprehensive icon library

---

**Happy coding! 🚀**

For questions or support, please open an issue on GitHub.
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
