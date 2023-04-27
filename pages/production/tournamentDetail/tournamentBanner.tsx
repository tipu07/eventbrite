import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import { IconHeart, PhotoAbout, PhotoBlog02, PhotoMainSlide } from "@/components/images"
import Image from "next/image"
import SchedulePopup from "./schedulePopup"

const TournamentBanner = () => {
	const [schedulePopup, setSchedulePopup] = useState(false)
	const schedulePopuphandle = () => {
		setSchedulePopup(!schedulePopup)
	}
	return (
		<>
			<div className={style.banner}>
				<div className={style.contain}>
					<div className={style.image_blk}>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoBlog02} alt="" />
						</div>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoAbout} alt="" />
						</div>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoMainSlide} alt="" />
						</div>
					</div>
					<div className={`${style.data} text-center`}>
						<div className={style.tags_blk}>
							<strong className={style.text_prime}>Tournament</strong>
							<span className={style.tag}>esport</span>
						</div>
						<h2>151 Hollow Tree, Irvine, CA 92618</h2>
						<div className={`${style.btn_blk} justify-content-center`}>
							<button className={`${style.site_btn} ${style.heart_btn}`}>
								<Image width={40} height={40} src={IconHeart} alt="Heart" /> Add to wishlist
							</button>
							<button type="button" className={`${style.site_btn} ${style.simple}`} onClick={schedulePopuphandle}>
								Schedule Showing
							</button>
						</div>
					</div>
				</div>
			</div>
			{schedulePopup ? <SchedulePopup popupClose={schedulePopuphandle} /> : null}
		</>
	)
}

export default TournamentBanner
