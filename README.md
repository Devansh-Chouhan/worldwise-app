# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- 
# WorldWise App

WorldWise App is a React-based web application designed to explore cities and countries around the world. It allows users to view city details, add new cities, and more.

## Features

- **Authentication**: Secure login with a fake authentication system.
- **City and Country Listings**: Explore a list of cities and countries.
- **Interactive Maps**: Utilizes Leaflet.js for interactive mapping.
- **Responsive Design**: Mobile-friendly interface using responsive CSS.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Devansh-Chouhan/worldwise-app.git
   cd worldwise-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Technologies Used

- React.js
- React Router
- Leaflet.js
- JSON Server (for mock API)
- CSS (custom styling with global variables)
- React Context API (for state management with useReducer)

## Usage

1. **Homepage**: Navigate through different sections like Pricing, Product details, and more.
2. **App Section**: Requires login; explore cities, countries, and add new cities using the form.

