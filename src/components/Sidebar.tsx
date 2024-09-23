"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname();
  const menu = [
    {
      title: "Show code",
      // icon: <MdVerified fontSize={25} />,
      link: "/ui/code",
      nested: false,
      active: pathname.includes("/admin/verified"),
    },
    {
      title: "Maps",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "/ui/maps",
      nested: false,
      active: pathname === "/admin/users/pending",
    },
  ];

  return (
    <div className='text-white h-[87vh] backdrop-blur-sm bg-white/30 rounded-md p-3'>
      <div    >
      <div className="pt-2">
          <ul className="space-y-2 mt-[9px] text-center text-lg">
            {menu.map((item, index) => (
              <li
                key={index}>
                {item.nested ? (                
                      <ul className="pl-4">
                        <li>
                          <Link
                            href={item.link}
                            className={`block py-2 pl-2 transition duration-300 `}
                          >
                            {item.title}
                          </Link>
                        </li>
                      </ul>
                ) : (
                  <Link
                    href={item.link}
                    className={`block py-2 pl-3 rounded-md text-[#ffffff] font-medium transition duration-300 ${
                      pathname === item.link
                        ? "text-black bg-[#ffffff73]"
                        : "hover:text-white hover:bg-[#ffffff55]"
                    }`}
                  >
                    <div className="flex items-center px-3 rounded-md">
                        <span className="ml-4">{item.title}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        
      </div>
    </div>
    </div>
  )
}

export default Sidebar