import React from 'react'
import Analytics from './components/Analytics'
import Carts from './components/Carts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Analytics />
			<Newsletter />
			<Carts />
			<Footer />
		</div>
	)
}

export default App
