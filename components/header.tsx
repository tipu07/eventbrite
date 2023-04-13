import Head from "next/head"
import Link from "next/link"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Navigation from "./navigation"
import Image from "next/image"
import { SocialFacebook, SocialGoogleStore, SocialInstagram, SocialLinkedin, SocialYelp } from "./images"
import Logo from "./logo"

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
					<div className={style.header_strip}>
						<ul className={style.sm_list}>
							<li>
								<Link href="/production/about">About us</Link>
							</li>
							<li>
								<Link href="/production/contact">Contact us</Link>
							</li>
							<li>
								<Link href="/production/privacy-policy">Privacy policy</Link>
							</li>
						</ul>
						<ul className={style.social_links}>
							<li>
								<a href="?" target="_blank">
									<Image width={60} height={60} src={SocialYelp} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={60} height={60} src={SocialGoogleStore} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={60} height={60} src={SocialLinkedin} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={60} height={60} src={SocialInstagram} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={60} height={60} src={SocialFacebook} alt="" />
								</a>
							</li>
						</ul>
					</div>
					<Navigation />
				</div>
			</header>
		</>
	)
}

export default Header
