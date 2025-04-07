import { Menu } from "lucide-react";
import Image from "next/image";

const HeaderLeft = () => {
  return (
    <div className="flex text-2xl font-bold ml-1">
      <Menu className="w-6 h-8" />

      <Image
        src="/images/yt-logo.png"
        alt="Company Logo"
        width={128}
        height={70}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default HeaderLeft;
