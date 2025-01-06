import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Branddifferent from "../components/home/Branddifferent";
import Newceramics from "../components/home/Newceramics";
import Popularproducts from "../components/home/Popularproducts";
import Signup from "@/components/home/Signup";
import Features from "@/components/home/Features";
import Footer from "../components/home/Footer"


export default function Home() {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <Branddifferent/>
         <Newceramics/>
         <Popularproducts/>
         <Signup/>
         <Features/>
         <Footer/>
    </div>
  );
}
