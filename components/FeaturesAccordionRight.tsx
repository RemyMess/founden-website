"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

import background from "@/app/backgrounds/background3.png"
import globalFoundenEvents from "@/app/worldwide-founden.svg"
import retreatFoundenImage from "@/app/Retreat Images.svg"

import discordImageFounden from "@/app/discord-gaming.svg"

const equinoxVideoPath = "https://founden-website-assets.s3.eu-north-1.amazonaws.com/equinox-out-video.webm"
const pokerVideoPath = "https://founden-website-assets.s3.eu-north-1.amazonaws.com/pokerFounden.webm"

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
    title: "We meet, have food, and workout IRL",
    description:
      "Restaurants, VR games, comedy, pubs - anything any of us fancy trying in the city, we give it a go!",
    type: "video",
    format: "video/webm",
    path: equinoxVideoPath,
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
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "We hang out & play boardgames IRL",
    description:
      "The dominating majority of us are suckers for boardgames & poker. We play both online & IRL, wherever Foundeners are!",
    type: "video",
    format: "video/webm",
    path: pokerVideoPath,
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
  {
    title: "We play video games online",
    description:
      "Want to relax your mind & play a video game (e.g League of Legends) with likeminded fellows? We got you 24/7. Jump in our online gaming room (aka Discord server) and you'll find us recharging.",
    type: "image",
    // path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    // path: foodAndGymVideo,
    path: discordImageFounden.src,
    alt: "recharge",
    // format: "video/webm",
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
    title: "We retreat from tech to nature",
    description:
      "Last Summer, we've rented a huge chalet in the French Alpes for 1 week. On the menu: freshly cooked food, hikes in the mountains, alone time in the morning, meditation, & boardgames!",
    path: retreatFoundenImage,
    type: "image",
    alt: "retreat image",
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
        <span className={`duration-100 ${isOpen ? "text-base-content-primary-dark-open" : "text-base-content-primary-dark-closed"}`}>
          {svg}
        </span>
        <span
          className={`flex-1 ${
            isOpen ? "text-base-content-primary-dark-open" : "text-base-content-primary-dark-closed"}`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary-dark overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-left">{description}</div>
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
        className={style + "rounded-full object-cover overflow-hidden"}
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
        className={`${style} object-cover object-center w-full h-full object-contain`}
        width={size.width}
        height={size.height}
      />
    );
  } else if (type == "hacking_image"){
    return (
      <Image
      src={path}
      alt={alt}
      className={`${style} object-cover object-center w-full h-full object-contain overflow-visible p-10`}
      width={size.width}
      height={size.height}
    />
  );
  } else
    {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordionRight = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (

    <div style={{ backgroundImage: `url(${background.src})` }}>
        <section
        className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
        id="features"
        >
            <div className="px-8 text-right">
                <h2 className="funky-title text-brand-orange font-extrabold text-4xl lg:text-5xl tracking-tight mb-6 md:mb-24">
                ... and <u>play harder</u> together
                <div><b>during the night.</b></div>
                </h2>
                <div className=" flex flex-col md:flex-row-reverse gap-12 md:gap-24">
                    <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
                        <Media feature={features[featureSelected]} key={featureSelected} />
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
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default FeaturesAccordionRight;
