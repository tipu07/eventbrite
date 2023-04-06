import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoGallery01 } from "@/components/images"

const Report = () => {
	return (
		<>
			<section id={style.report}>
				<div className={style.contain}>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className={style.content}>
								<h5 className={style.subheading}>Resources</h5>
								<h2 className="h1 text-uppercase">Sign Up for Monthly Market Report</h2>
								<div className={style.btn_blk + " " + style.btn_blk_desktop}>
									<button type="button" className={style.site_btn + " " + style.pop_btn}>
										Sign Up Now
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoGallery01} alt="" />
							</div>
							<div className={style.btn_blk + " " + style.btn_blk_mobile + " justify-content-center"}>
								<button type="button" className={style.site_btn + " " + style.pop_btn}>
									Sign Up Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Report
