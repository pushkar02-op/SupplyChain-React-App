# Fullstack Application Documentation

## Project Overview

This project is a fullstack web application combining a Flask backend with a React frontend. The backend serves data through RESTful APIs, while the frontend consumes these APIs to display data to users.

### Directory Structure

my-fullstack-app/

├── backend/

│ ├── app.py # Flask backend code

│ ├── requirements.txt # Python dependencies

│ └── ...

├── frontend/

│ ├── public/

│ │ ├── index.html # React index.html (for deployment)

│ │ └── ...

│ ├── src/

│ │ ├── components/ # React components

│ │ ├── App.js # React App component

│ │ ├── index.js # React entry point

│ │ └── ...

│ ├── package.json # React dependencies and scripts

│ └── ...

├── README.md # Project documentation (this file)

└── ...

## Backend (Flask)

### Setup and Development

1. **Initialize Virtual Environment (Optional)**:

   ```bash
   cd backend
   python -m venv venv
   # On Windows: .\venv\Scripts\activate
   # On macOS/Linux: source venv/bin/activate
   ```

## Install Dependencies

```bash
npm install axios
```

## Proxy Configuration

Ensure that `package.json` in the `frontend` directory includes the following proxy configuration:

```json
"proxy": "http://localhost:5000"
```

Run React Development Server:

```javascript
npm start
```

## Components:

App.js: Main React component fetching and displaying data from Flask backend.
Integration and Deployment
Build for Production
Build React App:

```javascript
npm run build
```
