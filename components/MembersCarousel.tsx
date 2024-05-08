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




export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <div style={{ backgroundColor: "black" }}>
      <section className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
      id="features">

        <h2 className="funky-title text-brand-yellow font-extrabold text-4xl lg:text-5xl tracking-tight mb-6 md:mb-24 text-center">
              We're ambitious founders with insane backgrounds…
              {/* <span className="bg-neutral text-neutral-content px-2 leading-snug md:px-4 ml-0 md:ml-1.5 leading-relaxed whitespace-nowrap">
                during the day
              </span> */}
            </h2>

        <div className="px-8">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            style={{height: "300px"}}
          >


            
            <SwiperSlide>

              
              text


            </SwiperSlide>


            <SwiperSlide>

            <div className="card card-side bg-base-100 shadow-xl">
                  <figure className="w-1/2 h-auto flex-shrink-0">
                      <img src="https://media.licdn.com/dms/image/C5603AQFa8M6jnObC8w/profile-displayphoto-shrink_800_800/0/1551726036914?e=1720656000&v=beta&t=1PklIqfQX03k6Gt4w0FVNoQ3G5lb6Ec1oE9XAlN9etM" alt="Lukas Koebis" className="h-full w-full object-cover"/>
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title text-xl">Lukas Koebis</h2>
                      <p className="text-base md:font-semibold">Co-founder/CTO of Causal</p>
                      <p className="text-sm">"I bootstrapped a DTC company to $5M in 3 years. Nearly $100M in revenue."</p>

                      <div className="flex justify-end items-end space-x-2 h-2">
                          <img src={AmazonLogo.src} alt="Logo 1" style={{ height: '20px' }} className="object-contain"/>
                          <img src="logo2.png" alt="Logo 2"  style={{ height: '50px' }}className="object-contain"/>
                          <img src="logo3.png" alt="Logo 3"  style={{ height: '50px' }} className="object-contain"/>
                      </div>

                  </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
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