import Navpanel from "@/components/about/Navpanel";
import Navbar from "@/components/about/Navbar";
import Pageheaders from "@/components/about/Pageheaders";
import Features from "@/components/about/Features";
import Features2 from "@/components/about/Features2";
import Branddifferentabout from "@/components/about/Branddifferentabout"
import Signup from "@/components/home/Signup";
import Footer from "@/components/about/Footer";

export default function about() {
    return (
      <div>
           <Navpanel/>
           <Navbar/>
           <Pageheaders/>
           <Features/>
           <Features2/>
           <Branddifferentabout/>
           <Signup/>
           <Footer/>
      </div>
    );
  }
  