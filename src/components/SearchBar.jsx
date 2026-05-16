export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search from Menu"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 rounded-full bg-stone-100 border border-amber-500 focus:outline-none"
    />
  );
}
