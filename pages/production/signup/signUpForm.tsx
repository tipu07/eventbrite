import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const SignUpForm = () => {
	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST">
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Sign up</h2>
							<p>Just register to join with us.</p>
						</div>
						<div className={style.form_row + " row"}>
							<div className="col-sm-12">
								<h6>Full Name</h6>
								<div className={style.form_blk}>
									<input type="text" name="email" id="email" className={style.input} placeholder="eg: John Wick" value="" />
								</div>
							</div>
							<div className="col-sm-12">
								<h6>Email Address</h6>
								<div className={style.form_blk}>
									<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
								</div>
							</div>
							<div className="col-sm-12">
								<h6>Password</h6>
								<div className="form_blk pass_blk">
									<input type="password" name="password" id="password" className={style.input} placeholder="eg: PassLogin%7" value="" />
									<i className={style.icon_eye}></i>
								</div>
							</div>
							<div className="col-sm-12">
								<h6>Confirm Password</h6>
								<div className="form_blk pass_blk">
									<input type="password" name="password" id="password" className={style.input} placeholder="eg: PassLogin%7" value="" />
									<i className={style.icon_eye}></i>
								</div>
							</div>
							<div className="col-sm-12">
								<div className={style.form_blk}>
									<div className={style.lbl_btn}>
										<input type="checkbox" name="confirm" id="confirm" />
										<label htmlFor="confirm">
											I agree to Eventplus{" "}
											<Link target="_blank" href="/terms-and-conditions">
												Terms & Conditions
											</Link>{" "}
											and{" "}
											<Link target="_blank" href="/privacy-policy">
												Privacy Policy.
											</Link>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Register
							</button>
						</div>
						<div className={style.account + " mt-2"}>
							Already have an account? <Link href="/production/signin">Sign in</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignUpForm
