import { LuBrush, LuLayoutGrid, LuLeaf } from "react-icons/lu";

import { LuCloud } from "react-icons/lu";


import experties from "../../assets/experties.jpeg";

const Information = () => {
  return (
    <section class="bg-[#fcfaf7] sm:mt-10 sm:mb-10 py-20 font-['DM_Sans'] ">
  <div class="max-w-7xl sm:max-w-8xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    <div class="overflow-hidden">
      <img 
  src={experties} 
  alt="Interior Styling"
  className="w-full h-auto  object-cover transition-all duration-500 hover:scale-105"
/>

    </div>

    <div>
      <p class="text-[15px] tracking-[0.25em] font-extralight uppercase text-[#cca64e]">
        Crafted Elegance for Your Home
      </p>

      <h2 class="mt-3 font-['Playfair_Display'] text-3xl md:text-[46px]  text-neutral-900 leading-tight">
        Beautiful Décor for Every Corner
      </h2>

      <p class="mt-5 text-[#7d7266] text-base max-w-xl leading-relaxed ">
        Discover our thoughtfully curated collections that bring
together the finest elements of design, craftsmanship,
and aesthetic appeal.
      </p>

    
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 flex items-center justify-center bg-[#f3e8d5] text-[#c89d58] rounded-full">
            {/* <i class="fa-solid fa-palette text-xl"></i> */}
            <LuLeaf className="w-12 h-5"/>
          </div>
          <div>
            <h4 class="font-['Playfair_Display'] text-[18px] font-semibold  text-neutral-900">
              Elegance in Every Corner
            </h4>
            <p class="text-sm  text-[#7d7266] mt-1">
              A handcrafted elephant figurine that adds a subtle touch of sophistication to any space. Perfect for shelves, consoles and work desks.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 flex items-center justify-center bg-[#f3e8d5] text-[#c89d58] rounded-full">
           <LuBrush className="w-12 h-5"/>
          </div>
          <div>
            <h4 class="font-['Playfair_Display'] text-[18px] font-semibold text-neutral-900">
              A Touch of Taditional Art
            </h4>
            <p class="text-sm text-[#7d7266] mt-1">
              Designed to blend beautifully with clean, minimal décor. Its detailed carving brings warmth and character to your interiors.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 flex items-center justify-center bg-[#f3e8d5] text-[#c89d58] rounded-full">
            <LuCloud className="w-12 h-5"/>
          </div>
          <div>
            <h4 class="font-['Playfair_Display'] text-[18px] font-semibold text-neutral-900">
              Calm, Warm & Beautiful
            </h4>
            <p class="text-sm text-[#7d7266] mt-1">
              Create a serene atmosphere with handcrafted décor that adds charm without overpowering your room’s aesthetic.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-5">
          <div class="w-12 h-12 flex items-center justify-center bg-[#f3e8d5] text-[#c89d58] rounded-full">
            <LuLayoutGrid className="w-12 h-5 rounded-full" />
          </div>
          <div>
            <h4 class="font-['Playfair_Display'] text-[18px] font-semibold text-neutral-900">
              Perfect for Every Setting
            </h4>
            <p class="text-sm text-[#7d7266] mt-1">
              Whether it’s your dining area, entryway or side table, this piece enhances the look of any surface with timeless elegance.
            </p>
          </div>
        </div>

      </div>

      {/* <button
        class="mt-10 px-12 py-4 bg-[#2e2e2e] text-white text-[14px] tracking-[0.15em]  
        transition-all duration-300 hover:bg-white hover:text-black border hover:scale-[1.02] mx-16 sm:mx-62 md:mx-0"
      >
        Explore Services
      </button> */}

    </div>
  </div>
</section>

  )
}

export default Information
