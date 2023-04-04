import Head from "next/head"
import Link from "next/link"
import React from "react"
import style from "../styles/scss/global.module.scss"
import Navigation from "./navigation"

const Header = () => {
	return (
		<>
			<Head>
				<title>Home — Eventbrite</title>
				<meta name="description" content="Eventbrite" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header id={style.header}>
				<div className={style.contain}>
					<div className={style.logo}>
						<Link href="/">LOGO</Link>
					</div>
					<Navigation />
				</div>
			</header>
		</>
	)
}

export default Header
