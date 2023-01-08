import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Carts = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white ">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 lg:gap-16 gap-8">
				<div className="w-full shadow-xl bg-slate-100 flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-4xl text-center font-bold">$123</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8  mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">Send Up to 2GB</p>
					</div>
					<button className="border-blue-400 hover:bg-blue-600 active:bg-blue-700 border rounded py-2 w-36 font-semibold mx-auto mt-5">Start Trial</button>
				</div>

				<div className="w-full shadow-xl bg-blue-400 flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto "
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
					<p className="text-4xl text-center font-bold">$651</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8  mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">Send Up to 2GB</p>
					</div>
					<button className="bg-[#00002b] hover:bg-blue-600 active:bg-blue-700 border rounded py-2 w-36 font-semibold mx-auto mt-5 text-white">Start Trial</button>
				</div>

				<div className="w-full shadow-xl bg-slate-100 flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto"
						src={Triple}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
					<p className="text-4xl text-center font-bold">$432</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8  mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">Send Up to 2GB</p>
					</div>
					<button className="border-blue-400 hover:bg-blue-600 active:bg-blue-700 border rounded py-2 w-36 font-semibold mx-auto mt-5">Start Trial</button>
				</div>
			</div>
		</div>
	)
}

export default Carts
