import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import "./App.css";

const App = () => {
  // State to hold the full list of countries
  const [countries, setCountries] = useState([]);
  // State to hold the filtered list of countries based on user search
  const [filteredCountries, setFilteredCountries] = useState([]);
  // State to hold the current search term (not used in this component)
  const [, setSearchTerm] = useState("");

  // Async function to fetch all countries from the Flask API
  const fetchCountries = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/countries");
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }

      // Parse the JSON data returned from the API
      const data = await response.json();
      // Set the countries and filteredCountries states with the fetched data
      setCountries(data);
      setFilteredCountries(data); // Initially show all countries
    } catch (error) {
      console.error("There was an error fetching the country data:", error);
    }
  };

  // Fetch all countries when the component mounts
  useEffect(() => {
    fetchCountries();
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle search input from the SearchBar component
  const handleSearch = async (term) => {
    setSearchTerm(term); // Update the search term state

    if (term) {
      try {
        // Fetch filtered countries based on the search term
        const response = await fetch(
          `http://localhost:5000/api/countries/search?q=${term}`
        );
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }

        // Parse the JSON data returned from the API
        const data = await response.json();
        // Update the filteredCountries state with the returned data
        setFilteredCountries(data);
      } catch (error) {
        console.error(
          "There was an error fetching the filtered countries",
          error
        );
      }
    } else {
      // If the search term is cleared, reset to the full list of countries
      setFilteredCountries(countries);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
