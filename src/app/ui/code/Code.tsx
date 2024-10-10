"use client";
import TabSwitcher from "../../../components/TabSwitcher";
import CodeBlock from "@/components/CodeBlock";

const npm = `import { useState } from 'react';
  
  const ExampleComponent = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
`;
const ExampleComponent = () => {
  return (
    <div>
      <CodeBlock codeString={npm} language="tsx" />
    </div>
  );
};

const codeExample = `import { useState } from "react";
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
    setTimeout(() => setCopied(false), 2000); // Reset the "Copied!" message after 2 seconds
  };

  return (
 <div className="relative">
      <div className="flex justify-between items-center -mb-[10px] px-5 w-full backdrop-blur-sm bg-gray-500">
        <p className="text-white">{language}</p>
        <button className=" rounded-md p-2 text-white" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;`;

const bash = `npm install react-syntax-highlighter`;
const thrdstep = `import CodeBlock from "@/components/CodeBlock";

const codeExample = // use backtik from here 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
; // to here

const Page = () => {
  return (
    <div>
      <h1>Code Example</h1>
      <CodeBlock codeString={codeExample} language="typescript" />
    </div>
  );
};

export default Page;
`;
const Code = () => {
  return (
    <div>  
        <TabSwitcher
          language="tsx"
          codeString={thrdstep}
          previewComponent={<ExampleComponent />}
          description={
            <>
              <div className="text-white">
                <p className="text-xl font-bold">
                  1. Install a Syntax Highlighter Library
                </p>
                <p className="text-lg">
                  You can install a syntax highlighter like
                  react-syntax-highlighter
                </p>
                <CodeBlock codeString={bash} language="bash" />
                <p className="text-xl font-bold">
                  2. Create a Component to Render Code Blocks
                </p>
                <p className="text-lg">
                  Create a reusable component, CodeBlock.tsx, that you can use
                  anywhere in your project to display formatted code.
                </p>
                <CodeBlock codeString={codeExample} language="tsx" />
                <p className="text-xl font-bold">
                  3. Use the CodeBlock Component in Your Pages
                </p>
                <p className="text-lg">
                  Now, you can use this CodeBlock component anywhere in your
                  Next.js pages or components to show formatted code. For
                  example, in a page:
                </p>
              </div>
            </>
          }
        />
      </div>
  );
};

export default Code;
