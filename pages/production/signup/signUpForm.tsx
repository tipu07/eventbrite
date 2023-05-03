import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const SignUpForm = () => {
	const [signup, setSignup] = useState("organizer")
	/* const signupHandle = () => {
		setSignup("organizer")
	} */
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
								<h6>Sign up as</h6>
								<div className={`${style.form_blk} ${style.btn_blk} ${style.signup_as_btn_blk}`}>
									<button type="button" name="as_player" id="as_player" className={`${style.input} ${signup === "organizer" ? style.active : ""}`} onClick={() => setSignup("organizer")}>
										Organizer
									</button>
									<button type="button" name="as_player" id="as_player" className={`${style.input} ${signup === "player" ? style.active : ""}`} onClick={() => setSignup("player")}>
										Player
									</button>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Full Name</h6>
								<div className={style.form_blk}>
									<input type="text" name="email" id="email" className={style.input} placeholder="eg: John Wick" value="" />
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Email Address</h6>
								<div className={style.form_blk}>
									<input type="text" name="email" id="email" className={style.input} placeholder="eg: sample@gmail.com" value="" />
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Phone Number</h6>
								<div className={style.form_blk}>
									<input type="text" name="phone" id="phone" className={style.input} placeholder="eg: 194349034234" value="" />
								</div>
							</div>
							{signup === "player" ? (
								<>
									<div className="col-sm-12">
										<h6>Country</h6>
										<div className={style.form_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select</option>
												<option value="232">United Kingdom</option>
												<option value="232">United Kingdom</option>
												<option value="232">United Kingdom</option>
												<option value="232">United Kingdom</option>
												<option value="232">United Kingdom</option>
												<option value="232">United Kingdom</option>
											</select>
										</div>
									</div>
									<div className="col-sm-6">
										<h6>City</h6>
										<div className={style.form_blk}>
											<input type="text" name="city" id="city" className={style.input} placeholder="eg: California" value="" />
										</div>
									</div>
									<div className="col-sm-6">
										<h6>Postal code</h6>
										<div className={style.form_blk}>
											<input type="text" name="zip_code" id="zip_code" className={style.input} placeholder="eg: BL0 0WY" value="" />
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Address</h6>
										<div className={style.form_blk}>
											<input type="text" name="address" id="address" className={style.input} placeholder="eg: 123 Main Street, California" value="" />
										</div>
									</div>
								</>
							) : signup === "organizer" ? (
								<>
									<div className="col-sm-12">
										<h6>Organization Name</h6>
										<div className={style.form_blk}>
											<input type="text" name="address" id="address" className={style.input} placeholder="eg: Warmongers" value="" />
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Organization Website</h6>
										<div className={style.form_blk}>
											<input type="text" name="address" id="address" className={style.input} placeholder="eg: www.website.com" value="" />
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Mailing Address</h6>
										<div className={style.form_blk}>
											<input type="text" name="address" id="address" className={style.input} placeholder="eg: sample@gmail.com" value="" />
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Preferred Communication Method</h6>
										<div className={style.form_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select</option>
												<option value="email">Email</option>
												<option value="phone">Phone</option>
												<option value="messaging app">Messaging App</option>
											</select>
										</div>
									</div>
									<div className="col-sm-12">
										<h6>Time Zone</h6>
										<div className={style.form_blk}>
											<input type="text" name="address" id="address" className={style.input} placeholder="eg: EEST" value="" />
										</div>
									</div>
								</>
							) : null}
							<div className="col-sm-12">
								<h6 className="require">Password</h6>
								<div className="form_blk pass_blk">
									<input type="password" name="password" id="password" className={style.input} placeholder="eg: PassLogin%7" value="" />
									<i className={style.icon_eye}></i>
								</div>
							</div>
							<div className="col-sm-12">
								<h6 className="require">Confirm Password</h6>
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
