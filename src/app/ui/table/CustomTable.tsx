import React, { ReactNode } from 'react';

type TableProps<T extends Record<string, unknown>> = {
  headers: string[];
  data: T[];
};

const CustomTable = <T extends Record<string, unknown>>({ headers, data }: TableProps<T>) => {
  const renderCellContent = (value: unknown): ReactNode => {
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    return String(value ?? '');
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-300">
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
