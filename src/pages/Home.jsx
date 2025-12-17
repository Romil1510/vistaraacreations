import AmazonStoreSection from "../components/AmazonStoreSection/AmazonStoreSection"
import BestSellers from "../components/BestSeller/BestSellers"
import Hero from "../components/Hero/Hero"
import Information from "../components/Information/Information"
import Special from "../components/SpecialInfo/Special"



const Home = () => {
  return (
    <div>
     <Hero/>
     <BestSellers/>
     <Information/>
     <Special/> 
     <AmazonStoreSection/>
    
    </div>
  )
}

export default Home
