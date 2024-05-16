"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import AmazonLogo from "@/app/logos/amazon.png"

import LukasKoebis from "@/app/foundersProfilePic/lukas.jpeg"
import MaithamMohammed from "@/app/foundersProfilePic/maitham.jpeg"
import RossMurphy from "@/app/foundersProfilePic/ross.jpeg"
import Ilia from "@/app/foundersProfilePic/ilia.jpeg"
import TomCharman from "@/app/foundersProfilePic/tomcharman.jpeg"
import EmmaPetsolari from "@/app/foundersProfilePic/emma.jpeg"
import Mihai from "@/app/foundersProfilePic/mihai.jpeg"
import AndreaGuariglia from "@/app/foundersProfilePic/andrea.jpeg"
import JosefChen from "@/app/foundersProfilePic/josefchen.jpeg"
import BrettCotten from "@/app/foundersProfilePic/brett.png"
import Miraan from "@/app/foundersProfilePic/miraan.jpeg"
import MertDeveci from "@/app/foundersProfilePic/mert.jpeg"
import EduardOravkin from "@/app/foundersProfilePic/edo.jpeg"
import Saurav from "@/app/foundersProfilePic/saurav.jpg"
import Farrah from "@/app/foundersProfilePic/farrah.png"
import SophiaRahman from "@/app/foundersProfilePic/sophia.png"



import InfiniteSliderCompanies from "@/components/InfiniteSliderCompanies"




// const Arrow = ({ photoUrl, name, role, description, worklogo }: { extraStyle: string }) => {
//   return (
//     <svg
//       className={`shrink-0 w-12 fill-neutral-content opacity-70 ${extraStyle}`}
//       viewBox="0 0 138 138"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g>
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
//         />
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
//         />
//       </g>
//     </svg>
//   );
// };
// const Step = ({ emoji, text }: { emoji: string; text: string }) => {
//   return (
//     <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
//       <span className="text-4xl">{emoji}</span>
//       <h3 className="font-bold">{text}</h3>
//     </div>
//   );
// };

interface FounderCardProps {
  name: string;
  role: string;
  workDescription: string;
  profilePicture: any;
  gamesDescription: string;
}

