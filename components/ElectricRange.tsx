"use client";
import { TElectricRangeData } from "@/types/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ElectricRange(props: { data: TElectricRangeData }) {
  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <BarChart data={props.data} width={500} height={250}>
        <Bar
          type="monotone"
          width={10}
          fill="#8884d8"
          dataKey="range"
          name={"Range"}
        />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="model" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ElectricRange;
