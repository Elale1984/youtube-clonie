import SearchBar from "./SearchBar";
import Image from "next/image";

const HeaderCenter = () => {
  return (
    <div className="flex items-center space-x-4">
      <SearchBar />
      <div className="rounded-full p-2 bg-zinc-800 hover:bg-zinc-700  ">
        <Image
          src="/images/mic.png"
          alt="Company Logo"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default HeaderCenter;
