# Country Search App

A simple web application that allows users to search for countries and view their Wikipedia pages. The app is built with React for the frontend and Flask for the backend.

### Technical Challenge

Create a small web application using your own choice of frontend and backend technologies.
Your application Frontend and Backend must interact, ina a typical Request-Response model.

## Features

- Search for countries by name.
- Click on a country to open its Wikipedia page in a new tab.
- Responsive and user-friendly interface.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Flask, SQLite
- **Styling**: CSS

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Python](https://www.python.org/downloads/) (v3.6 or higher)
- [Pip](https://pip.pypa.io/en/stable/installation/) (Python package manager)

### Setting Up the Frontend

1. Navigate to the frontend directory:
   cd path/to/your/frontend/directory

2. Install the frontend dependencies:
   npm install

3. Start the frontend development server:
   npm run dev

### Setting Up the Backend

1. Navigate to the backend directory:
   cd path/to/your/backend/directory

2. Install the backend dependencies (if you haven't already):
   pip install flask flask-cors sqlite3

3. Initialize the database:
   python init_db.py

4. Start the Flask backend server:
   python app.py

## Usage

    Open your browser and navigate to http://localhost:3000 (or the port your Vite app is running on).
    Use the search bar to find a country.
    Click on the country name to view more information on Wikipedia.

## Notes

    Ensure both the frontend and backend servers are running for the application to work correctly.
    You may need to adjust CORS settings in the Flask app if accessing from different origins.

License

This project is licensed under the MIT License
