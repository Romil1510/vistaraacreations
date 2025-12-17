import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background */}
      <img
        src={HeroImage}
        alt="Modern Decor"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-10">

          {/* Label */}
          <p className="font-inter text-xs sm:text-sm tracking-[0.35em] text-[#f5e8c8] uppercase mb-5">
            Premium Home Décor
          </p>

          {/* Main heading */}
          <h1 className="font-playfair text-white text-4xl sm:text-5xl lg:text-[67px] leading-tight max-w-3xl">
            Elevate Your Space
            <br />
            with Modern Art & Décor
          </h1>

          {/* Subheading */}
          <p className="font-playfair mt-6 text-sm sm:text-lg text-[#f5f1e6] max-w-xl">
            At Vistaraa Creations, we believe your home should reflect warmth, beauty and meaning. Our handcrafted décor pieces blend traditional artistry with a modern.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5">
            <Link to="/collections">
            <button className="cursor-pointer font-inter px-8 py-3 bg-[#f3f2ef] text-[#262626] text-xs sm:text-sm tracking-[0.25em] uppercase hover:bg-black hover:text-white duration-400 transition-all">
              
              Explore Collections →
            </button></Link>
            

            {/* <button className="font-inter px-8 py-3 bg-transparent border border-white/70 text-white text-xs sm:text-sm tracking-[0.25em] uppercase hover:bg-white/10 transition-all">
              Our Services
            </button> */}
          </div>
        </div>
      </div>


     
    </section>
  );
};

export default Hero;
