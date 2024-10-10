import TabSwitcher from "../../../components/TabSwitcher";
import CodeBlock from "@/components/CodeBlock";
import CustomTable from "./CustomTable";

const ExampleComponent = () => {
  const headers = [
    "Name",
    "Age",
    "Occupation",
    "Action",
    "location",
    "latitude",
    "longitude",
    "dob",
    "placeholder",
  ];
  const data = [
    {
      Name: "John Doe",
      Age: 28,
      Occupation: "Engineer",
      Action: "Edit",
      location: "123 Main St, Anytown USA",
      latitude: 40.7128,
      longitude: -74.006,
      dob: "01/01/1990",
      placeholder: "placeholder",
    },
    {
      Name: "Jane Smith",
      Age: 34,
      Occupation: "Designer",
      Action: "Edit",
      location: "456 Oak Ave, Anytown USA",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      Name: "Sam Green",
      Age: 22,
      Occupation: "Developer",
      Action: "Edit",
      location: "789 Elm St, Anytown USA",
    },
  ];

  return (
    <div className="bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Custom Table</h1>
        <CustomTable headers={headers} data={data} />
      </div>
    </div>
  );
};

const codeExample = `import CustomTable from './components/CustomTable'; //define the path

const TablePage = () => {
  const headers = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'John Doe', Age: 28, Occupation: 'Engineer' },
    { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
    { Name: 'Sam Green', Age: 22, Occupation: 'Developer' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Table</h1>
      <CustomTable headers={headers} data={data} />
    </div>
  );
};

export default TablePage;
`;

const apitable = `import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from './CustomTable';

// Define the expected structure of the data from the API
type UserData = {
  name: string;
  age: number;
  email: string;
};

const TableContainer = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserData[]>('https://api.example.com/users');
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define table headers
  const headers = ['name', 'age', 'email'];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <CustomTable<UserData> headers={headers} data={data} />
    </div>
  );
};

export default TableContainer;
`;

const customtable = `import React, { ReactNode } from 'react';

type TableProps<T extends Record<string, unknown>> = {
  headers: string[];
  data: T[];
};

const CustomTable = <T extends Record<string, unknown>>({ headers, data }: TableProps<T>) => {
  const renderCellContent = (value: unknown): ReactNode => {
    // Ensure the value is either a string, number, or something React can render
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    // For safety, cast any other type to string or provide a default value
    return String(value ?? '');
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-gray-200 font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border border-gray-200 text-gray-700"
                >
                  {renderCellContent(row[header as keyof T])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
`;
const Table = () => {
  return (
    <div>
      <div>
        <TabSwitcher
          language="tsx"
          codeString={apitable}
          previewComponent={<ExampleComponent />}
          description={
            <>
              <div className="text-white">
                <p className="text-xl font-bold">
                  1. Create a CustomTable component that accepts two props:
                  (CustomTable.tsx)
                </p>
                <CodeBlock codeString={customtable} language="tsx" />
                <p className="text-xl font-bold">
                  2. Usage Example (dummy data)
                </p>
                <CodeBlock codeString={codeExample} language="tsx" />
                <p className="text-xl font-bold">
                  3. Usage Example (fetch data from api)
                </p>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Table;
