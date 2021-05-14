const SearchBar = ({ searchString, setSearchString }) => {
  return (
    <input
      className={"SearchBar"}
      key="random1"
      value={searchString}
      placeholder={"search character"}
      onChange={(e) => setSearchString(e.target.value)}
    />
  );
};
export default SearchBar;
