import AboutImage from "../assets/about-img1.jpg"
import AmazonStoreSection from "../components/AmazonStoreSection/AmazonStoreSection"
const About = () => {
  return (
     <section className="bg-[#f5f3ed] py-20 font-['DM_Sans'] pt-30 sm:h-[200vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 mb-10 items-center">

        {/* LEFT TEXT */}
        <div>
          {/* Section Label */}
          <p className="text-[#b99953] text-[14px] font-medium tracking-[0.25em] uppercase mb-4">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-medium text-neutral-900 leading-tight">
            Where Art Meets<br />Living
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-[#7c7367] text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
            Vistaraa Creations began with a simple vision — to bring meaningful,
            handcrafted décor into modern homes. What started as a small passion
            for creating artistic resin pieces slowly grew into a brand built on
            craftsmanship, intention, and elegance.
            <br /><br />
            Our goal has always been to design décor that adds warmth, beauty and
            a sense of connection to the spaces we live in. Every piece we create
            is thoughtfully designed, hand-detailed, and made with care.
            
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={AboutImage}
            alt="Vistaraa Creations Studio"
            className=" shadow-[0_20px_45px_rgba(15,23,42,0.12)] w-full object-cover"
          />

          {/* Decorative border line (like sample) */}
          <div className="absolute -bottom-6 -left-6 h-[85%] w-[85%] border border-[#e1d9cf] rounded-xl -z-10 hidden lg:block"></div>
        </div>

      </div>
      <AmazonStoreSection/>
    </section>
  )
}


export default About
