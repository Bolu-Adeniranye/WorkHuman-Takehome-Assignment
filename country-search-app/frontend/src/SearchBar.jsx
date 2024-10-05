import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  // Handle input change and update the search term state
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Pass the search term to the parent component
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Please enter a country to search for (press Enter)..." // Placeholder text for the input field
        value={searchTerm} // Controlled input value
        onChange={handleInputChange} // Update on input change
        className="search-input" // Apply the CSS class for styling
        aria-label="Country search" // Accessibility: label for screen readers
      />
    </div>
  );
};

// PropTypes for type checking
SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired, // Ensure onSearch prop is a required function
  searchTerm: PropTypes.string,
};

export default SearchBar;
