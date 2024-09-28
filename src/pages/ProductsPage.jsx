import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import CategoryDistributionChart from "../components/products/CategoryDistributionChart";
import SalesTrandChart from "../components/products/SalesTrandChart";

const statCardData = [
  {
    name: "Total Products",
    icon: Package,
    value: "1,500",
    color: "#6366F1",
  },
  {
    name: "Top Selling",
    icon: TrendingUp,
    value: "120",
    color: "#8B5CF6",
  },
  {
    name: "Low Stock",
    icon: AlertTriangle,
    value: "10",
    color: "#EC4899",
  },
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: "$600,000",
    color: "#10B981",
  },
];

const ProductsPage = () => {
  return (
    <div className="z-10 w-full h-auto overflow-auto bg-gray-900">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20 ">
        {/* stats  */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {statCardData.map((stat, index) => (
            <StatCard
              key={index}
              name={stat.name}
              icon={stat.icon}
              value={stat.value}
              color={stat.color}
            />
          ))}
        </motion.div>
        <ProductTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesTrandChart/>
          <CategoryDistributionChart/>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
