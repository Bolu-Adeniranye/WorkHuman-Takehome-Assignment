import sqlite3

# List of countries
countries = [
     'Albania', 'Andorra', 'Australia', 'Brazil', 'Belgium', 'Canada', 'China', 'France',
    'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Kenya', 'Luxembourg',
    'Mexico', 'New Zealand', 'Nigeria', 'Portugal', 'Russia', 'South Africa', 'South Korea',
    'Spain', 'Sweden', 'Thailand', 'Ukraine', 'United Kingdom', 'United States of America',
    'Vietnam', 'Zambia'
]

# Create SQLite database and insert country data
def init_db():
    conn = sqlite3.connect('countries.db')
    cursor = conn.cursor()

    # Create Table
    cursor.execute(''' CREATE TABLE IF NOT EXISTS countries (
                   id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL) ''')
    
    country_data = [(country,) for country in countries]
    # Insert Countries
    cursor.executemany('INSERT INTO countries (name) VALUES (?)', country_data)

    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    print("Database initialized and countries have been inserted.")