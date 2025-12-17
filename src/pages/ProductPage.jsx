// src/pages/ProductPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import Contact from "./Contact";

const ProductPage = () => {
  const { productId } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(productId)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <section className="bg-[#fcfaf8] min-h-screen flex items-center justify-center font-['DM_Sans'] px-4">
        <p className="text-[#7d7266] text-sm">Product not found.</p>
      </section>
    );
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="
        bg-[#fcfaf8]
        min-h-screen
        pt-16 pb-8
        sm:pt-20 sm:pb-10
        md:pt-24 md:pb-12
        lg:pt-28 lg:pb-16
        font-['DM_Sans']
        overflow-y-auto
        mt-7
      "
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Breadcrumb */}
        <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#9b8b76] mb-3 sm:mb-4">
          Home / Collections /{" "}
          <span className="text-[#262626]">Product</span>
        </p>

        {/* TOP: IMAGE + DETAILS */}
        <div
          className="
            flex flex-col gap-5
            md:grid md:grid-cols-2 md:gap-8
            lg:gap-12 xl:gap-14
            items-start
          "
        >
          {/* LEFT – IMAGE CAROUSEL + THUMBNAILS */}
          <div className="w-full">
            {/* Main image */}
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl bg-linear-to-b from-[#fefcf9] to-[#f5eee5] p-2 sm:p-3 md:p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white flex items-center justify-center">
                <img
                  src={images[currentIndex]}
                  alt={product.name}
                  className="
                    w-full
                    h-64
                    sm:h-72
                    md:h-80
                    lg:h-[380px]
                    xl:h-[420px]
                    object-cover
                  "
                />

                {images.length > 1 && (
                  <>
                    {/* Left arrow */}
                    <button
                      type="button"
                      onClick={goPrev}
                      className="
                        absolute left-2 sm:left-3 top-1/2 -translate-y-1/2
                        h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9
                        rounded-full bg-white/80
                        flex items-center justify-center
                        text-sm sm:text-base md:text-lg
                        text-[#262626]
                        shadow-md hover:bg-white transition
                      "
                    >
                      ‹
                    </button>

                    {/* Right arrow */}
                    <button
                      type="button"
                      onClick={goNext}
                      className="
                        absolute right-2 sm:right-3 top-1/2 -translate-y-1/2
                        h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9
                        rounded-full bg-white/80
                        flex items-center justify-center
                        text-sm sm:text-base md:text-lg
                        text-[#262626]
                        shadow-md hover:bg-white transition
                      "
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnails row – horizontal scroll on mobile */}
            {images.length > 1 && (
              <div className="mt-3 md:mt-4 flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`
                      shrink-0
                      h-14 w-14
                      sm:h-16 sm:w-16
                      md:h-18 md:w-18
                      rounded-lg sm:rounded-xl md:rounded-2xl
                      border
                      flex items-center justify-center
                      transition-all duration-200
                      ${
                        currentIndex === idx
                          ? "border-[#f3c790] bg-[#fff5e8] shadow-md"
                          : "border-transparent bg-white/80 hover:border-[#f3c790]"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="h-full w-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT – DETAILS */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#b99953] mb-1 sm:mb-1.5 md:mb-2">
              {product.category}
            </p>

            <h1 className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-900 leading-snug md:leading-tight">
              {product.name}
            </h1>

            {/* Price
            <div className="mt-2 sm:mt-3 md:mt-4 flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#262626]">
                ₹{product.price}
              </p>
              {product.OriginalPrice && (
                <p className="text-xs sm:text-sm md:text-base line-through text-gray-500">
                  ₹{product.OriginalPrice}
                </p>
              )}
              {product.OriginalPrice && (
                <span className="text-[9px] sm:text-[10px] md:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-[#b99533] text-black uppercase tracking-[0.16em]">
                  Save ₹{product.OriginalPrice - product.price}
                </span>
              )}
            </div> */}

            {/* Short description */}
            {product.shortDescription && (
              <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-[15px] text-[#7d7266] leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-3 sm:mt-4 md:mt-5">
                <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium tracking-[0.2em] uppercase text-[#b99953] mb-2">
                  Highlights
                </h3>
                <ul className="space-y-1 text-[12px] sm:text-[13px] md:text-[14px] text-[#5f5448]">
                  {product.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[5px] sm:mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#b99953]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs grid */}
            <div className="mt-3 sm:mt-4 md:mt-5 grid grid-cols-2 gap-2 sm:gap-3 text-[12px] sm:text-[13px] md:text-sm text-[#5f5448]">
              {product.material && (
                <div>
                  <p className="uppercase tracking-[0.16em] text-[9px] sm:text-[10px] text-[#9b8b76]">
                    Material
                  </p>
                  <p className="mt-0.5 sm:mt-1">{product.material}</p>
                </div>
              )}
              {product.color && (
                <div>
                  <p className="uppercase tracking-[0.16em] text-[9px] sm:text-[10px] text-[#9b8b76]">
                    Color
                  </p>
                  <p className="mt-0.5 sm:mt-1">{product.color}</p>
                </div>
              )}
              {product.size && (
                <div>
                  <p className="uppercase tracking-[0.16em] text-[9px] sm:text-[10px] text-[#9b8b76]">
                    Size
                  </p>
                  <p className="mt-0.5 sm:mt-1">{product.size}</p>
                </div>
              )}
              {product.weight && (
                <div>
                  <p className="uppercase tracking-[0.16em] text-[9px] sm:text-[10px] text-[#9b8b76]">
                    Weight
                  </p>
                  <p className="mt-0.5 sm:mt-1">{product.weight}</p>
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              {product.amazonLink && (
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 bg-[#262626] text-white text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.22em] uppercase hover:bg-white hover:text-black border transition-all"
                >
                  Buy Now on Amazon
                </a>
              )}
            </div>
          </div>
        </div>

        {/* LOWER SECTION – ABOUT + DETAILS */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid gap-5 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-[1.3fr,0.9fr] xl:grid-cols-[1.4fr,0.8fr]">
          {/* About this item */}
          <div>
            <h2 className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl text-neutral-900 mb-2 sm:mb-3">
              About this item
            </h2>
            {product.about && product.about.length > 0 ? (
              <ul className="space-y-1.5 sm:space-y-2 text-[12px] sm:text-[13px] md:text-[14px] text-[#5f5448] leading-relaxed">
                {product.about.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[5px] sm:mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#b99953]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[#7d7266]">
                Detailed description coming soon.
              </p>
            )}
          </div>

          {/* Product details box */}
          <div className="bg-[#f5f3ed] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
            <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-neutral-900 mb-2 sm:mb-3">
              Product details
            </h3>

            <div className="space-y-1.5 sm:space-y-2 text-[12px] sm:text-[13px] md:text-[14px] text-[#5f5448]">
              {product.Theme && (
                <p>
                  <span className="font-medium">Theme:</span> {product.Theme}
                </p>
              )}
              {product.Brand && (
                <p>
                  <span className="font-medium">Brand:</span> {product.Brand}
                </p>
              )}
              {product.Colour && (
                <p>
                  <span className="font-medium">Colour:</span> {product.Colour}
                </p>
              )}
              {product.Style && (
                <p>
                  <span className="font-medium">Style:</span> {product.Style}
                </p>
              )}
              {product.Material && (
                <p>
                  <span className="font-medium">Material:</span>{" "}
                  {product.Material}
                </p>
              )}
              {product.Occasion && (
                <p>
                  <span className="font-medium">Occasion:</span>{" "}
                  {product.Occasion}
                </p>
              )}
              {product.ProductDimensions && (
                <p>
                  <span className="font-medium">Dimensions:</span>{" "}
                  {product.ProductDimensions}
                </p>
              )}
              {product.CartoonCharacter && (
                <p>
                  <span className="font-medium">Character:</span>{" "}
                  {product.CartoonCharacter}
                </p>
              )}
              {product.SpecificUsesForProduct && (
                <p>
                  <span className="font-medium">Uses:</span>{" "}
                  {product.SpecificUsesForProduct}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default ProductPage;
