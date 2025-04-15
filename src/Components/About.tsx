const About = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-16 p-16">
        <div className="flex flex-col gap-3">
          <h1 
            className="font-inter font-bold text-[18px] leading-[28px] text-gray"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Your Health, Our Priority
          </h1>
          <h1 
            className="font-inter leading-[42px] font-bold text-[30px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Innovative Pharmacy Solutions for Everyone
          </h1>
        </div>

        {/* Flex layout for desktop, grid for tablet/mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fast Delivery */}
          <div 
            className="w-full sm:w-[250px] lg:w-[250px] h-[246px] flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div 
              className="w-11 h-11 border border-light-gray flex items-center justify-center rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <img src="/lighting$.png" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-semibold text-[18px] leading-[28px] font-inter">Fast Delivery</h1>
              <p className="font-inter leading-6">Get your medications delivered quickly and safely to your doorstep, ensuring convenience and care.</p>
            </div>
            <div>
              <p className="font-inter text-[18px] leading-[28px] text-green font-bold">Discover Fast Delivery</p>
            </div>
          </div>

          {/* Expert Consultation */}
          <div 
            className="w-full sm:w-[250px] lg:w-[250px] h-[246px] flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div 
              className="w-11 h-11 border border-light-gray flex items-center justify-center rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="/sparkle$.png" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-semibold text-[18px] leading-[28px] font-inter">Expert Consultation</h1>
              <p className="font-inter leading-6">Consult with our licensed pharmacists for expert advice on medication and health management.</p>
            </div>
            <div>
              <p className="font-inter text-[18px] leading-[28px] font-bold text-green">Talk to an Expert</p>
            </div>
          </div>

          {/* Wide Selection */}
          <div 
            className="w-full sm:w-[250px] lg:w-[250px] h-[246px] flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div 
              className="w-11 h-11 border border-light-gray flex items-center justify-center rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <img src="/lock$.png" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-semibold text-[18px] leading-[28px] font-inter">Wide Selection</h1>
              <p className="font-inter leading-6">Explore our extensive range of prescription and over-the-counter medications tailored to your needs.</p>
            </div>
            <div>
              <p className="font-inter text-[18px] leading-[28px] text-green font-bold">Browse Our Selection</p>
            </div>
          </div>

          {/* Health Insights */}
          <div 
            className="w-full sm:w-[250px] lg:w-[250px] h-[246px] flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div 
              className="w-11 h-11 border border-light-gray flex items-center justify-center rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <img src="/heart$.png" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-semibold text-[18px] leading-[28px] font-inter">Health Insights</h1>
              <p className="font-inter leading-6">Stay informed with our health resources and tips for managing your wellness effectively.</p>
            </div>
            <div>
              <p className="font-inter text-[18px] leading-[28px] text-green font-bold">Get Health Insights</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;