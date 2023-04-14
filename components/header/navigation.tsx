import Link from "next/link"
import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Router, { useRouter } from "next/router"

const Navigation = () => {
	const [header, setHeader] = useState("production")
	const router = useRouter()

	useEffect(() => {
		const { pathname } = Router
		if (pathname == "/") {
			setHeader("production")
		} else if (pathname == "/player") {
			setHeader("player")
		} else if (pathname == "/organizer") {
			setHeader("organizer")
		} else {
			setHeader("production")
		}
	}, [])
	return (
		<>
			<nav id={style.nav}>
				{header === "production" ? (
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
				) : (
					<ul>
						<li>
							<Link href="/player" className={router.pathname === "/player" ? style.active : ""}>
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/player/booking" className={router.pathname === "/player/booking" ? style.active : ""}>
								Booking
							</Link>
						</li>
						<li>
							<Link href="/player/transactions" className={router.pathname === "/player/transactions" ? style.active : ""}>
								Transactions
							</Link>
						</li>
						<li>
							<Link href="/player/wishlists" className={router.pathname === "/player/wishlists" ? style.active : ""}>
								Wishlists
							</Link>
						</li>
						<li>
							<Link href="/player/close-account" className={router.pathname === "/player/close-account" ? style.active : ""}>
								Close Account
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</>
	)
}

export default Navigation
