from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app) # Enable Cross Origin request for the entire Flask App

# Function to connect to the SQLite database
def connect_db():
    conn = sqlite3.connect('countries.db')
    conn.row_factory = sqlite3.Row
    return conn

# Route to get all countries
@app.route('/api/countries', methods=['GET'])
def get_countries():
    conn = connect_db()
    cursor = conn.cursor()

    # Fetch all countries
    cursor.execute('SELECT name FROM countries')
    countries = [row['name'] for row in cursor.fetchall()]

    conn.close()
    return jsonify(countries)

if __name__ == '__main__':
    app.run(debug=True)