"use client";
import { usePathname } from "next/navigation";
import TabSwitcher from "../../../components/TabSwitcher";
import Link from "next/link";
import { useState } from "react";
const SimpleSidebar = () => {
  const pathname = usePathname();
  const menu = [
    {
      title: "Home",
      link: "",
      nested: false,
      active: pathname.includes("/home"),
    },
    {
      title: "About",
      link: "",
      nested: false,
      active: pathname.includes("/about"),
    },
    {
      title: "Contact",
      link: "",
      nested: false,
      active: pathname.includes("/contact"),
    },
  ];
  const [activeMenuTitle, setActiveMenuTitle] = useState("Home");
  return (
    <div className="h-[75vh] w-full backdrop-blur-sm bg-white/30">
      <div className="flex">
        <div className="text-white h-[73vh] w-[340px] bg-gray-400 rounded-md p-3">
          <div>
            <div>
              <ul className="space-y-2 text-center text-lg">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href=""
                      className={`block py-2 pl-3 rounded-md text-[#ffffff] font-medium transition duration-300 ${
                        activeMenuTitle === item.title
                          ? "text-black bg-[#ffffff73]"
                          : "hover:text-white hover:bg-[#ffffff55]"
                      }`}
                      onClick={() => setActiveMenuTitle(item.title)}
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
        <p className="text-5xl text-white flex justify-center items-center w-full">
          {activeMenuTitle}
        </p>
      </div>
    </div>
  );
};

