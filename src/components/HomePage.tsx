import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center h-[89vh] ">
      <p className="text-white font-medium text-2xl md:text-5xl lg:text-7xl  font-mono typing-effect backdrop-blur-sm bg-white/30 rounded-md">
        This is Danish&apos;s custom Ui Components
      </p>
      <div  className="flex gap-8 mt-2 ">  
      <Link 
      href="/ui"
      className="bg-sky-700 text-center p-3 rounded-md text-white text-xl w-[200px] hover:bg-sky-900 transition delay-100">
        Components
      </Link>  
       <Link 
       href=""
        className="bg-sky-700 text-center p-3 rounded-md text-white text-xl w-[200px] hover:bg-sky-900 transition delay-100">
        Buy me a Coffee
      </Link>
    </div>
    </div>
  );
};

export default HomePage;
