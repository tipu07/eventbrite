import Header from "@/components/header"
import Banner from "./banner"
import Footer from "@/components/footer"
import Contact from "./contact"
import Report from "./report"
import Categories from "./categories"
import Matches from "./matches"

const Home = () => {
	return (
		<>
			<Header />
			<Banner />
			<Categories />
			<Report />
			<Matches />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
