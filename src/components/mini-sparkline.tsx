"use client";

import { useId } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

type MiniSparklineProps = {
  data: { x: number }[];
  color?: string;
};

export function MiniSparkline({ data, color = "#152b52" }: MiniSparklineProps) {
  const gid = useId().replace(/:/g, "");
  return (
    <div className="h-10 w-20 min-h-[2.5rem] min-w-[5rem]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="x"
            stroke={color}
            fill={`url(#${gid})`}
            strokeWidth={2}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
