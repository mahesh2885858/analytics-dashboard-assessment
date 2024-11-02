"use client";

import { TModelWiseData } from "@/types/data";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Model(props: { data: TModelWiseData }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        width={500}
        height={250}
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="model" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="numberOfVehicles"
          stroke="#8884d8"
          fill="#8884d8"
          name="Total sales per modal"
        />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Model;
