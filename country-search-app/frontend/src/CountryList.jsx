import PropTypes from "prop-types";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  // Function to handle country button clicks
  const handleCountryClick = (country) => {
    const url = `https://en.wikipedia.org/wiki/${country}`; // Construct the Wikipedia URL for the selected country
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <div className="container">
      {/* Check if there are countries to display */}
      {countries.length > 0 ? (
        countries.map((country, index) => (
          <button
            key={index} // Use index as the key
            className="button"
            onClick={() => handleCountryClick(country)} // Handle click event
          >
            {country} {/* Display the country name */}
          </button>
        ))
      ) : (
        <p>Search for a country</p> // Message if no countries are available
      )}
    </div>
  );
};

// PropTypes for type checking
CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure countries prop is an array of strings
};

export default CountryList;
