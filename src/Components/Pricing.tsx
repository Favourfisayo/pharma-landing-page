const Pricing = () => {
  return (
    <>
      <div className="flex flex-col items-center p-16 gap-16">
        <div className="flex flex-col gap-3 items-center">
          <h1 
            className="font-bold text-3xl leading-[42px] font-inter"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Affordable Pharmacy Plans
          </h1>
          <h1 
            className="font-medium font-inter text-lg leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Choose the right plan that suits your health and budget needs.
          </h1>
        </div>

        {/* Flex container for pricing cards */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          
          {/* First Card */}
          <div 
            className="w-full sm:w-[250px] sm:h-full pt-4 pl-4 pr-4 pb-6 flex flex-col gap-4 border border-light-gray rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-inter font-semibold text-[18px] leading-7 text-light-green">Basic Package</h2>
              <h1 className="font-inter font-bold text-3xl leading-[42px]">Free Plan</h1>
              <p className="font-inter font-medium leading-6">Ideal for individual use only.</p>
              <hr className="border-t border-light-gray" />
            </div>

            <div className="flex flex-col gap-5">
              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Online Prescription Refills</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">24/7 Customer Support</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Health Advice Available</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Discount on First Order</p>
              </div>
            </div>

            <div>
              <button 
                className="border border-light-gray px-4 w-[218px] h-11 font-inter font-semibold leading-6 rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Get Started Now
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div 
            className="w-full sm:w-[250px] sm:h-full pt-4 pl-4 pr-4 pb-6 flex flex-col gap-4 border border-light-gray bg-sky-blue rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-inter font-semibold text-[18px] leading-7 text-green">Pro Package</h2>
              <div className="flex gap-2 items-center">
                <h1 className="font-inter font-bold leading-[42px] text-3xl">$8</h1>
                <h1 className="font-inter leading-6">$19.99 per month</h1>
              </div>
              <p className="font-inter font-medium leading-6">Perfect for personal use.</p>
              <hr className="border-t border-light-gray" />
            </div>

            <div className="flex flex-col gap-5">
              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">All Basic Features</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Priority Customer Support</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Monthly Health Insights</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Exclusive Discounts</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Free Shipping on Orders</p>
              </div>
            </div>

            <div>
              <button 
                className="border border-light-gray px-4 w-[218px] h-11 font-inter font-semibold leading-6 rounded-xl bg-green text-white"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Join Pro Today
              </button>
            </div>
          </div>

          {/* Third Card */}
          <div 
            className="w-full sm:w-[250px] sm:h-full pt-4 pl-4 pr-4 pb-6 flex flex-col gap-4 border border-light-gray bg-sky-blue rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-inter font-semibold text-[18px] leading-7 text-green">Team Package</h2>
              <div className="flex gap-2 items-center">
                <h1 className="font-inter font-bold leading-[42px] text-3xl">$12</h1>
                <h1 className="font-inter leading-6">$49.99 per month</h1>
              </div>
              <p className="font-inter font-medium leading-6">Designed for small teams and groups.</p>
              <hr className="border-t border-light-gray" />
            </div>

            <div className="flex flex-col gap-5">
              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Team Collaboration Tools</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Shared Health Resources</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Multiple User Accounts</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Team-based Discounts</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Dedicated Account Managers</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Monthly Team Reports</p>
              </div>
            </div>

            <div>
              <button 
                className="border border-light-gray px-4 w-[218px] h-11 font-inter font-semibold leading-6 rounded-xl bg-green text-white"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                Start Your Team Plan
              </button>
            </div>
          </div>

          {/* Fourth Card */}
          <div 
            className="w-full sm:w-[250px] sm:h-full pt-4 pl-4 pr-4 pb-6 flex flex-col gap-4 border border-light-gray rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-inter font-semibold text-[18px] leading-7">Enterprise Package</h2>
              <div className="flex gap-2 items-center">
                <h1 className="font-inter font-bold leading-[42px] text-3xl">$24</h1>
                <h1 className="font-inter leading-6">Contact for Pricing</h1>
              </div>
              <p className="font-inter font-medium leading-6">Tailored for larger organizations.</p>
              <hr className="border-t border-light-gray" />
            </div>

            <div className="flex flex-col gap-5">
              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Custom Solutions Available</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Comprehensive Management Tools</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Advanced Security Features</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Dedicated Support Team</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Extensive Health Data Reports</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Flexible Billing Options</p>
              </div>

              <div 
                className="flex gap-3 items-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <img src="Vector.svg" />
                <p className="font-inter font-medium leading-6">Integration with Existing Systems</p>
              </div>
            </div>

            <div>
              <button 
                className="border border-light-gray px-4 w-[218px] h-11 font-inter font-semibold leading-6 rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;