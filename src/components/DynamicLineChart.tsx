"use client"

import type React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface DataItem {
  name: string
  [key: string]: number | string
}

interface DynamicLineChartProps {
  data: DataItem[]
  dataKey: string
  stroke: string
}

const DynamicLineChart: React.FC<DynamicLineChartProps> = ({ data, dataKey, stroke }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke={stroke} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default DynamicLineChart

