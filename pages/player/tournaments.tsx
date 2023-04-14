import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TournamentsItems from "./tournaments/tournamentsItems"

const Tournaments = () => {
	return (
		<>
			<Header pageTitle="Tournaments" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">My Tournaments</h5>
					<TournamentsItems />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Tournaments
