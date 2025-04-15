const Products = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 px-4 items-center">
        <div 
          className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] bg-[url('/m_product_image02.png')] bg-cover bg-no-repeat flex items-end justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <button 
            className="border border-white bg-transparent leading-6 font-inter font-semibold w-[120px] lg:w-[176px] h-[36px] lg:h-[40px] mb-4 lg:mb-6 text-white text-sm lg:text-base"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Shop Now!
          </button>
        </div>

        <div 
          className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] bg-[url('/m_product_image03.png')] bg-cover bg-no-repeat flex items-end justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <button 
            className="border border-white bg-transparent leading-6 font-inter font-semibold w-[120px] lg:w-[176px] h-[36px] lg:h-[40px] mb-4 lg:mb-6 text-white text-sm lg:text-base"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Shop Now!
          </button>
        </div>

        <div 
          className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] bg-[url('/m_product_image04.png')] bg-cover bg-no-repeat flex items-end justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <button 
            className="border border-white bg-transparent leading-6 font-inter font-semibold w-[120px] lg:w-[176px] h-[36px] lg:h-[40px] mb-4 lg:mb-6 text-white text-sm lg:text-base"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            Shop Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;