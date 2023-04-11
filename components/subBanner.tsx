import { PhotoMainSlide } from "@/components/images"
import React from "react"
import style from "@/styles/scss/app.module.scss"

const SubBanner = (props: any) => {
	const { title } = props
	return (
		<>
			<section id={style.x_banner} style={{ backgroundImage: `url("${PhotoMainSlide.src}")` }}>
				<div className={style.contain + " text-center"}>
					<div className={style.content}>
						<h1>{title}</h1>
						{props.children}
					</div>
				</div>
			</section>
		</>
	)
}

export default SubBanner
