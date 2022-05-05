import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>
		</div>
	)
}
