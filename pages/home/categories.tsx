import React from "react"
import style from "@/styles/scss/app.module.scss"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "@/components/images"

const CATEGORIES = [
	{
		id: 1,
		title: "White Keep Assault",
		link: "?",
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 2,
		title: "Dota 2 Tournament",
		link: "?",
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 3,
		title: "Winners on ESL Pro",
		link: "?",
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
]

const Categories = () => {
	return (
		<>
			<section id={style.op_categories}>
				<div className={style.contain}>
					<div className={style.content + " text-center"}>
						<h5 className={style.subheading}>OP Gamers</h5>
						<h2>OP Categories just for Gamers</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vitae architecto ex perspiciatis maxime nam ducimus tenetur dignissimos reprehenderit obcaecati minus commodi, corrupti nesciunt debitis earum omnis harum pariatur et.</p>
					</div>
				</div>
				<div className={style.block_row}>
					{CATEGORIES.map((data) => {
						return (
							<div className={style.col} key={data.id}>
								<CategoryCard {...data} />
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}

export default Categories
