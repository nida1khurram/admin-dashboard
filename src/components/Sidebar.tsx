import Link from "next/link"
import { Home, Clipboard, Menu, Users, BarChart } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link
          href="/orders"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Clipboard className="inline-block mr-2" size={20} />
          Orders
        </Link>
        <Link
          href="/menu"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Menu className="inline-block mr-2" size={20} />
          Menu
        </Link>
        <Link
          href="/users"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Users className="inline-block mr-2" size={20} />
          Users
        </Link>
        <Link
          href="/analytics"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <BarChart className="inline-block mr-2" size={20} />
          Analytics
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

