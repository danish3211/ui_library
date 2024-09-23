// "use client"
// import React, { useState } from 'react'
// import TabSwitcher from './TabSwitcher';

// const ExampleComponent = () => {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p className='text-black'>Count: {count}</p>
//         <button
//           onClick={() => setCount(count + 1)}
//           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   };
  
//   const codeExample = `import { useState } from 'react';
  
//   const ExampleComponent = () => {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   };
//   `;

// const home = () => {
//   return (
//     <div className="p-5">
//     <h1 className="text-2xl font-bold mb-6">Custom Tab Switcher with Preview and Code</h1>
//     <TabSwitcher language="typescript" codeString={codeExample}  previewComponent={<ExampleComponent />} />
//   </div>
//   )
// }

// export default home


import React from 'react'
import dynamic from "next/dynamic";

const DynamicLeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

const hero = () => {
  return (
    <div className=''>
        <h1>My Leaflet Map</h1>
        <DynamicLeafletMap />
    </div>
  )
}

export default hero