import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationBell = ({ notificationCount }) => {
  return (
    <div className="relative">
      <Bell className="w-6 h-6 text-white" />
      {notificationCount > 0 && (
        <Badge className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 py--1">
          {notificationCount}
        </Badge>
      )}
    </div>
  );
};

export default NotificationBell;
