import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { Table, TableCell, TableHeaderCell } from "../components/ui/Table";

const ROWS = [
  { name: "Bedroom producer era", status: "Published", date: "2026-08-12" },
  { name: "Summer campaign", status: "Draft", date: "2026-08-18" },
  { name: "Fall lookbook", status: "Published", date: "2026-08-20" },
];

const layoutLines: [string, string][] = [
  ["display", "table-cell"],
  ["height", "40px"],
  ["padding", "0 12px"],
];

const styleLines: [string, string][] = [
  ["background", "white"],
  ["color", "#1f1f1f"],
];

export function ComponentsTable() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Table</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-fg-default">Header (from Figma)</h2>
          <div className="overflow-x-auto bg-black/20 p-6">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(true)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(true)}
              className={`inline-block cursor-pointer outline-offset-4 ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
            >
              <table className="w-[527px] border-collapse">
                <thead>
                  <tr>
                    <TableHeaderCell>Line 1</TableHeaderCell>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-fg-default">Full table (rows not in Figma — see Table.tsx)</h2>
          <div className="overflow-x-auto bg-black/20 p-6">
            <Table className="max-w-[600px]">
              <thead>
                <tr>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Date</TableHeaderCell>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {selected && (
        <InspectorPanel label="Table Header" layoutLines={layoutLines} styleLines={styleLines} onClose={() => setSelected(false)} />
      )}
    </div>
  );
}
