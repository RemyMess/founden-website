"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";
import background from "@/app/backgrounds/background5.png"
import SlackFounden from "@/app/slackFounden.png"
import worldSpinningGif from "@/app/World spinning.gif"
import notificationsIncreasingGif from "@/app/Received animation.gif"
import acquisitionImage from "@/app/acquisitionImage.svg"

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "We are experts ready to answer any questions.",
    path: acquisitionImage.src,
    type: "image",
    description:
      "All members are experts in one niche: some have even been through the pains of scaling it to 8 figures ARR & managing their exit - they'll happily help!",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "We want you to succeed.",
    description:
      "We've all signed the Founden pact - a promise to empower each other to get them closer to success. A win for one of us = a new resource for everybody else.",
    type: "video",
    path: "https://file.notion.so/f/f/8be72a2f-3d52-4dcc-8d3b-c86624d1b2f6/1368f3aa-c2d5-4dbf-a5e9-8fb75afe951a/Untitled.mp4?id=f41568be-35f5-4709-89aa-6c193a561094&table=block&spaceId=8be72a2f-3d52-4dcc-8d3b-c86624d1b2f6&expirationTimestamp=1715716800000&signature=ZkrhCZ3tCqS5cS98uIIyQBaacmNGV-PcIgYIKpuewkc",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "We're hyping & outworking each other.",
    description:
      "24/7 access to an electric Global Private Slack with hungry exceptional founders with unbounded ambition - if you want a kick to push yourself, you'll get it!",
    type: "image",
    path: SlackFounden.src,
    alt: "A computer",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  // {
  //   title: "We share our networks with each other.",
  //   type: "image",
  //   path: notificationsIncreasingGif,
  //   description:
  //     "Our cumulative network is massive: angels, VC funds, talents, Fortune 500... - you call it! If we see the potential of a win-win relationship to happen, we won't hesitate to warm-intro you!",
  //   svg: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-6 h-6"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
  //       />
  //     </svg>
  //   ),
  // }
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary-light overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        // controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (

    
    <div >
      <section
        className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
        id="features"
      >
        <div className="px-8">
          <h2 className="funky-title text-brand-purple font-extrabold text-4xl lg:text-5xl tracking-tight mb-6 md:mb-24">
            We work harder together
            <div><b>during the day...</b></div>
            {/* <span className="bg-neutral text-neutral-content px-2 leading-snug md:px-4 ml-0 md:ml-1.5 leading-relaxed whitespace-nowrap">
              during the day
            </span> */}
          </h2>

  {/* 
          <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
            <h2 className="funky-title max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
              */}



          <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
              <ul className="w-full">
                {features.map((feature, i) => (
                  <Item
                    key={feature.title}
                    index={i}
                    feature={feature}
                    isOpen={featureSelected === i}
                    setFeatureSelected={() => setFeatureSelected(i)}
                  />
                ))}
              </ul>

              <Media feature={features[featureSelected]} key={featureSelected} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAccordion;
