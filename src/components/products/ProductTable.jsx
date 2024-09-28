import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import earbudsImg from "../../assets/earbuds.png";
import walletImg from "../../assets/wallet.png";
import smartwatchImg from "../../assets/smartwatch.png";
import yogamatImg from "../../assets/yogamet.png";
import coffeemakerImg from "../../assets/coffeemaker.png";
import backpackImg from "../../assets/bag.png"
import gamingConsoleImg from "../../assets/gaming.png"
import tabletImg from "../../assets/tablet.png"
import headphonesImg from "../../assets/headphone.png"
import laptopImg from "../../assets/laptop.png"

const productData = [
  {
    id: 1,
    img: earbudsImg,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    img: walletImg,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    img: smartwatchImg,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    img: gamingConsoleImg,
    name: "Gaming Console",
    category: "Electronics",
    price: 299.99,
    stock: 30,
    sales: 220,
  },
  {
    id: 5,
    img: tabletImg,
    name: "Tablet",
    category: "Electronics",
    price: 249.99,
    stock: 75,
    sales: 400,
  },
  {
    id: 6,
    img: headphonesImg,
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 129.99,
    stock: 95,
    sales: 430,
  },
  {
    id: 7,
    img: coffeemakerImg,
    name: "Coffee Maker",
    category: "Home",
    price: 89.99,
    stock: 66,
    sales: 320,
  },
  {
    id: 8,
    img: laptopImg,
    name: "Laptop",
    category: "Electronics",
    price: 899.99,
    stock: 45,
    sales: 150,
  },
  {
    id: 9,
    img: backpackImg,
    name: "Travel Backpack",
    category: "Accessories",
    price: 69.99,
    stock: 110,
    sales: 390,
  },
  {
    id: 10,
    img: yogamatImg,
    name: "Yoga mat",
    category: "Fitness",
    price: 799.99,
    stock: 20,
    sales: 80,
  },
];


const trData = ["name", "category", "price", "stock", "sales"];

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleChange = (e) => {
    const term = e.target.value;
    const termLC = term.toLowerCase();
    setSearchTerm(term);
    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(termLC) ||
        product.category.toLowerCase().includes(termLC)
    );
    setFilteredProducts(filtered);
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
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ${
                      item === "name" ? "flex items-center gap-4" : ""
                    } `}
                  >
                    {item === "name" ? (
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ) : (
                      ""
                    )}

                    {item === "price"
                      ? `$${product[item].toFixed(2)}`
                      : product[item]}
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

export default ProductTable;
