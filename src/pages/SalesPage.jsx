import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const statCardData = [
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: "$1,234,567",
    color: "#6366F1",
  },
  {
    name: "Avg. Order Value",
    icon: ShoppingCart,
    value: "$78.90",
    color: "#8B5CF6",
  },
  {
    name: "Conversion Rate",
    icon: TrendingUp,
    value: "3.45%",
    color: "#EC4899",
  },
  {
    name: "Sales Growth",
    icon: CreditCard,
    value: "12.3%",
    color: "#10B981",
  },
];
const SalesPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto bg-gray-900">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
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
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SalesByCategoryChart />
        <DailySalesTrend />
        </div>

        
      </main>
    </div>
  );
};

export default SalesPage;
