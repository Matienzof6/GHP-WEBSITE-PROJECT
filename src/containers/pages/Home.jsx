import CTA from "components/home/CTA"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <CTA/>
            <Footer/>
        </Layout>
    )
}


export default Home