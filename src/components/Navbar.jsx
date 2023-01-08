import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="flex justify-evenly items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#7ab8ff]">R.FINANCE</h1>
			<ul className="hidden lg:flex gap-6">
				<li className="p-2 px-4  hover:bg-blue-400 rounded-md	">
					<a href="/">Home</a>
				</li>
				<li className="p-2 hover:bg-blue-400 rounded-md">
					<a href="/">Company</a>
				</li>
				<li className="p-2 hover:bg-blue-400 rounded-md">
					<a href="/">About</a>
				</li>
				<li className="p-2 hover:bg-blue-400 rounded-md bg-blue-400 ">
					<a href="/">Resources</a>
				</li>
				<li className="p-2 hover:bg-blue-400 rounded-md">
					<a href="/">Contact</a>
				</li>
			</ul>
			<div
				onClick={handleNav}
				className="block lg:hidden ease-in-out duration-1000">
				{nav ? <CgClose size={30} /> : <RiMenu3Fill size={30} />}
			</div>

			<div className={nav ? 'list-none fixed top-0 h-full left-0 w-[60%] bg-[#000620] ease-in-out duration-300' : 'ease-in-out duration-500 fixed left-[-100%]'}>
				<h1 className="w-full text-3xl font-bold text-[#7ab8ff] ml-4 mt-8">R.FINANCE</h1>
				<ul className="p-4 uppercase">
					<li className="p-4 border-b border-blue-400 ">
						<a href="/">Home</a>
					</li>
					<li className="p-4 border-b border-blue-400">
						<a href="/">Company</a>
					</li>
					<li className="p-4 border-b border-blue-400">
						<a href="/">About</a>
					</li>
					<li className="p-4 border-b border-blue-400">
						<a href="/">Resources</a>
					</li>
					<li className="p-4">
						<a href="/">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
