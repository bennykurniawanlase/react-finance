import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
	return (
		<div className="w-full py-16 px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid lg:gap-2 md:gap-5 items-center md:grid-cols-2">
				<img
					className="lg:p-16 sm:p-8 "
					src={Laptop}
					alt="/"
				/>
				<div className="text-white flex flex-col justify-center">
					<p className="uppercase font-semibold text-blue-400 text-3xl md:text-2xl">Data analytics dashboard</p>
					<h1 className="capitalize text-4xl my-4 text-[#00002b] ">manage data analytics central</h1>
					<p className="text-black font-semibold">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, quas sint iste fugiat aliquid tenetur accusantium et eum odit ipsum laudantium ut porro rem! Fugit distinctio et voluptates voluptatibus quae.
					</p>
					<button className="bg-blue-400 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-gray-300 rounded py-2 w-36 font-semibold text-center mx-auto md:mx-0 mt-5">Get Started</button>
				</div>
			</div>
		</div>
	)
}

export default Analytics
