import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { User, UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import UsersTable from "../components/Users/UsersTable";
import UserGrowthChart from "../components/Users/UserGrowthChart";
import UserActivityHeatmap from "../components/Users/UserActivityHeatmap";
import UserDemographicsCharts from "../components/Users/UserDemographicsCharts";

const statCardData = [
  {
    name: "Total Users",
    icon: UserIcon,
    value: "154671",
    color: "#6366F1",
  },
  {
    name: "New Users Today",
    icon: UserPlus,
    value: "543",
    color: "#8B5CF6",
  },
  {
    name: "Active Users",
    icon: UserCheck,
    value: "24343",
    color: "#EC4899",
  },
  {
    name: "Churn Rate",
    icon: UserX,
    value: "2%",
    color: "#10B981",
  },
];

const UserPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto bg-gray-900">
      <Header title="Users" />
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
        <UsersTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
        </div>

        <UserDemographicsCharts />
      </main>
    </div>
  );
};

export default UserPage;
