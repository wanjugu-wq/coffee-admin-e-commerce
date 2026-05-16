export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search coffee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 rounded-lg bg-[#2a221e] border border-stone-700"
    />
  )
}