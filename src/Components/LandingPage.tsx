const LandingPage = () => {
  return (
    <>
      <div 
        className="w-full h-[660px] sm:h-[500px] bg-[url('/bgImage.png')] bg-cover bg-no-repeat bg-center"
        data-aos="fade"
        data-aos-duration="1500"
      >
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 
            className="text-white font-inter font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Pain Relief Gel
          </h1>
          <p 
            className="text-white font-inter font-semibold mt-4 text-lg sm:text-xl md:text-3xl leading-snug sm:leading-[42px] md:leading-[52px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Fast-acting relief for muscle aches.
          </p>
          <button 
            className="mt-6 border border-white bg-transparent leading-6 font-inter font-semibold w-[140px] sm:w-[160px] md:w-[176px] h-[36px] sm:h-[38px] md:h-[40px] text-sm sm:text-base text-white"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Shop Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;