import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

const DynamicBarChart = dynamic(() => import("@/components/DynamicBarChart"), { ssr: false })

const data = [
  { name: "Mon", orders: 12 },
  { name: "Tue", orders: 19 },
  { name: "Wed", orders: 3 },
  { name: "Thu", orders: 5 },
  { name: "Fri", orders: 2 },
  { name: "Sat", orders: 30 },
  { name: "Sun", orders: 25 },
]

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Total Orders</h3>
          <p className="text-2xl">96</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Total Revenue</h3>
          <p className="text-2xl">$1,240</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">New Customers</h3>
          <p className="text-2xl">14</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Popular Dish</h3>
          <p className="text-2xl">Pizza</p>
        </Card>
      </div>
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Weekly Orders</h3>
        <DynamicBarChart data={data} />
      </Card>
    </div>
  )
}

