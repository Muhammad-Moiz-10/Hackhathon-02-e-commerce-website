import Image from "next/image";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero"
import Branddifferent from "./components/home/Branddifferent"
import Newceramics from "./components/home/Newceramics";
import Popularproducts from "./components/home/Popularproducts";

export default function Home() {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <Branddifferent/>
         <Newceramics/>
         <Popularproducts/>
    </div>
  );
}
