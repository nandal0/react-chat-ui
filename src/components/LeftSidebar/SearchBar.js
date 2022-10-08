import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
function SearchBar({ searchChange }) {
  return (
    <>
      {/* <div className="searchChat">
        <SearchIcon />
        <input
          style={styles.input}
          className="mb-3"
          placeholder="search name"
          onChange={searchChange}
        ></input>
      </div> */}
       <div class="search_wrap search_wrap_6">
      <div class="search_box">
        <input type="text" class="input"   onChange={searchChange} placeholder="search..."/>
        <div class="btn">
          <p>Search</p>
        </div>
      </div>
    </div>
    </>
  );
}
const styles = {
  input: {
    borderRadius: "18px",
    width: "100%",
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;
