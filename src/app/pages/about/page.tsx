import Navpanel from "@/components/about/Navpanel";
import Navbar from "@/components/about/Navbar"
import Pageheaders from "@/components/about/Pageheaders"
import Features from "@/components/about/Features"
import Features2 from "@/components/about/Features2"

export default function about() {
    return (
      <div>
           <Navpanel/>
           <Navbar/>
           <Pageheaders/>
           <Features/>
           <Features2/>
      </div>
    );
  }
  