import { FaAmazon, FaFacebook, FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import { MdOutlineEmail } from "react-icons/md";
import logos from "../../assets/logos.png";

const Footer = () => {
  return (
    <footer class="bg-[#2e2e2e] text-[#b5bdbc] py-16 font-['DM_Sans']">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

   
    <div className="text-[#b5bdbc]">
      <img src={logos} className="text-[#b5bdbc] mx-auto sm:mx-auto w-46 sm:w-44"></img>

      <p class="mt-4 text-[14px] leading-relaxed text-[#b5bdbc]">
        Elevating spaces through artful curation  
        and timeless design. Where every piece  
        tells a story.
      </p>

      <div class="flex gap-4 mt-6">
        <a href="https://www.instagram.com/vistaraacreations_?igsh=cjNlNmsycGtvMGMx" class="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center border  border-gray-500 rounded-full hover:border-[#b99953] transition">
          <FaInstagram className="w-7 h-6 sm:w-5 sm:h-4 hover:text-[#b99953] transform-all"/>
        </a>

        <a href="#" class="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#b99953] transition">
          <FaFacebook className="w-7 h-6 sm:w-5 sm:h-4 hover:text-[#b99953] transform-all"/>
        </a>

        
        <a href="https://www.amazon.in/sp?ie=UTF8&seller=A31NJ1JZ6F4C8E&asin=B0G3Q32YYW&ref_=dp_merchant_link" class="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#b99953] transition">
          <FaAmazon className="w-7 h-6 sm:w-5 sm:h-4 hover:text-[#b99953] transform-all"/>
        </a>
      </div>
    </div>


    <div className="flex flex-col sm:mx-7">
      <h3 class="text-[16px] sm:text-sm tracking-[0.15em] uppercase text-[white] sm:mb-3 font-light">
        Quick Links
      </h3>
      <ul class="mt-4 space-y-3 text-[#b5bdbc] font-extralight sm:text-[16px] text-[14px] ">
        <li><a href="/collections" class="hover:text-[#b99953] transition duration-300">Collections</a></li>
        <li><a href="#" class="hover:text-[#b99953] transition duration-300">Services</a></li>
        <li><a href="/about" class="hover:text-[#b99953] transition duration-300">About Us</a></li>
        <li><a href="/contact" class="hover:text-[#b99953] transition duration-300">Contact</a></li>
      </ul>
    </div>

    
    <div className="flex flex-col ">
      <h3 class="text-[16px] sm:text-sm tracking-[0.15em] uppercase text-[white] sm:mb-3 font-light">
        Services
      </h3>
      <ul class="mt-4 space-y-3 text-[#b5bdbc] font-extralight sm:text-[16px] text-[14px]">
        <li><a href="#" class="hover:text-[#b99953] transition duration-300">Shipping & Returns</a></li>
        <li><a href="#" class="hover:text-[#b99953] transition duration-300">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-[#b99953] transition duration-300">Tems of Service</a></li>
        <li><a href="#" class="hover:text-[#b99953] transition duration-300">Care Guide</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-[16px]  sm:text-sm tracking-[0.15em] uppercase text-[white] sm:mb-8  font-light">
        Get in Touch
      </h3>

      <ul class="mt-4 space-y-3 text-[#b5bdbc] font-extralight sm:text-[16px] text-[14px]">
        <div className="flex gap-3">
          <GrLocation  className="text-[#b99953] font-semibold flex justify-center items-center sm:mt-1 mt-1"/>
          <p>
            New Ranip, Ahmedabad
          </p>
        </div>

        

        <div className="flex items-center gap-3">
          <MdOutlineEmail className="text-[#b99953] font-semibold"/>

          <p>info@vistaraacreations.com</p>
        </div>
      </ul>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
    <hr class="border-gray-700" />
  </div>

  <div class="max-w-7xl mx-auto px-6 lg:px-12 mt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
    <p>© 2025 Vistaraa Creations. All rights reserved.</p>

    <div class="flex gap-6 mt-4 sm:mt-0">
      <a href="#" class="hover:text-amber-500 transition">Privacy Policy</a>
      <a href="#" class="hover:text-amber-500 transition">Terms of Service</a>
    </div>
  </div>
</footer>

    
  )
}
export default Footer
