import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout"
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FeaturesAccordionRight from "@/components/FeaturesAccordionRight";
import FeaturesListicle from "@/components/FeaturesListicle";
import MembersCarousel from "@/components/MembersCarousel";


// import InfiniteSliderCompanies from "@/components/InfiniteSliderCompanies"




import '@/../tailwindcss';

import background from "../app/background.jpg"


export default function Home() {
  return (
    <>
      <div style ={ { backgroundImage: "url('https://uploads-ssl.webflow.com/64dcfeb471908b1473c6c56e/64dcfeb471908b1473c6c5d2_main-banner-bg.jpg')" } }>
    
      {/* // style={{
      //     backgroundImage: `url(${background})`,
      //     backgroundSize: "cover"
      //   }}>  */}
        <Header />
        <Hero />
      </div>
      <main>
        <MembersCarousel/>
        <FeaturesAccordion/>
        <FeaturesAccordionRight/>
        <FeaturesListicle/>
        
        <Pricing />
        {/* <WithWithout/> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}