import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#0f0f0f] text-white">
      <div className="text-2xl font-bold">
        <Image
          src="/images/yt-logo.png"
          alt="Company Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="flex items-center space-x-4"></div>
      <div className="flex items-center space-x-4"></div>
    </div>
  );
};
export default Header;
