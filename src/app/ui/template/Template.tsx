import React from "react";

const template = () => {
  return (
    <div className="p-4">
      <p className="text-white text-3xl font-semibold">
        Starter Template of NextJs with Authenticaion(NextAuth) :
      </p>
      <a
        href="/files/sample.pdf"
        download="sample.pdf"
        className="p-5 backdrop-blur-sm bg-white/30 hover:bg-white/20 transition duration-300 text-black font-bold py-2 px-4 rounded"
      >
        Download zip file here
      </a>
    </div>
  );
};

export default template;
