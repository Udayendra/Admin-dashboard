import { motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useState } from "react";

const userData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Editor",
    status: "Pending",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 7,
    name: "Liam Thompson",
    email: "liam.thompson@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Ava Brown",
    email: "ava.brown@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 9,
    name: "Noah Wilson",
    email: "noah.wilson@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 10,
    name: "Sophia Green",
    email: "sophia.green@example.com",
    role: "User",
    status: "Active",
  },
];


const trData = ["name", "email", "role", "status"];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(userData);

  const handleChange = (e) => {
    const term = e.target.value;
    const termLC = term.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(termLC) ||
        user.role.toLowerCase().includes(termLC) ||
        user.status.toLowerCase().startsWith(termLC)
    );
    setFilteredProducts(filtered);
    console.log(filtered)
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={searchTerm}
          />
          <Search className="absolute top-2.5 left-3" size={18} />
        </div>
      </div>

      <div className="">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {trData.map((item, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: 0 }}
              >
                {trData.map((item, index) => (
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100`}
                  >
                    {product[item]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
