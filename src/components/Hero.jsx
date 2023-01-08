import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="uppercase text-blue-400 font-bold p-2">growing with data analytics</p>
				<h1 className="capitalize md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">grow with data.</h1>
				<div className="flex justify-center items-center">
					<p className="capitalize md:text-4xl sm:text-3xl text-xl font-bold py-4">fast, flexibel, financing for</p>
					<Typed
						className="capitalize text-blue-400 md:text-4xl sm:text-3xl text-xl font-bold pl-2 "
						strings={['BTB', 'BTC', 'SASS']}
						typeSpeed={140}
						backSpeed={150}
						loop
					/>
				</div>
				<p className="md:text-2xl sm:text-lg text-xl font-bold text-gray-600">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform</p>
				<button className="border-blue-400 hover:bg-blue-600 active:bg-blue-700 border rounded py-2 w-36 font-semibold mx-auto mt-5">Get Started</button>
			</div>
		</div>
	)
}

export default Hero
