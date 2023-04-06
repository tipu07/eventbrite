import Header from "@/components/header"
import Banner from "./banner"
import Footer from "@/components/footer"
import Contact from "./contact"
import Report from "./report"
import Specialities from "./specialities"

const Home = () => {
	return (
		<>
			<Header />
			<Banner />
			<Specialities />
			<Report />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
