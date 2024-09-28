import React from "react";
import { motion } from "framer-motion";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  const salesData = [
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    { name: "May", sales: 7100 },
    { name: "Jun", sales: 7500 },
    { name: "Jul", sales: 8000 },
    { name: "Aug", sales: 8500 },
    { name: "Sep", sales: 7800 },
    { name: "Oct", sales: 8200 },
    { name: "Nov", sales: 9000 },
    { name: "Dec", sales: 9500 },
  ];
  

const SalesTrandChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Trand</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis  stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesTrandChart;
