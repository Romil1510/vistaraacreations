import { useEffect } from "react"
import { Link } from "react-router-dom"
import AmazonStoreSection from "../components/AmazonStoreSection/AmazonStoreSection"
import { products } from "../data/Products"
const Collections = () => {
   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <div className="mt-30  sm:mt-35 sm:mb-20 sm:px-42 mb-25 px-5 py-5 w-full bg-[#fcfaf8]">
        <div>
          <p className="py-2 text-[14px] font-medium uppercase tracking-[0.25em] text-[#b99953]">Our Collections</p>

        </div>
        <div>
          <h1 className="mb-8 mt-2 sm:mt-3 text-4xl sm:text-6xl sm:w-[70%] w-full  font-light tracking-1">Timeless Pieces for Modern Spaces</h1>

        </div>
        <div>
          <p className="mt-6 text-[#7d7266] sm:w-[70%] w-full text-[16px] tracking-widest">Each piece in our collection is thoughtfully selected for its quality, design, and ability to transform spaces into expressions of refined taste.

</p>

        </div>
      </div>
      <section className="bg-[#f5f3ed] py-20 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 sm:mt-16 sm:mb-8">
       <div className="mt-2 sm:mt-12">

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
  <div className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
            className="w-full aspect-4/5  object-cover transition-transform duration-500 group-hover:scale-105"
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
</div>
</section>
<AmazonStoreSection/>
    </section>
    
  )
  
}


export default Collections
