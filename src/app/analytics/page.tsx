import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

const DynamicLineChart = dynamic(() => import("@/components/DynamicLineChart"), { ssr: false })

const data = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 198 },
  { name: "Mar", revenue: 5000, orders: 300 },
  { name: "Apr", revenue: 4500, orders: 270 },
  { name: "May", revenue: 6000, orders: 350 },
  { name: "Jun", revenue: 5500, orders: 320 },
]

export default function Analytics() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Revenue Over Time</h3>
          <DynamicLineChart data={data} dataKey="revenue" stroke="#8884d8" />
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Orders Over Time</h3>
          <DynamicLineChart data={data} dataKey="orders" stroke="#82ca9d" />
        </Card>
      </div>
    </div>
  )
}

