// src/components/BestSellers.jsx
import { Link } from "react-router-dom";
import { products } from "../../data/Products";

const BestSellers = () => {
  return (
    <section className="bg-[#f5f3ed] py-20 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 sm:mt-16 sm:mb-8">
        {/* Top heading */}
        <p className="sm:text-[14px] text-[10px] font-medium tracking-[0.25em] uppercase text-[#cca64e] text-center">
          Most Loved
        </p>

        <h2 className="mt-2 sm:mt-4 font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-center text-neutral-900">
          Collections
        </h2>

        <p className="mt-4 text-center sm:mt-5 sm:max-w-xl mx-auto text-sm sm:text-base text-[#7d7266] leading-snug">
          Discover the pieces our clients love most – timeless designs that
          transform any space.
        </p>

        {/* Product cards */}
        <div className="mt-12">

 {/* MOBILE Layout – 2 cards per row */}
<div className="grid grid-cols-2 gap-6 sm:hidden">
  {products.map((product) => (
    <Link
      key={product.id}
      to={`/products/${product.id}`}
      className="group bg-[#f0ece4] rounded-xl overflow-hidden shadow-sm"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-4/5 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="p-3 text-center">
        <p className="text-[9px] tracking-[0.18em] uppercase text-[#9b8b76]">
          {product.category}
        </p>

        <h3 className="mt-1 font-['Playfair_Display'] text-sm w-full text-neutral-900">
          {product.name1}
        </h3>

        {/* <p className="mt-1 text-[13px] text-[#7d7266]">Rs.{product.price}</p> */}
      </div>
    </Link>
  ))}
</div>


  {/* DESKTOP Layout – same as your current one */}
  <div className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
    {products.map((product) => (
      <Link
        key={product.id}
        to={`/products/${product.id}`}
        className="group flex flex-col"
      >
        <div className="overflow-hidden shadow-xl rounded-b-sm bg-[#f0ece4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-4/5 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-[#9b8b76]">
          {product.category}
        </p>
        

        <h3 className="mt-1 font-['Playfair_Display'] tracking-[0.05em] text-lg sm:text-lg text-neutral-900 group-hover:text-[#b99953] font-medium transition-colors duration-300">
          {product.name1}
        </h3>

        {/* <div className="flex gap-2">
          <p className="mt-1 text-sm line-through  sm:text-[16px] text-gray-600">Rs.{product.OriginalPrice}</p>
          <p className="mt-1 text-sm sm:text-[16px] text-[#7d7266]">Rs.{product.price}</p>
        </div> */}

        
      </Link>
    ))}
  </div>

</div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link to="/collections">
          <button className="px-10 py-3 border border-neutral-900 text-[12px] tracking-[0.2em] uppercase bg-transparent hover:bg-neutral-900 hover:text-white transition-all duration-300">
            Shop All Products
          </button></Link>
          
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
