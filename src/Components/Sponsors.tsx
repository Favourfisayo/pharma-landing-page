const Sponsers = () => {
  return (
    <>
      <div className="w-full px-4 py-12 lg:py-16">
        <div className="flex flex-col items-center gap-10">
          <h1 
            className="text-center text-2xl sm:text-3xl font-bold font-inter leading-[38px] sm:leading-[42px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Trusted Partners in Your Health Journey
          </h1>

          {/* Responsive logo layout */}
          <div 
            className="hidden lg:flex w-full justify-around items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src="/Logo1.png" className="w-auto h-12 object-contain" alt="Logo 1" data-aos="zoom-in" data-aos-duration="800" />
            <img src="/Logo2.png" className="w-auto h-12 object-contain" alt="Logo 2" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" />
            <img src="/Logo3.png" className="w-auto h-12 object-contain" alt="Logo 3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" />
            <img src="/Logo4.png" className="w-auto h-12 object-contain" alt="Logo 4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" />
            <img src="/Logo5.png" className="w-auto h-12 object-contain" alt="Logo 5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" />
            <img src="/Logo6.png" className="w-auto h-12 object-contain" alt="Logo 6" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" />
          </div>

          {/* Tablet: 3 columns × 2 rows | Mobile: 2 columns × 3 rows */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:hidden w-full max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src="/Logo1.png" className="w-full h-12 object-contain mx-auto" alt="Logo 1" data-aos="zoom-in" data-aos-duration="800" />
            <img src="/Logo2.png" className="w-full h-12 object-contain mx-auto" alt="Logo 2" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" />
            <img src="/Logo3.png" className="w-full h-12 object-contain mx-auto" alt="Logo 3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" />
            <img src="/Logo4.png" className="w-full h-12 object-contain mx-auto" alt="Logo 4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300" />
            <img src="/Logo5.png" className="w-full h-12 object-contain mx-auto" alt="Logo 5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" />
            <img src="/Logo6.png" className="w-full h-12 object-contain mx-auto" alt="Logo 6" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsers;