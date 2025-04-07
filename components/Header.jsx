import Image from "next/image";
import { Menu } from "lucide-react";

import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-5 bg-[#0f0f0f] text-white">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};
export default Header;
