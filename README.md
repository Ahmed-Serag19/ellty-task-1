# Page Selector Component

A simple, professional React + TypeScript application demonstrating a page selector form with clean architecture and separation of concerns.

## Features

- ✅ Multi-select checkbox interface
- ✅ "Select All" functionality
- ✅ Form validation with error messages
- ✅ Modal display of selected items
- ✅ Professional CSS styling with hover effects
- ✅ Clean, organized folder structure

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling (no frameworks)

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button/
│   │   ├── CheckboxRow/
│   │   └── Modal/
│   └── features/        # Feature-specific components
│       └── PageSelector/
├── constants/           # Application constants
├── pages/              # Page components
├── styles/             # Global styles
└── types/              # TypeScript interfaces
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Code Organization

This project demonstrates professional React/TypeScript patterns:

- **Centralized Types**: All TypeScript interfaces in `src/types/`
- **Component Organization**: UI components separated from feature components
- **Barrel Exports**: Clean imports using index files
- **CSS Classes**: No inline styles, proper separation of concerns
- **Constants Management**: Mock data and constants in dedicated folder

## License

MIT
