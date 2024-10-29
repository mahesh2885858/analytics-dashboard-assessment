"use client";
import { TData } from "@/types/data";
import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function Company(data: { data: TData }) {
  const d = data.data.map((i) => ({
    "Electric Range": parseInt(i["Electric Range"]),
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={200}>
        <Pie
          data={d}
          dataKey="Electric Range"
          nameKey="Range"
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

export default Company;
