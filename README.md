# Zoo Webapp 🦁🌍

Welcome to the Zoo Webapp project! This is a ReactJS-based application designed to enhance your zoo visit experience. Our webapp provides a fun and interactive way to explore activities, get important information, and learn more about the animals.

## 🖥️ Project Overview

Our Zoo Webapp features several main pages, each with its own unique functionality:

1. **Home** - The landing page featuring quick navigation to Activities and Zoo Map.
2. **Activities** - Browse and search through various zoo activities, shows, and events with detailed schedules.
3. **Details** - Get in-depth information about specific activities and events.
4. **Zoo Map** - Interactive map to help visitors navigate the zoo grounds.

## 🚀 Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/zoo-webapp.git
   ```
2. Navigate to the project directory
   ```bash
   cd zoo-webapp
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm start
   ```
The app should now be running at http://localhost:3000!

## 📂 Project Structure
```bash
zoo-webapp/
├── public/
│   └── index.html
├── src/
│   ├── Activity_Component/
│   │   ├── Activity.jsx
│   │   └── Activity.css
│   ├── Footer_Component/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Header_Component/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── logo.png
│   ├── Homepage_Component/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── zoo_map.png
│   │   └── zoo_show.jpg
│   ├── Details.jsx
│   ├── Map.jsx
│   ├── App.js
│   └── index.js
└── README.md
```

## 🎨 Features

- **Modern UI Design**: Clean and intuitive interface with consistent styling
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Interactive Components**: 
  - Dynamic navigation with animated burger menu
  - Search functionality for activities
  - Date filtering for events
  - Interactive cards with hover effects
- **Component-Based Architecture**: Organized into reusable, maintainable components

## 🛠️ Built With

- React.js
- React Router for navigation
- Lucide React for icons
- CSS with variables for consistent theming
