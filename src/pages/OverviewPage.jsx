import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { ShoppingBag, Zap, Users, BarChart2 } from "lucide-react";
import SalesOverviewCharts from "../components/overview/SalesOverviewCharts";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const statCardData = [
  {
    name: "Total Sales",
    icon: Zap,
    value: "15,678",
    color: "#6366F1",
  },
  {
    name: "New Users",
    icon: Users,
    value: "2,456",
    color: "#8B5CF6",
  },
  {
    name: "Total Products",
    icon: ShoppingBag,
    value: "890",
    color: "#EC4899",
  },
  {
    name: "Conversion",
    icon: BarChart2,
    value: "15.2%",
    color: "#10B981",
  },
];


const OverviewPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto bg-gray-900">
      <Header title="Overview" />

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
        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesOverviewCharts />
          <CategoryDistributionChart />
        </div>
        <div className="">
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
