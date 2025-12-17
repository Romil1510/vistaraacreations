// src/components/WhatMakesItSpecial.jsx
import corner from "../../assets/corner.png";
import gift from "../../assets/gift.png";
import positive from "../../assets/positive.png";
import strength from "../../assets/strength.png";

const features = [
  {
    id: 1,
    title: "Vastu-Friendly Positive Energy",
    description:
      "Brings peace, harmony and good luck to your home — perfect for creating a balanced, uplifting space.",
    image: positive, // change to your image path
  },
  {
    id: 2,
    title: "Symbol of Strength & Prosperity",
    description:
      "The elephant represents wisdom, stability and long-term success, making it a meaningful décor piece.",
    image: strength,
  },
  {
    id: 3,
    title: "Makes Every Corner Feel Beautiful",
    description:
      "Handcrafted detailing adds warmth and elegance, enhancing living rooms, desks, shelves or entryways.",
    image: corner,
  },
  {
    id: 4,
    title: "A Gift Filled With Good Wishes",
    description:
      "A thoughtful present that carries blessings, positivity and emotional warmth for your loved ones.",
    image: gift,
  },
];

const Special = () => {
  return (
    <section className="bg-[#f5f3ed] py-20 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section heading */}
        <p className="sm:text-[14px] text-[10px] font-medium tracking-[0.28em] uppercase text-[#c19b53] text-center">
          Thoughtful Design
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-center text-neutral-900">
          What Makes It Special
        </h2>

        <p className="mt-4 text-center sm:max-w-2xl mx-auto text-sm sm:text-base text-[#7d7266] leading-relaxed">
          Every piece is crafted with intention — blending positive energy,
          meaningful symbolism and timeless aesthetics for your home.
        </p>

        {/* Features grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:gap-10 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col sm:flex-row gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-[#fcfaf7] shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)] hover:bg-white transition-all duration-300"
            >
              {/* Image */}
              <div className="sm:w-[40%] overflow-hidden rounded-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover aspect-4/4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="sm:flex-1">
                <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-5 text-sm sm:text-[15px] text-[#7d7266] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
