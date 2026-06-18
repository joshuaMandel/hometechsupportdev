export default function DataTable({ caption, headers, rows }) {
  return (
    <div className="overflow-x-auto mb-8 rounded-2xl border border-border shadow-soft">
      <table className="w-full text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-gradient-to-r from-brand to-accent text-white">
            {headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-3.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`transition-colors hover:bg-brand-light/50 ${
                i % 2 === 0 ? "bg-surface" : "bg-surface-2"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top border-t border-border ${
                    j === 0 ? "font-medium text-ink" : "text-muted"
                  }`}
                >
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
