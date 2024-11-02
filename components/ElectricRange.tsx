"use client";
import { TElectricRangeData } from "@/types/data";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function ElectricRange(props: { data: TElectricRangeData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={200}>
        <Pie
          data={props.data}
          dataKey="Electric Range"
          nameKey="company"
          cx="125"
          cy="80"
          outerRadius="80%"
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ElectricRange;
