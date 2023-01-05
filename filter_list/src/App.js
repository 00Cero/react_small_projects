import { useState } from "react";
import SearchBar from "./components/Searchbar.js";
import List from "./components/List.js";
import { foods, filterItems } from "./helpers/data.js";
import './App.css';

export default function FilterableList() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const showList = filterItems(foods, query);

  return (
    <div className="App">
      <SearchBar query={query} changeQuery={handleChange} />
      <hr />
      <List items={showList} />
    </div>
  );
}




