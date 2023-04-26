import React from "react"
import style from "@/styles/scss/app.module.scss"

const NewTournamentForm = () => {
	return (
		<>
			<div className={style.blk}>
				<form action="" method="post">
					<div className="row">
						<div className="col-sm-12">
							<h6>Tournament Title</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="eg: Lorem ipsum dollar" />
							</div>
						</div>
						<div className="col-sm-6">
							<h6>First Team</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="eg: Triarchy" />
							</div>
						</div>
						<div className="col-sm-6">
							<h6>Second Team</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="eg: Warmongers" />
							</div>
						</div>
						<div className="col-sm-6">
							<h6>Tournament Date</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="eg: 04-12-2020" />
							</div>
						</div>
						<div className="col-sm-6">
							<h6>Tournament Time</h6>
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="eg: 12:00" />
							</div>
						</div>
						<div className="col-sm-12">
							<h6>Image</h6>
							<div className={style.form_blk}>
								<button type="button" name="" id="" className={style.input}>
									Upload Photos
								</button>
							</div>
						</div>
						<div className="col-sm-12">
							<h6>Tags</h6>
							<div className={style.form_blk}>
								<textarea name="" id="" rows={5} className={style.input} placeholder="eg: lorem, dollar, site, emit"></textarea>
							</div>
						</div>
						<div className="col-sm-12">
							<h6>Description</h6>
							<div className={style.form_blk}>
								<textarea name="" id="" rows={7} className={style.input} placeholder="Type something here"></textarea>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-center mt-5`}>
						<button type="submit" className={style.site_btn}>
							Create Tournament
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default NewTournamentForm
