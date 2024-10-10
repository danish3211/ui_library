"use client"
import CodeBlock from "@/components/CodeBlock";
import React, { ReactNode, useState } from "react";
interface TabSwitcherProps {
  codeString: string;
  previewComponent: JSX.Element;
  language: string;
   description?: ReactNode; 
}
const TabSwitcher: React.FC<TabSwitcherProps> = ({
  codeString,
  previewComponent,
  language,
  description,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-[300px] rounded-full  backdrop-blur-sm ">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 p-3 text-center text-black font-bold rounded-full transition-colors duration-300 ${
            activeTab === "preview"
              ? "bg-[#ffffff73] "
              : "text-black"
          }`}> Preview</button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 p-3 text-center text-black font-bold rounded-full transition-colors duration-300 ${
            activeTab === "code"
              ? "bg-[#ffffff73]"
              : "text-black"
          }`}>Code</button>
      </div>
      {/* Tab content */}
      <div className="mt-2">
        {activeTab === "preview" ? (
          <div>{previewComponent}</div>
        ) : (
          <div className="relative scrollbar overflow-y-auto pr-2">
              {description && (
              <p className="mb-4 text-sm text-gray-400">{description}</p>
            )}
              <CodeBlock codeString={codeString} language={language} />
          </div>
        )}
      </div>
    </div>
  );};
export default TabSwitcher;
