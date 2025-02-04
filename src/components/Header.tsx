import { Bell, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Restaurant Admin</h1>
        <div className="flex items-center">
          <button className="p-2 mr-4 text-gray-600 hover:text-gray-800">
            <Bell size={20} />
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <User size={20} className="mr-2" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

