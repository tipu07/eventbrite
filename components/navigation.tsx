import Link from "next/link"
import React from "react"
import style from "../styles/scss/global.module.scss"

const Navigation = () => {
	return (
		<>
			<nav id={style.nav}>
				<ul id="nav">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">About</Link>
					</li>
					<li>
						<Link href="/">Services</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
