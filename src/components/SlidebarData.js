import React from "react";

import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc"

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Saved",
    path: "/saved",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text"
  },
  {
    title: "LogOut",
    path: "/",
    icon: <VscIcons.VscSettings />,
    cName: "nav-text"
  }
];
