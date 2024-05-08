"use client"

// import '../app/customs.css';
import Slider from 'react-infinite-logo-slider';

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

const InfiniteSliderCompanies = ({
}: {
}) => {
  return (
    <div className="flex justify-center items-center h-full" style={{background: "black", height: "100px"}} >
        <Slider
              width="200px"
              duration={20}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={'#fff'}
          >
              <Slider.Slide>
                  <img src={AmazonLogo.src} alt="any" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={AppleLogo.src} alt="any2" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={BerkeleyLogo.src} alt="any3" className='w-36' />
              </Slider.Slide>              
              <Slider.Slide>
                  <img src={DeepmindLogo.src} alt="any4" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={CambridgeLogo.src} alt="any4" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={GoogleLogo.src} alt="any5" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={HarvardLogo.src} alt="any6" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={MicrosoftLogo.src} alt="any7" className='w-36' />
              </Slider.Slide>              
              <Slider.Slide>
                  <img src={OxfordLogo.src} alt="any8" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={RevolutLogo.src} alt="any9" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={NasaLogo.src} alt="any10" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={SpotifyLogo.src} alt="any11" className='w-36' />
              </Slider.Slide>              
              <Slider.Slide>
                  <img src={StanfordLogo.src} alt="any12" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={WaymoLogo.src} alt="any14" className='w-36' />
              </Slider.Slide>
              <Slider.Slide>
                  <img src={OpenaiLogo.src} alt="any15" className='w-36' />
              </Slider.Slide>              
              <Slider.Slide>
                  <img src={YcombinatorLogo.src} alt="any16" className='w-36' />
              </Slider.Slide>              
              <Slider.Slide>
                  <img src={YoutubeLogo.src} alt="any17" className='w-36' />
              </Slider.Slide>
          </Slider>
    </div>
  );
};

export default InfiniteSliderCompanies;
