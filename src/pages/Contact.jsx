// src/pages/Contact.jsx

const Contact = () => {
  return (
    <section className="bg-[#fcfaf7] min-h-screen font-['DM_Sans'] pt-20">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Label */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#b99953] mb-3">
          Contact
        </p>

        {/* Heading */}
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-tight">
          Let’s Stay Connected
        </h1>

        {/* Small text */}
        <p className="mt-4 text-sm sm:text-base text-[#7d7266] leading-relaxed">
          Have a question about our décor pieces, collaborations or orders?
          Reach out by email or explore our collection directly on Amazon.
        </p>

        {/* Email block */}
        <div className="mt-10 inline-flex flex-col items-center gap-2">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#9b8b76]">
            Email
          </span>
          <a
            href="mailto:info@vistaraacreations.com" // ✏️ change to your real email
            className="text-base sm:text-lg font-medium text-neutral-900 underline decoration-[#c1a35b]/60 underline-offset-4 hover:text-[#c1a35b] transition-colors"
          >
            info@vistaraacreations.com
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#e0d7cb]" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#b0a597]">
            or
          </span>
          <span className="h-px w-10 bg-[#e0d7cb]" />
        </div>

        {/* Amazon info */}
        <p className="text-sm sm:text-base text-[#7d7266]">
          Prefer shopping on Amazon? You can find our handcrafted décor there too.
        </p>

        <a
          href="https://www.amazon.in/VISTARAA-CREATIONS-Handcrafted-Showpiece-Spiritual/dp/B0G3Q32YYW/ref=sr_1_1?crid=37EJKBVZCHKXD&dib=eyJ2IjoiMSJ9.jQ1YA1qT__AGXEwJl0HOhGjazCxTsTPOANoLThm-D9A.YB2QI0_lRGfNPKig8lDL7Id2A0u234qDI9biLOR1Gto&dib_tag=se&keywords=vistaraa%2Bcreations&qid=1764947942&sprefix=vistaraa%2Bcreation%2Caps%2C210&sr=8-1&th=1" // ✏️ put your Amazon store URL
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-8 py-3 border border-neutral-900 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase bg-neutral-900 text-white hover:bg-transparent hover:text-neutral-900 transition-all duration-300"
        >
          Visit Our Amazon Store
          <span className="text-lg leading-none">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
