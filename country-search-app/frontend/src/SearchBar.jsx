import { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change and update the search term state
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search countries..." // Placeholder text for the input field
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
  onSearch: PropTypes.func.isRequired, // Ensure onSearch prop is a required function
};

export default SearchBar;
