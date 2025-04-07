"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRightOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import TranslateIcon from "@mui/icons-material/TranslateOutlined";
import PublicIcon from "@mui/icons-material/PublicOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

const menuData = [
  {
    label: "Appearance: Device theme",
    icon: <DarkModeIcon fontSize="small" />,
    submenu: [
      { label: "Device theme" },
      { label: "Dark theme" },
      { label: "Light theme" },
    ],
  },
  {
    label: "Language",
    icon: <TranslateIcon fontSize="small" />,
    submenu: [
      { label: "English" },
      { label: "Spanish" },
      { label: "French" },
    ],
  },
  {
    label: "Location",
    icon: <PublicIcon fontSize="small" />,
    submenu: [
      { label: "United States" },
      { label: "Canada" },
      { label: "Mexico" },
    ],
  },
  {
    label: "Your data in YouTube",
    icon: <HistoryIcon fontSize="small" />,
  },
  {
    label: "Settings",
    icon: <SettingsIcon fontSize="small" />,
  },
  {
    label: "Help",
    icon: <HelpOutlineIcon fontSize="small" />,
  },
  {
    label: "Send feedback",
    icon: <FeedbackOutlinedIcon fontSize="small" />,
  },
  {
    label: "Sign out",
    icon: <LogoutIcon fontSize="small" />,
  },
];

export default function YouTubeStyleDropdown() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelect = (mainLabel, value) => {
    setSelectedOptions((prev) => ({ ...prev, [mainLabel]: value }));
    setOpenSubmenu(null);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2">
          <MoreVertIcon className="text-white" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        alignOffset={-12}
        className="min-w-[250px] p-2 rounded-lg shadow-xl bg-zinc-900 text-white"
      >
        {!openSubmenu && (
          <div>
            {menuData.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
                onClick={() => item.submenu ? setOpenSubmenu(item.label) : null}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>
                    {item.label.replace(/:.*/, ":")}
                    {item.submenu && selectedOptions[item.label] ? ` ${selectedOptions[item.label]}` : ""}
                  </span>
                </div>
                {item.submenu && <ChevronRightIcon fontSize="small" />}
              </div>
            ))}
          </div>
        )}

        {openSubmenu && (
          <div>
            <div
              className="flex items-center gap-2 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
              onClick={() => setOpenSubmenu(null)}
            >
              <ArrowBackIcon fontSize="small" />
              <span>Back</span>
            </div>
            <div className="mt-2">
              {menuData
                .find((item) => item.label === openSubmenu)
                ?.submenu.map((sub) => (
                  <div
                    key={sub.label}
                    className="px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
                    onClick={() => handleSelect(openSubmenu, sub.label)}
                  >
                    {sub.label}
                  </div>
                ))}
            </div>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}