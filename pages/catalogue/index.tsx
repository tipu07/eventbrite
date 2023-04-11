import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "@/components/images"
import Filters from "./filters"
import MainSearch from "@/components/mainSearch"

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
	{
		id: 4,
		title: "White Keep Assault",
		link: "?",
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 5,
		title: "Dota 2 Tournament",
		link: "?",
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 6,
		title: "Winners on ESL Pro",
		link: "?",
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 7,
		title: "White Keep Assault",
		link: "?",
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 8,
		title: "Dota 2 Tournament",
		link: "?",
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
]

const Catalogue = () => {
	return (
		<>
			<Header pageTitle="Catalogue" />
			<SubBanner title="Catalogue" />
			<section id={style.catalogue}>
				<div className={style.contain}>
					<div className={style.top_head}>
						<div className={style.txt}>
							<h3>Search Catalogues</h3>
							<p className="opacity-50">Showing 1-30 of 33,013 search results.</p>
						</div>
						<div className={style.btn_blk}>
							<select name="" id="" className={style.input}>
								<option value="">Sort by</option>
								<option value="">Newest Listings</option>
								<option value="">Oldest Listings</option>
								<option value="">Closest</option>
							</select>
						</div>
					</div>
					<div className="row">
						{CATEGORIES.map((data) => {
							return (
								<div className="col-lg-4" key={data.id}>
									<CategoryCard {...data} />
								</div>
							)
						})}
					</div>
					{/* <div className={`${style.main_row} row`}>
						<div className={`${style.col} ${style.col1}`}></div>
						<div className={`${style.col} ${style.col2}`}>
							<Filters />
						</div>
					</div> */}
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Catalogue
