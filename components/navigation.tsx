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
						<Link href="/production" className={router.pathname === "/production" ? style.active : ""}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/production/search" className={router.pathname === "/production/search" ? style.active : ""}>
							Search
						</Link>
					</li>
					<li>
						<Link href="/production/works" className={router.pathname === "/production/works" ? style.active : ""}>
							How it works
						</Link>
					</li>
					<li>
						<Link href="/production/signin" className={router.pathname === "/production/signin" ? style.active : ""}>
							Sign in
						</Link>
					</li>
					<li>
						<Link href="/production/signup" className={router.pathname === "/production/signup" ? style.active : ""}>
							Sign up
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
