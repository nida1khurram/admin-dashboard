import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  { id: 1, customer: "John Doe", items: "Pizza, Salad", total: 25.99, status: "Completed" },
  { id: 2, customer: "Jane Smith", items: "Burger, Fries", total: 15.99, status: "In Progress" },
  { id: 3, customer: "Bob Johnson", items: "Pasta, Garlic Bread", total: 18.99, status: "Pending" },
]

export default function Orders() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

