import Head from "next/head"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Navigation from "./navigation"
import Logo from "../logo"
import HeaderStrip from "./headerStrip"

const Header = (props: any) => {
	const { pageTitle } = props
	return (
		<>
			<Head>
				<title>{pageTitle} — Eventplus</title>
				<meta name="description" content="Eventplus" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<header id={style.header}>
				<div className={style.contain}>
					<Logo />
					<HeaderStrip />
					<Navigation />
				</div>
			</header>
		</>
	)
}

export default Header
