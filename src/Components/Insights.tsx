import { useState } from "react";

const Insights = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const insightsData = [
    { question: "What services does your pharmacy offer?", answer: "We offer a wide range of services including prescription refills, consultations, and immunizations." },
    { question: "Are your pharmacists available for consultations?", answer: "Absolutely! Our licensed pharmacists are always ready to provide personalized consultations. Whether you have questions about medications, health concerns, or need advice on wellness, our experts are here to help you make informed decisions about your health." },
    { question: "How can I refill my prescriptions online?", answer: "Refilling your prescriptions online is quick and easy! Simply visit our website, log into your account, and navigate to the prescription refill section. Enter the required details, and you’ll receive a confirmation once your refill is processed and ready for pick-up." },
    { question: "Do you provide home delivery services?", answer: "Yes, we offer convenient home delivery services! You can order your medications online or via phone, and our team will ensure timely delivery right to your doorstep, ensuring you never run out of essential medications." },
    { question: "What health products do you carry?", answer: "Our pharmacy stocks a wide range of health products, including over-the-counter medications, vitamins, supplements, personal care items, and medical supplies. We aim to meet all your health and wellness needs under one roof." },
    { question: "Can I get immunizations at your pharmacy?", answer: "Certainly! We offer immunizations for various vaccines, including flu shots and travel vaccinations. Our trained staff ensures a safe and efficient vaccination experience for all our patients." },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-16 flex flex-col gap-6 items-center">
      <div 
        className="flex flex-col gap-3 items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="font-inter font-bold leading-[42px] text-3xl sm:text-4xl">Trusted Pharmacy Insights</h1>
        <p 
          className="font-inter text-lg sm:text-xl leading-7 font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Your Health, Our Priority
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {insightsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between w-full p-4 sm:p-6 border border-light-gray bg-light rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <p className="font-inter font-medium text-lg sm:text-xl leading-7">{item.question}</p>
              {expandedIndex === index && (
                <p 
                  className="font-inter font-medium text-lg sm:text-xl leading-7"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {item.answer}
                </p>
              )}
            </div>

            <div 
              className="flex-shrink-0"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 200 + 100}
            >
              <img
                src={expandedIndex === index ? "/VectorOpen.svg" : "/Vector2.svg"}
                alt="Toggle Icon"
                className="cursor-pointer"
                onClick={() => toggleAccordion(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;