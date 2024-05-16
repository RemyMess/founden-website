import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";
import { useRouter } from 'next/router';
import background from "@/app/backgrounds/background.jpg"
import FoundenLogoBlack from "@/app/full-logo-white.png"
import ButtonGradient from "./ButtonGradient";
import ButtonLead from "./ButtonLead";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <div style={{ backgroundImage: `url(${background.src})` }}>

      <section className="overflow-hidden" id="pricing">
        <div className="py-24 px-8 max-w-5xl mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="font-bold text-brand-orange text-3xl lg:text-5xl tracking-tight funky-title">
              Become one of us!
            </h2>

            <p className="font-medium text-primary mb-8 text-white pt-10">            
                Less than 9% of all applicants make the cut, but you might!
            </p>
          </div>

          <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 text-white ">
            {config.stripe.plans.map((plan) => (
              <div key={plan.priceId} className="relative w-full max-w-lg">
                {/* {plan.isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span
                      className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                    >
                      POPULAR
                    </span>
                  </div>
                )} */}

                {plan.isFeatured && (
                  <div
                    className={`absolute -inset-[1px] rounded-[9px] z-10 ${plan.name === "Pioneer" ? 'bg-brand-yellow' : 'bg-brand-orange'}`}
                  ></div>
                )}

                <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-black p-8 rounded-lg">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center">
                        <img src={FoundenLogoBlack.src} style={{width: "140px"}}/>
                        <p className={`text-lg lg:text-xl font-bold pl-3 funky-title ${plan.name === "Pioneer" ? 'text-brand-yellow' : 'text-brand-orange'}`}>
                         {plan.name}</p>
                      </div>
                      {plan.description && (
                        <p className="text-base-content/80 mt-2 text-white">
                          {plan.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* <div className="flex gap-2">
                    {plan.priceAnchor && (
                      <div className="flex flex-col justify-end mb-[4px] text-lg ">
                        <p className="relative">
                          <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                          <span className="text-base-content/80">
                            ${plan.priceAnchor}
                          </span>
                        </p>
                      </div>
                    )}
                    <p className={`text-5xl tracking-tight font-extrabold`}>
                      ${plan.price}
                    </p>
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-xs text-base-content/60 uppercase font-semibold">
                        USD
                      </p>
                    </div>
                  </div> */}
                  {plan.features && (
                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          {/* CHECK SIGN:
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-[18px] h-[18px] opacity-80 shrink-0"
                          > 
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg> */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke-width="2"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                          </svg>

                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-[18px] h-[18px] opacity-80 shrink-0">
                            <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke-width="2"/>
                          </svg> */}


                          <span>{feature.name} </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex justify-center">
                    <ButtonLead text={"Hang out with us"}/>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
