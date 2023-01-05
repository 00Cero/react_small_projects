export default function SearchBar({ query, changeQuery }) {
  return (
    <label>
      Search: <input value={query} onChange={changeQuery} />
    </label>
  );
}