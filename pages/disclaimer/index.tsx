import React from "react"
import style from "@/styles/scss/app.module.scss"
import TermsContent from "./termsContent"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header"
import Footer from "@/components/footer"

const Disclaimer = () => {
	return (
		<>
			<Header pageTitle="Disclaimer" />
			<SubBanner title="Disclaimer" />
			<section id={style.terms}>
				<div className={style.contain}>
					<TermsContent />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Disclaimer
