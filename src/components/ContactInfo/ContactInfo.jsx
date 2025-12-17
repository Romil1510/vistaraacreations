// src/components/ContactInfo.jsx

const ContactInfo = () => {
  return (
    <section className="bg-[#f5f3ed] py-20 font-['DM_Sans']">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <p className="text-[11px] tracking-[0.28em] uppercase text-[#c19b53] text-center">
          Get in Touch
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-4xl font-medium text-center text-neutral-900">
          Contact Information
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base text-[#7d7266] sm:max-w-2xl mx-auto leading-relaxed">
          Have a question about our décor pieces, styling services or custom orders?
          Reach out using the details below and we’ll be happy to assist you.
        </p>

        {/* Info cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Phone */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-neutral-900">
              Call / WhatsApp
            </h3>
            <p className="mt-2 text-sm text-[#7d7266]">
              For quick queries, order updates and styling assistance.
            </p>
            <p className="mt-4 text-sm font-medium text-neutral-900">
              +91 98765 43210
            </p>
          </div>

          {/* Email */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-neutral-900">
              Email
            </h3>
            <p className="mt-2 text-sm text-[#7d7266]">
              Share your requirements, bulk orders or collaboration ideas.
            </p>
            <p className="mt-4 text-sm font-medium text-neutral-900 break-all">
              hello@yourbrandname.com
            </p>
          </div>

          {/* Studio / Address */}
          <div className="bg-white/80 rounded-2xl p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-neutral-900">
              Studio Address
            </h3>
            <p className="mt-2 text-sm text-[#7d7266]">
              Visit us for in-person styling consultations and product viewing.
            </p>
            <p className="mt-4 text-sm font-medium text-neutral-900">
              21, Serenity Lane,<br />
              West Park, Ahmedabad, Gujarat 380001
            </p>
          </div>
        </div>

        {/* Extra row: timings / social (optional) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-white/60 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-neutral-900">
              Customer Support Hours
            </h4>
            <p className="mt-2 text-sm text-[#7d7266]">
              Monday – Saturday: 10:00 AM – 7:00 PM<br />
              Sunday: Closed (online queries only)
            </p>
          </div>

          <div className="bg-white/60 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-neutral-900">
              Social Media
            </h4>
            <p className="mt-2 text-sm text-[#7d7266]">
              Follow us for décor tips, styling ideas and new launches.
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-900">
              Instagram: @yourbrand<br />
              Pinterest: @yourbrand
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
