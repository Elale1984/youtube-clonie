"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";

const ClerkAuthButton = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <SignInButton mode="modal">
        <div className="flex items-center w-full rounded-full border border-zinc-700 px-4 py-2 ">
          <AccountCircleOutlinedIcon className="text-blue-400 mr-2" />
          <p className="text-blue-400">Sign In</p>
        </div>
      </SignInButton>
    );
  }

  return (
    <UserButton
      afterSignOutUrl="/"
      appearance={{
        elements: {
          avatarBox: "w-10 h-10", // Optional: customize Clerk dropdown avatar
        },
      }}
    />
  );
};

export default ClerkAuthButton;
