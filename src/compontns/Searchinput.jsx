import { Plus, Search } from "lucide-react";

function SearchInput() {
  return (
    <div className=" flex relative w-[220px] gap-3">
      <Search
        className="absolute left-3 top-5 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder="Search here"
        className="bg-gray-800/50 border border-pink-500/30 rounded-md pl-10 pr-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-pink-500"
      />

      <button className="bg-pink-600 p-2 rounded-md hover:bg-pink-700">
        <Plus size={20} />
      </button>
    </div>
  );
}

export default SearchInput;
