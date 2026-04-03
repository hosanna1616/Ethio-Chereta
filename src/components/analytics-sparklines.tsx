"use client";

import { Card } from "@/components/ui/card";
import { MiniSparkline } from "@/components/mini-sparkline";

const sparkA = [{ x: 3 }, { x: 5 }, { x: 4 }, { x: 7 }, { x: 9 }, { x: 8 }];
const sparkB = [{ x: 8 }, { x: 7 }, { x: 9 }, { x: 10 }, { x: 11 }, { x: 12 }];

export function AnalyticsSparklines() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="!p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">Win rate</p>
            <p className="mt-1 text-xl font-bold text-emerald-600">+12%</p>
          </div>
          <MiniSparkline data={sparkA} color="#059669" />
        </div>
      </Card>
      <Card className="!p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">Pipeline</p>
            <p className="mt-1 text-xl font-bold text-sky-600">+8%</p>
          </div>
          <MiniSparkline data={sparkB} color="#0284c7" />
        </div>
      </Card>
    </div>
  );
}
