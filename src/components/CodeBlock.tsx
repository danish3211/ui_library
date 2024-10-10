"use client"
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 
interface CodeBlockProps {
  codeString: string;
  language: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, language }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center -mb-[10px] px-5 w-full backdrop-blur-sm bg-gray-500">
        <p className="text-white">{language}</p>
        <button className=" rounded-md p-2 text-white" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter  language={language} style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );};
export default CodeBlock;
