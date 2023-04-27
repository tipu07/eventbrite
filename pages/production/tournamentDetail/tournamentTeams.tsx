import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07, PhotoUser_08, PhotoUser_09, PhotoUser_10 } from "@/components/images"

const TournamentTeams = () => {
	return (
		<>
			<div className={style.blk}>
				<h5 className="mb-4">Tournament Teams</h5>
				<h6>First Team</h6>
				<ul className={style.team_list}>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_02} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_03} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_04} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_05} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_06} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_07} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_08} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_09} alt="" />
						</div>
					</li>
				</ul>
				<h6>Second Team</h6>
				<ul className={style.team_list}>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_07} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_10} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_02} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_03} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_04} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_08} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_09} alt="" />
						</div>
					</li>
					<li>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_05} alt="" />
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}

export default TournamentTeams
