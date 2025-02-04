"use client"

import type React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface DataItem {
  name: string
  orders: number
}

interface DynamicBarChartProps {
  data: DataItem[]
}

const DynamicBarChart: React.FC<DynamicBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DynamicBarChart

