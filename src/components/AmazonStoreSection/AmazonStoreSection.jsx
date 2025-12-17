// src/components/AmazonStoreSection.jsx

const AmazonStoreSection = () => {
  return (
    <section className="bg-[#fcfaf7] py-16 sm:py-20 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Top label */}
        <p className="text-[11px] sm:text-[14px] font-medium tracking-[0.25em] uppercase text-[#b99953] text-center">
          Online Store
        </p>

        {/* Heading */}
        <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-center text-neutral-900">
          Also Available on Amazon
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center text-sm sm:text-base text-[#7d7266] sm:max-w-2xl mx-auto leading-relaxed">
          Prefer shopping on Amazon? Explore our curated décor collection with
          fast delivery, secure checkout and trusted reviews.
        </p>

        {/* Content */}
        <div className="mt-10 sm:mt-14 grid gap-10 lg:gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          {/* Left side – text & button */}
          <div>
            <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-neutral-900">
              Shop Vistaraa Creations on Amazon
            </h3>

            <p className="mt-3 text-sm sm:text-[15px] text-[#7d7266] leading-relaxed">
              Discover our bestselling home décor accents, handcrafted pieces,
              and styling essentials directly on Amazon. Perfect for gifting,
              quick purchases and easy returns.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-[#5f5448]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b99953]" />
                <span>Prime-eligible products for faster delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b99953]" />
                <span>Trusted Amazon checkout & buyer protection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#b99953]" />
                <span>Verified reviews to help you choose with confidence.</span>
              </li>
            </ul>

            {/* Button */}
            <div className="mt-7">
              <a
                href="https://www.amazon.in/VISTARAA-CREATIONS-Handcrafted-Showpiece-Spiritual/dp/B0G3Q32YYW/ref=sr_1_1?crid=37EJKBVZCHKXD&dib=eyJ2IjoiMSJ9.jQ1YA1qT__AGXEwJl0HOhGjazCxTsTPOANoLThm-D9A.YB2QI0_lRGfNPKig8lDL7Id2A0u234qDI9biLOR1Gto&dib_tag=se&keywords=vistaraa%2Bcreations&qid=1764947942&sprefix=vistaraa%2Bcreation%2Caps%2C210&sr=8-1&th=1" // 🔹 put your real Amazon store URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-900 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-all duration-300"
              >
                Visit Amazon Store
                <span className="text-lg leading-none">↗</span>
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AmazonStoreSection;
