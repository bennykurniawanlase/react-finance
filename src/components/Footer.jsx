import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid  lg:grid-cols-3 gap-8 text-white">
			<div>
				<h1 className="w-full text-3xl font-bold text-[#7ab8ff]">R.FINANCE</h1>
				<p className="py-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolore nihil dolorum voluptate! Quod vitae consequatur vero ea obcaecati omnis?</p>
				<div className="flex md:w-[75%] my-6 justify-between cursor-pointer ">
					<FaDribbbleSquare size={30} />
					<FaFacebookSquare size={30} />
					<FaGithubSquare size={30} />
					<FaInstagramSquare size={30} />
					<FaTwitterSquare size={30} />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between py-6">
				<div>
					<h6 className="text-lg text-gray-400">Solutions</h6>
					<ul className="cursor-pointer">
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Career</li>
						<li className="py-2 text-sm">Insights</li>
						<li className="py-2 text-sm">Commerce</li>
					</ul>
				</div>
				<div>
					<h6 className="text-lg text-gray-400">Support</h6>
					<ul className="cursor-pointer">
						<li className="py-2 text-sm">Documentations</li>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Guides</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
				</div>
				<div>
					<h6 className="text-lg text-gray-400">Company</h6>
					<ul className="cursor-pointer">
						<li className="py-2 text-sm"> About</li>
						<li className="py-2 text-sm">Blogs</li>
						<li className="py-2 text-sm">Press</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
