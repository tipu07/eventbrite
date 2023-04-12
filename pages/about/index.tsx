import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PhotoAbout } from "@/components/images"
import Intro from "./intro"
import Affiliate from "./affiliate"
import Contact from "../home/contact"

const About = () => {
	return (
		<>
			<Header pageTitle="About us" />
			<SubBanner title="About us" background={PhotoAbout} />
			<Intro />
			<Affiliate />
			<Contact />
			<Footer />
		</>
	)
}

export default About
