import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // State to hold the full list of countries
  const [countries, setCountries] = useState([]);
  // State to hold the filtered list of countries based on user search
  const [filteredCountries, setFilteredCountries] = useState([]);
  // State to hold the current search term (not used in this component)
  const [searchTerm, setSearchTerm] = useState("");

  // Async function to fetch all countries from the Flask API
  const fetchCountries = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/countries");
      // Check if the response is successful

      // Parse the JSON data returned from the API
      const data = await response.json();
      // Set the countries and filteredCountries states with the fetched data
      setCountries(data);
      setFilteredCountries(data);
      console.error("Success");
      toast.success("All countries fetched!");
    } catch (error) {
      console.error("There was an error fetching the country data:", error);
      toast.error("There was an error fetching the country data.");
    }
  };

  // Function to handle search input from the SearchBar component
  const handleSearch = (toSearch) => {
    setSearchTerm(toSearch);
    const filteredResults = countries.filter((country) =>
      country.toLowerCase().includes(toSearch.toLowerCase())
    );
    setFilteredCountries(filteredResults);
  };

  // Fetch all countries when the component mounts
  useEffect(() => {
    fetchCountries();
  }, []); // Empty dependency array ensures this runs only once
  return (
    <div>
      <ToastContainer />
      <SearchBar setSearchTerm={handleSearch} searchTerm={searchTerm} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
