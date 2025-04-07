"use client";

import { useUser } from "@clerk/nextjs";
import NotificationBell from "./NotificationBell";
import ClerkAuthButton from "./ClerkAuthButton";
import CreateButton from "./CreateButton";
import DropdownMenuRadioGroup  from "./DropdownMenuRadioGroup";

const HeaderRight = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center space-x-4">
      {user && (
        <>
          <CreateButton />
          <NotificationBell notificationCount={5} />
        </>
      )}
        {!user && (
            <>
                <DropdownMenuRadioGroup />
            </>
        )}
      <ClerkAuthButton />
    </div>
  );
};

export default HeaderRight;
