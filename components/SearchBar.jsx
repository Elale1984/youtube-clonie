import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex w-150">
      <div className="flex items-center w-full bg-zinc-900 rounded-tl-full rounded-bl-full border border-zinc-700 px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-grow text-white placeholder-zinc-400 focus:outline-none"
        />
      </div>
      <div className="flex items-center bg-zinc-800 rounded-tr-full rounded-br-full border border-zinc-700 px-4 py-2 border-l-0">
        <button className="text-zinc-400 hover:text-white bg-zinc-900">
          <Search className="w-5 h-5 text-white bg-zinc-800 " />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
