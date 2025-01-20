# youtube-app

Advanced YouTube Video Search Tool

## Links

Frontend Deployment: The frontend is deployed [here](https://youtube-app-tawny.vercel.app).

Backend Repository: View the backend repository [here](https://github.com/katekorobova/youtube-app-backend).

## Project Overview

This is the frontend of a web application designed to enhance the YouTube search experience by leveraging the YouTube Data API. Users can perform advanced video searches with custom filters, including date range, category, and location. Additionally, the frontend integrates with a backend service to store search request history and allow users to repeat recent queries.

The application is built using React and TypeScript for a robust, scalable, and user-friendly interface.

## Key Technologies

- React: For building a dynamic, component-based user interface.
- TypeScript: Ensures type safety and enhances development productivity.
- Chakra UI: Provides accessible, customizable, and responsive UI components.
- React Router: Manages client-side navigation and routing.
- Axios: Handles API requests to the backend.

## Installation and Setup

Follow these steps to clone, configure, and run the frontend locally.

### Prerequisites

- Node.js: (Tested with version 20)
- NPM: For managing dependencies.

### Clone the Repository

```
https://github.com/katekorobova/youtube-app.git
cd youtube-app
```

### Install Dependencies

```
npm install
```

### Set Up Environment Variables

Create a .env file in the project root.

Add the following variable:

```
VITE_BASE_URL=http://localhost:8080
```

Replace http://localhost:8080 with the URL of your backend service.

### Run the Application

```
npm run dev
```

The application will start at http://localhost:5173.
