"use client"

// import '../app/customs.css';
// import Slider from 'react-infinite-logo-slider';
import { motion } from 'framer-motion';
import AmazonLogo from "@/app/logos/amazon.png"
import AppleLogo from "@/app/logos/apple.png"
import BerkeleyLogo from "@/app/logos/berkeley.png"
import CambridgeLogo from "@/app/logos/cambridge.png"
import DeepmindLogo from "@/app/logos/deepmind.png"
import GoogleLogo from "@/app/logos/google.png"
import HarvardLogo from "@/app/logos/harvard.png"
import MicrosoftLogo from "@/app/logos/microsoft.png"
import OxfordLogo from "@/app/logos/oxford.png"
import RevolutLogo from "@/app/logos/revolut.png"
import NasaLogo from "@/app/logos/sana.webp"
import SpotifyLogo from "@/app/logos/spotify.png"
import StanfordLogo from "@/app/logos/stanford.png"
import UclLogo from "@/app/logos/ucl.jpg"
import WaymoLogo from "@/app/logos/waymo.png"
import OpenaiLogo from "@/app/logos/openai.png"
import YcombinatorLogo from "@/app/logos/y-combinator.png"
import YoutubeLogo from "@/app/logos/youtube.png"



const slides = [
    { src: AmazonLogo.src, alt: "Amazon" },
    { src: AppleLogo.src, alt: "Apple" },
    { src: BerkeleyLogo.src, alt: "Berkeley" },
    { src: CambridgeLogo.src, alt: "CambridgeLogo" },
    // { src: DeepmindLogo.src, alt: "DeepmindLogo" },
    { src: GoogleLogo.src, alt: "GoogleLogo" },
    // { src: HarvardLogo.src, alt: "HarvardLogo" },
    { src: MicrosoftLogo.src, alt: "MicrosoftLogo" },
    { src: OxfordLogo.src, alt: "OxfordLogo" },
    { src: RevolutLogo.src, alt: "RevolutLogo" },
    { src: YcombinatorLogo.src, alt: "YcombinatorLogo" },
    { src: NasaLogo.src, alt: "NasaLogo" },
    { src: SpotifyLogo.src, alt: "SpotifyLogo" },
    { src: StanfordLogo.src, alt: "StanfordLogo" },
    { src: UclLogo.src, alt: "UclLogo" },
    { src: OpenaiLogo.src, alt: "OpenaiLogo" },
    { src: WaymoLogo.src, alt: "WaymoLogo" },
    { src: YoutubeLogo.src, alt: "YoutubeLogo" },
]
 
const InfiniteSliderCompanies = () => {
    const duplicatedSlides = [...slides, ...slides, ... slides, ...slides];    

  return (
        <div className="justify-center overflow-hidden" style={{background: "black", height: "100%"}}>
            <p className="align-content text-center text-white pt-2">Previously/currently at</p>
            <div className="flex justify-center items-center h-full" >
                <div className="relative h-full overflow-hidden py-12 mx-auto" style={{ width: "100%" }}>
                    <motion.div
                        className="flex z-20"
                        animate={{
                            x: ['0%', '-1000%'],
                            transition: {
                                ease: 'linear',
                                duration: 50,
                                repeat: Infinity,
                            }
                        }}
                    >
                        {duplicatedSlides.map((slide, index) => (
                            <div key={index} className="flex-shrink-0">
                                <div className="flex items-center justify-center">
                                    <img src={slide.src} alt={slide.alt} style={{height: "50px", marginRight: "100px"}}/>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
  );
};

export default InfiniteSliderCompanies;
