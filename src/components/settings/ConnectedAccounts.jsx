import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: <FcGoogle size={25} className="bg-white rounded-full p-[1px]"/>,
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: <FaFacebookF size={25} className="bg-white text-blue-600 rounded-full p-[1px] flex items-center" />,
		},
		{
			id: 3,
			name: "Linkedin",
			connected: true,
			icon: <FaLinkedinIn size={25} className="bg-white text-blue-600 rounded-full p-[1px] flex items-center justify-center" />,
		},
	]);
	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3'>
					<div className=' gap-2 flex items-center'>
						{/* <img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' /> */}
						{account.icon}
						<span className='text-gray-300'>{account.name}</span>
					</div>
					<button
						className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
		</SettingSection>
	);
};
export default ConnectedAccounts;