import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"

const Messages = () => {
	return (
		<>
			<Header pageTitle="Messages" />
			<section id={style.messages}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.users}>users</div>
						<div className={style.content}>content</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Messages
