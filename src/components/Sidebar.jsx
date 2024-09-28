import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideBarItems = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Setting", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      className={`z-10 relative transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      } `}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SideBarItems.map((item, index) => (
            <Link key={index} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  color={item.color}
                  style={{ minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                      className="ml-4 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;