const Onclose = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleMenuClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault(); // Prevent default behavior to avoid scrolling
    setActiveMenuTitle(title); // Update active menu title
  };

  const pathname = usePathname();

  const menu1 = [
    {
      title: "Verified Users",
      // icon: <MdVerified fontSize={25} />,
      link: "",
      nested: false,
      active: pathname.includes("/verified"),
    },
    {
      title: "Pending Users",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "",
      nested: false,
      active: pathname === "/users",
    },
    {
      title: "Rejected Users",
      // icon: <ImCross fontSize={25} />,
      link: "",
      nested: false,
      active: pathname === "/rejected",
    },
    {
      title: "Sub menu",
      // icon: <MdReport fontSize={25} />,
      link: "",
      nested: true,
      children: [
        { title: "Report 1", link: "" },
        { title: "Report 2", link: "" },
      ],
      active: pathname === "/admin/reports",
    },
  ];
  const [activeMenuTitle, setActiveMenuTitle] = useState("Verified Users");
  return (
    <div className="h-[75vh] w-full backdrop-blur-sm bg-white/30">
      <div className="flex">
        <div
          className={`bg-gray-400 shadow-xl h-screen transition-all duration-300 ${
            isSidebarOpen ? "w-[280px]" : "w-[70px]"
          }`}
        >
          {/* Toggle Button */}
          <div className="pt-2">
            <button
              className="flex justify-center items-center w-full bg-transparent text-white text-2xl font-semibold cursor-pointer"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "Click Me" : "icon"}
            </button>

            {/* Sidebar Menu */}
            <ul className="space-y-2 mt-3 text-center">
              {menu1.map((item, index) => (
                <li key={index}>
                  {!item.nested ? (
                    <a
                      href="#"
                      onClick={(e) => handleMenuClick(e, item.title)}
                      className={`block py-2 pl-3 text-white rounded-md font-medium transition duration-300 ${
                        activeMenuTitle === item.title
                          ? "text-black bg-[#ffffff73]"
                          : "hover:text-white hover:bg-[#ffffff55]"
                      }`}
                    >
                      <div className="flex items-center px-3 rounded-md">
                        {/* Placeholder for icons */}
                        icn
                        {isSidebarOpen && (
                          <span className="ml-4">{item.title}</span>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div>
                      {/* Accordion Title */}
                      <button
                        onClick={() => handleAccordionClick(index)}
                        className="flex items-center w-full px-3 py-2 text-left transition duration-300 rounded-md text-white hover:bg-[#ffffff55] hover:text-white"
                      >
                        {/* Placeholder for icons */}
                        icn
                        {isSidebarOpen && (
                          <span className="ml-4">{item.title}</span>
                        )}
                      </button>

                      {/* Accordion Content */}
                      {isSidebarOpen && activeAccordion === index && (
                        <ul className="ml-8 space-y-1 ">
                          {item.children?.map((child, childIndex) => (
                            <li key={childIndex}>
                              <a
                                href="#"
                                onClick={(e) => handleMenuClick(e, child.title)}
                                className={`block py-2 pl-3 text-white rounded-md font-medium transition duration-300 ${
                                  activeMenuTitle === child.title
                                    ? "text-black bg-[#ffffff73]"
                                    : "hover:text-white hover:bg-[#ffffff55]"
                                }`}
                              >
                                {child.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-5xl text-white flex justify-center items-center w-full">
          {activeMenuTitle}
        </p>
      </div>
    </div>
  );
};

const codeExample = `const ExampleComponent = () => {
  const pathname = usePathname();
  const menu = [
    {
        title: "Home",
        link: "",  // add pathname
        nested: false,
        active: pathname.includes("/home"),
      },
      {
        title: "About",
        link: "", // add pathname
        nested: false,
        active: pathname.includes("/about"),
      },
      {
        title: "Contact",
        link: "", // add pathname
        nested: false,
        active: pathname.includes("/contact"),
      },
  ];
  const [activeMenuTitle, setActiveMenuTitle] = useState("Home");
  return (
    <div className="h-[75vh] w-full backdrop-blur-sm bg-white/30">
      <p className="text-xl text-center">sidebar</p>
      <div className="flex">
      <div className="text-white h-[73vh] w-[40vh] bg-gray-400 rounded-md p-3">
        <div>
          <div>
            <ul className="space-y-2 text-center text-lg">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href=""
                    className={block py-2 pl-3 rounded-md text-[#ffffff] font-medium transition duration-300{ //use dollar sign
                        activeMenuTitle === item.title
                          ? "text-black bg-[#ffffff73]"
                          : "hover:text-white hover:bg-[#ffffff55]"
                      }} //wrap the callname with backtik
                    onClick={() => setActiveMenuTitle(item.title)}
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
      <p className="text-5xl text-white flex justify-center items-center w-full">{activeMenuTitle}</p>
      </div>
    </div>
  );
};`;

const OncloseSide = `const Onclose = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleMenuClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault(); // Prevent default behavior to avoid scrolling
    setActiveMenuTitle(title); // Update active menu title
  };

  const pathname = usePathname();

  const menu1 = [
    {
      title: "Verified Users",
      // icon: <MdVerified fontSize={25} />,
      link: "",
      nested: false,
      active: pathname.includes("/verified"),
    },
    {
      title: "Pending Users",
      // icon: <MdOutlinePendingActions fontSize={25} />,
      link: "",
      nested: false,
      active: pathname === "/users",
    },
    {
      title: "Rejected Users",
      // icon: <ImCross fontSize={25} />,
      link: "",
      nested: false,
      active: pathname === "/rejected",
    },
    {
      title: "Sub menu",
      // icon: <MdReport fontSize={25} />,
      link: "",
      nested: true,
      children: [
        { title: "Report 1", link: "" },
        { title: "Report 2", link: "" },
      ],
      active: pathname === "/admin/reports",
    },
  ];
  const [activeMenuTitle, setActiveMenuTitle] = useState("User");
  return (
    <div className="h-[75vh] w-full backdrop-blur-sm bg-white/30">
      <div className="flex">
        <div
          className={bg-gray-400 shadow-xl h-screen transition-all duration-300 { //use dollar sign
            isSidebarOpen ? "w-[280px]" : "w-[70px]"
          }} //wrap the callname with backtik
        >
          {/* Toggle Button */}
          <div className="pt-2">
            <button
              className="flex justify-center items-center w-full 
              bg-transparent text-white text-2xl font-semibold cursor-pointer"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "Click Me" : "icon"}
            </button>

            {/* Sidebar Menu */}
            <ul className="space-y-2 mt-3 text-center">
              {menu1.map((item, index) => (
                <li key={index}>
                  {!item.nested ? (
                    <a
                      href="#"
                      onClick={(e) => handleMenuClick(e, item.title)}
                      className={block py-2 pl-3 text-white rounded-md font-medium transition duration-300 { //use dollar sign
                        activeMenuTitle === item.title
                          ? "text-black bg-[#ffffff73]"
                          : "hover:text-white hover:bg-[#ffffff55]"
                      }} //wrap the callname with backtik
                    >
                      <div className="flex items-center px-3 rounded-md">
                        {/* Placeholder for icons */}
                        icn
                        {isSidebarOpen && (
                          <span className="ml-4">{item.title}</span>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div>
                      {/* Accordion Title */}
                      <button
                        onClick={() => handleAccordionClick(index)}
                        className="flex items-center w-full px-3 py-2 text-left 
                        transition duration-300 rounded-md text-white hover:bg-[#ffffff55] hover:text-white"
                      >
                        {/* Placeholder for icons */}
                        icn
                        {isSidebarOpen && (
                          <span className="ml-4">{item.title}</span>
                        )}
                      </button>

                      {/* Accordion Content */}
                      {isSidebarOpen && activeAccordion === index && (
                        <ul className="ml-8 space-y-1 ">
                          {item.children?.map((child, childIndex) => (
                            <li key={childIndex}>
                              <a
                                href="#"
                                onClick={(e) => handleMenuClick(e, child.title)}
                                className={block py-2 pl-3 text-white rounded-md font-medium transition duration-300 
                                //use dollar sign {
                                  activeMenuTitle === child.title
                                    ? "text-black bg-[#ffffff73]"
                                    : "hover:text-white hover:bg-[#ffffff55]"
                                }} //wrap className with backticks
                              >
                                {child.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-5xl text-white flex justify-center items-center w-full">
          {activeMenuTitle}
        </p>
      </div>
    </div>
  );
};`

const Map = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-white mb-3">
          1. Simple SideBar Example
        </p>
        <TabSwitcher
          language="tsx"
          codeString={codeExample}
          previewComponent={<SimpleSidebar />}
        />
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold text-white mb-3">2. Closable Sidebar</p>
        <TabSwitcher
          language="tsx"
          codeString={OncloseSide}
          previewComponent={<Onclose />}
        />
      </div>
    </div>
  );
};

export default Map;
