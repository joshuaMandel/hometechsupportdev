export default function DataTable({ caption, headers, rows }) {
  return (
    <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-brand text-white">
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top border-t border-gray-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
