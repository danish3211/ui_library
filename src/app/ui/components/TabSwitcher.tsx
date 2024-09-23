import CodeBlock from "@/components/CodeBlock";
import React, { useState } from "react";
interface TabSwitcherProps {
  codeString: string;
  previewComponent: JSX.Element;
  language: string;
}
const TabSwitcher: React.FC<TabSwitcherProps> = ({
  codeString,
  previewComponent,
  language
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-[300px] rounded-full  backdrop-blur-sm ">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 p-3 text-center text-white font-bold rounded-full transition-colors duration-300 ${
            activeTab === "preview"
              ? "bg-gray-900 "
              : "text-black"
          }`}> Preview</button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 p-3 text-center text-white font-bold rounded-full transition-colors duration-300 ${
            activeTab === "code"
              ? "bg-gray-900"
              : "text-black"
          }`}>Code</button>
      </div>
      {/* Tab content */}
      <div className="mt-2">
        {activeTab === "preview" ? (
          <div className="p-4 bg-gray-100">{previewComponent}</div>
        ) : (
          <div className="relative scrollbar overflow-y-auto max-h-[62vh]">
              <CodeBlock codeString={codeString} language={language} />
          </div>
        )}
      </div>
    </div>
  );};
export default TabSwitcher;
