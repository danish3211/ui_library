"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const menu = [
    {
      title: "Show code",
      // icon: <MdVerified fontSize={25} />,
      link: "/ui/code",
      nested: false,
      active: pathname.includes("/ui/code"),
    },
    {
      title: "Maps",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/maps",
      nested: false,
      active: pathname === "/ui/maps",
    },
    {
      title: "Custom Sidebars",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/sidebar",
      nested: false,
      active: pathname === "/ui/sidebar",
    },
    {
      title: "Custom Table",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/table",
      nested: false,
      active: pathname === "/ui/table",
    },
    {
      title: "Custom Cards",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/cards",
      nested: false,
      active: pathname === "/ui/cards",
    },
    {
      title: "Custom Cerousel",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/cerousel",
      nested: false,
      active: pathname === "/ui/cerousel",
    },
  ];

  return (
    <div className="text-white  rounded-md p-3">
      <div>
        <div>
          <ul className="space-y-2 text-center text-lg">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`block py-2 pl-3 rounded-md text-[#ffffff] font-medium transition duration-300 ${
                    pathname === item.link
                      ? "text-black bg-[#ffffff73]"
                      : "hover:text-white hover:bg-[#ffffff55]"
                  }`}
                >
                  <div className="flex items-center px-2 rounded-md">
                    <span className="">{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
