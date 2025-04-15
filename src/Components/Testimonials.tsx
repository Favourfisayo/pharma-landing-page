const Testimonials = () => {
  return (
    <>
      <div className="w-full p-16 flex flex-col gap-16">
        <h1 
          className="font-bold font-inter text-[30px] leading-[42px] text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What Our Customers Say
        </h1>

        {/* Flex container to keep cards in row on tablet/desktop, stack on mobile */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Testimonial 1 */}
          <div 
            className="w-full sm:w-[341px] sm:h-[457px] flex flex-col items-center gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div 
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <img src="/a_user01_avatar.png" alt="Emily Johnson" />
            </div>

            <div 
              className="flex flex-col gap-4 items-center w-[341px] h-[264px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div 
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img src="/Rating.png" />
              </div>
              <p className="font-inter text-xl leading-8 text-center">
                I had an amazing experience at Green Valley Pharmacy! The staff was incredibly helpful, and I found everything I needed without any hassle. Highly recommended for all your pharmaceutical needs!
              </p>
            </div>

            <div 
              className="flex gap-2.5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h1 className="font-inter font-medium text-lg leading-7">Emily Johnson</h1>
              <p className="font-inter text-lg leading-7 text-lighter-gray opacity-20">Happy Customer</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div 
            className="w-full sm:w-[341px] sm:h-[457px] flex flex-col items-center gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div 
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="/a_user02_avatar.png" alt="Michael Smith" />
            </div>

            <div 
              className="flex flex-col gap-4 items-center w-[341px] h-[264px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div 
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src="/Rating.png" />
              </div>
              <p className="font-inter text-xl leading-8 text-center">
                Green Valley Pharmacy provides excellent service and a wide range of products. I always leave feeling well-informed and satisfied. Their staff truly cares about their customers.
              </p>
            </div>

            <div 
              className="flex gap-2.5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <h1 className="font-inter font-medium text-lg leading-7">Michael Smith</h1>
              <p className="font-inter text-lg leading-7 text-lighter-gray opacity-20">Loyal Shopper</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div 
            className="w-full sm:w-[341px] sm:h-[457px] flex flex-col items-center gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div 
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <img src="/a_user03_avatar.png" alt="Sarah Lee" />
            </div>

            <div 
              className="flex flex-col gap-4 items-center w-[341px] h-[264px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div 
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <img src="/Rating.png" />
              </div>
              <p className="font-inter text-xl leading-8 text-center">
                I appreciate the knowledgeable pharmacists who take the time to explain my medications. The atmosphere is welcoming, and I feel safe coming here for my prescriptions.
              </p>
            </div>

            <div 
              className="flex gap-2.5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <h1 className="font-inter font-medium text-lg leading-7">Sarah Lee</h1>
              <p className="font-inter text-lg leading-7 text-lighter-gray opacity-20">Regular Visitor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;