const FounderCard: React.FC<FounderCardProps> = ({name, role, workDescription, profilePicture, gamesDescription }) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${window.innerWidth <= 768 ? 'h-240 flex flex-col' : 'h-64 flex-row'}`}>
      {window.innerWidth <= 768 ? (
          <figure className="w-full h-auto">
            <img src={profilePicture.src} alt={name} className="h-64 w-full object-cover"/>
          </figure>
        ) : (
          <figure className="w-2/5 h-auto flex-shrink-0">
            <img src={profilePicture.src} alt={name} className="h-full w-full object-cover"/>
          </figure>
        )}
      <div className="card-body">
          <h2 className="card-title text-md">{name}</h2>
          <p className="text-base sm:font-semibold">{role}</p>
          <p className="text-sm">
            <b className="text-brand-purple">By day: </b>{workDescription}
          </p>
          <p className="text-sm">
            <b className="text-brand-orange">By night: </b>{gamesDescription}
          </p>

          {/* <div className="flex   justify-end items-end space-x-2 h-2">
              <img src={AmazonLogo.src} alt="Logo 1" style={{ height: '20px' }} className="object-contain"/>
              <img src="logo2.png" alt="Logo 2"  style={{ height: '50px' }}className="object-contain"/>
              <img src="logo3.png" alt="Logo 3"  style={{ height: '50px' }} className="object-contain"/>
          </div> */}

      </div>
    </div>
  )
}

const FounderProfiles = [
  {
    name: "Lukas Koebis",
    role: "Co-Founder/CTO at Causal",
    profilePicture: LukasKoebis,
    workDescription: "Ex-Oxford grad & WhatsApp SWE who raised 20M to build the future of spreadsheet.",
    gamesDescription: "Catan & Poker player"
  },
  {
    name: "Mihai Crasneanu",
    role: "Co-founder/CEO at Beem",
    profilePicture: Mihai,
    workDescription: "Previously 2x exits (6+ digits), now raised ~$8M to build a web3 streaming platform for creators.",
    gamesDescription: "Catan & Poker player"
  },
  {
    name: "Emmanuella Petsolari",
    role: "Co-Founder/CEO at Stealth",
    profilePicture: EmmaPetsolari,
    workDescription: "Built & raised in stealth for a biotech startup while doing her PhD at Cambridge.",
    gamesDescription: "VR/AR games, boardgames"
  },
  {
    name: "Maitham Mohammed",
    role: "Co-Founder/CEO at Material10",
    profilePicture: MaithamMohammed,
    workDescription: "Ex-Amazon who raised ~2M to build games with country-level economies.",
    gamesDescription: "League of Legends & Helldivers player"
  },
  {
    name: "Tom Charman",
    role: "Co-Founder/CEO at Causal",
    profilePicture: TomCharman,
    workDescription: "2x exited founder & investor in 25+ companies, now raised 7-8 figures building synthetic browsing agents",
    gamesDescription: "Secret Hitler & Catan player"
  },
  {
    name: "Farrah Barber",
    role: "Co-Founder/CEO at Science Folk",
    profilePicture: Farrah,
    workDescription: "Ex-McKinsey/Goldman/UN IGF/EF building the new marketplace for STEM talents.",
    gamesDescription: "VR/AR games, boardgames"
  },
  {
    name: "Josef Chen",
    role: "Co-founder at Kaikaku",
    profilePicture: JosefChen,
    workDescription: "2x exited founder, now building robotic restaurants with the Ex-CDO of Subway, Ex-CSO of Mars Inc, & Ex-MD of Caffè Nero.",
    gamesDescription: "Foody, gamer"
  },
  {
    name: "Ross Murphy",
    role: "Co-Founder/CEO at Causal",
    profilePicture: RossMurphy,
    workDescription: "Ex-Oxford/J.P Morgan trader building the Vercel of RAG pipelines",
    gamesDescription: "Poker player, nature enthusiast"
  },
  {
    name: "Andrea Guariglia",
    role: "Co-founder at Angry Monk",
    profilePicture: AndreaGuariglia,
    workDescription: "Ex-Oxford who founded a profitable UK business (now board-member). Now McKinsey consultant planning his next venture.",
    gamesDescription: "Running, poker player"
  },
  {
    name: "Brett Cotten",
    role: "Co-founder/CEO at Arda Biomaterials",
    profilePicture: BrettCotten,
    workDescription: "Ex-Cambridge grad, EF alumnus, book author who raised ~$2M to tranform beer waste into leather.",
    gamesDescription: "Foody, running"
  },
  {
    name: "Sophia Rahman",
    role: "Co-founder/CEO at Stealth",
    profilePicture: SophiaRahman,
    workDescription: "Ex-Cambridge grad who recently raised 7 digits in stealth 🤫.",
    gamesDescription: "Boardgames, foody, running"
  },
  {
    name: "Miraan Tabrez",
    role: "Co-founder at Hypertune",
    profilePicture: Miraan,
    workDescription: "Ex-Improbable & Meta SWE now building the future of feature flag, A/B testing, and app analytics.",
    gamesDescription: "Poker player"
  },
  {
    name: "Mert Deveci",
    role: "Co-founder at GodmodeHQ.com",
    profilePicture: MertDeveci,
    workDescription: "Ex-Morgan Stanley banker who raised $3M to build the sales AI for modern teams",
    gamesDescription: "Poker player"
  },
  // {
  //   name: "Bobby Abdullah",
  //   role: "Co-founder at Angry Monk",
  //   profilePicture: AndreaGuariglia,
  //   workDescription: "Previously an Oxford grad turned founder of a profitable business (now board member). Now McKinsey consultant planning his next venture.",
  //   gamesDescription: "Running, poker player"
  // },
  // {
  //   name: "Nathan Lucaussy",
  //   role: "Co-founder at Angry Monk",
  //   profilePicture: AndreaGuariglia,
  //   workDescription: "Previously an Oxford grad turned founder of a profitable business (now board member). Now McKinsey consultant planning his next venture.",
  //   gamesDescription: "Running, poker player"
  // },
  {
    name: "Eduard Oravkin",
    role: "Co-founder at Medisearch.io",
    profilePicture: EduardOravkin,
    workDescription: "Ex-Amazon/Microsoft ML researcher & building a YC-backed medical search engine.",
    gamesDescription: "Running, poker player"
  },
  {
    name: "Saurav Mitra",
    role: "Co-founder/CTO at SigmaOS",
    profilePicture: Saurav,
    workDescription: "Imperial College & YC alumnus who raised $6M to build the most productive browser.",
    gamesDescription: "Video games, boardgames, poker, foody"
  },
]

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: typeof Swiper, time: number, progress: number) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <div style={{ backgroundColor: "black" }}>
      <section className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
      id="features">

        <h2 className="funky-title text-brand-yellow font-extrabold text-4xl lg:text-5xl tracking-tight mb-6 md:mb-24 text-center">
              We&apos;re ambitious founders with insane backgrounds.
              {/* <span className="bg-neutral text-neutral-content px-2 leading-snug md:px-4 ml-0 md:ml-1.5 leading-relaxed whitespace-nowrap">
                during the day
              </span> */}
            </h2>
              {/* <p className="text-white text-center">Foundeners are individuals that showed evidence of exceptional abilities (e.g. some are ex-Olympic athletes turned founders), a burning passion for tech entrepreneurship, and a kind & sociable soul. We're about quality in quantity. Less than 9% of all applicants make the cut.</p> */}

        <div className="px-8">


          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={window.innerWidth <= 768 ? 1 : 2}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            style={window.innerWidth <= 768 ? {height: "550px"} : {height: "300px"}}
          >
            {FounderProfiles.map((profile, i) => (
              <SwiperSlide key={i}>
                  <FounderCard
                    name={profile.name}
                    role={profile.role}
                    profilePicture={profile.profilePicture}
                    workDescription={profile.workDescription}
                    gamesDescription={profile.gamesDescription}
                  />
                </SwiperSlide>
              ))
            }
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
        <InfiniteSliderCompanies/>
      </section>
      </div>
  );
}