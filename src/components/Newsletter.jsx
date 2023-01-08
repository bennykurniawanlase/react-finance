import React from 'react'

const Newsletter = () => {
	return (
		<div className="w-full py-10 text-white px-4 md:px-16">
			<div className="max-w-[1240px] grid mx-auto lg:grid-cols-3 ">
				<div className="lg:col-span-2 my-4 ">
					<h1 className="font-bold capitalize sm:text-2xl text-xl md:text-[26px]  py-2">Want trics & and tips to optimize your flow?</h1>
					<p className="font-semibold text-lg mt-4">Sign up to our newsletter and stay up to date.</p>
				</div>
				<div className="my-4">
					<div className="flex flex-col md:flex-row sm:flex-row items-center w-full">
						<input
							type="email"
							placeholder="Enter your email..."
							className="flex w-full p-2 rounded text-black"
						/>
						<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded py-2 px-2 my-6 w-40 ml-4 font-semibold ">Notify Me</button>
					</div>
					<p>
						We care about the protection of your data. Read our <span className="capitalize underline cursor-pointer text-blue-500">privacy policy.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
