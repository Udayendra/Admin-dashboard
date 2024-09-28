import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";

const customerSegmentationData = [
    { subject: "Engagement", A: 140, B: 130, C: 125, fullMark: 150 },
    { subject: "Loyalty", A: 115, B: 145, C: 130, fullMark: 150 },
    { subject: "Satisfaction", A: 100, B: 140, C: 120, fullMark: 150 },
    { subject: "Spend", A: 110, B: 120, C: 115, fullMark: 150 },
    { subject: "Frequency", A: 130, B: 120, C: 115, fullMark: 150 },
    { subject: "Recency", A: 80, B: 90, C: 85, fullMark: 150 },
    { subject: "Customer Support", A: 95, B: 105, C: 100, fullMark: 150 },
  ];
  
  
  

const CustomerSegmentation = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Customer Segmentation</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={customerSegmentationData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
						<Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
                        <Radar name='Segment C' dataKey='C' stroke='#FBBF24' fill='#FBBF24' fillOpacity={0.6} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CustomerSegmentation;