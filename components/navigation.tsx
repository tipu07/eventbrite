import Link from "next/link"
import React from "react"
import style from "../styles/scss/app.module.scss"
import { useRouter } from "next/router"

const Navigation = () => {
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
				<ul>
					<li>
						<Link href="/home" className={router.pathname === "/home" ? style.active : ""}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/search" className={router.pathname === "/search" ? style.active : ""}>
							Search
						</Link>
					</li>
					<li>
						<Link href="/works" className={router.pathname === "/search" ? style.active : ""}>
							How it works
						</Link>
					</li>
					<li>
						<Link href="/signin" className={router.pathname === "/signin" ? style.active : ""}>
							Sign in
						</Link>
					</li>
					<li>
						<Link href="/signup" className={router.pathname === "/signup" ? style.active : ""}>
							Sign up
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
