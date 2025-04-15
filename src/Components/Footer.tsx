const Footer = () => {
  return (
    <>
      <div className="p-10 bg-teal">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center sm:items-start">
          {/* Logo and text */}
          <div className="flex gap-2.5 items-center">
            <img src="/i_company_logo.png" alt="HealthFirst Logo" />
            <h1 className="font-inter font-bold text-xl leading-8 text-white">
              HealthFirst Pharmacy: Excellence in Care
            </h1>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <h1 className="font-inter text-white leading-[22.4px]">
              © 2025 HealthFirst Pharmacy. All rights reserved.
            </h1>
          </div>

          {/* Links */}
          <div>
            <ul className="flex flex-wrap gap-7 justify-center sm:justify-start">
              <li className="font-inter text-light leading-6 font-semibold">Privacy Policy</li>
              <li className="font-inter text-light leading-6 font-semibold">Terms of Use</li>
              <li className="font-inter text-light leading-6 font-semibold">FAQ</li>
              <li className="font-inter text-light leading-6 font-semibold">Careers</li>
              <li className="font-inter text-light leading-6 font-semibold">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
