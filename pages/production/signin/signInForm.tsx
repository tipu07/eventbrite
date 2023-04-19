import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const SignInForm = () => {
	return (
		<>
			<div className={style.logon_form}>
				<form action="" method="POST">
					<div className={style.log_blk}>
						<div className={style.txt}>
							<h2>Sign in</h2>
							<p>Please login to see this page.</p>
						</div>
						<div className={style.form_row + " row"}>
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
						</div>
						<div className={style.btn_blk + " " + style.form_blk + " mt-5"}>
							<button type="submit" className={style.site_btn + " " + style.block}>
								Sign in
							</button>
						</div>
						<div className={style.forgot}>
							Forget password? <Link href="/production/forgot">Reset now</Link>
						</div>
						<div className={style.account + " mt-2"}>
							Don’t have an account? <Link href="/production/signup">Create an account</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignInForm
