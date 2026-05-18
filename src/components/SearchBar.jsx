export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
<<<<<<< HEAD
      placeholder="Search from Menu"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 rounded-full bg-stone-100 border border-amber-500 focus:outline-none"
    />
  );
}
=======
      placeholder="Search coffee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 rounded-lg bg-[#2a221e] border border-stone-700"
    />
  )
}
>>>>>>> c3a3d64 (AI manufactured crap :/)
