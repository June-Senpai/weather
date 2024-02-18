import PropTypes from "prop-types";

const Search = ({ location, setLocation, handleKeyPress, inputRef }) => {
  return (
    <section className="relative">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        onKeyDown={handleKeyPress}
        ref={inputRef}
        className=" dark:bg-darkSecondary h-12 w-72 rounded-lg p-3 outline dark:outline-none"
      />
      <img
        src="/search-icon.webp"
        width="25px"
        height="25px"
        alt="search icon"
        className="absolute right-4 top-3"
      />
    </section>
  );
};

export default Search;

Search.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  inputRef: PropTypes.object.isRequired,
};
