import React from "react";
import Card from "@/components/ui/Card";

interface ComparisonRow {
  feature: string;
  before: string | React.ReactNode;
  after: string | React.ReactNode;
}

interface ComparisonTableProps {
  title?: string;
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonTable({
  title,
  rows,
  className,
}: ComparisonTableProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">
          {title}
        </h3>
      )}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-navy">
                  Feature
                </th>
                <th className="px-6 py-4 text-left font-semibold text-navy">
                  Before
                </th>
                <th className="px-6 py-4 text-left font-semibold text-teal-accent">
                  With NeuroResponse
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {row.before}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
