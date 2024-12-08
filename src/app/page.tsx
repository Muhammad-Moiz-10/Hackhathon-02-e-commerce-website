import Image from "next/image";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero"
import Branddifferent from "./components/home/Branddifferent"

export default function Home() {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <Branddifferent/>
    </div>
  );
}
