import { useState } from 'react';
import { motion } from 'motion/react';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Array of navigation items
  const navItems = ['Home', 'Products', 'Services', 'About Us', 'Contact'];

  return (
    <>
      <nav className='flex justify-between items-center w-full h-14 px-4 md:px-10 bg-white shadow-md relative'>
        {/* Logo and Brand */}
        <div className='flex items-center gap-2'>
          <img className='w-[40px] h-[40px]' src='/i_company_logo.png' alt='Company Logo' />
          <h1 className='text-sm font-inter font-bold hidden sm:block'>
            HealthFirst Pharmacy: Your Trusted Care Partner
          </h1>
        </div>

        {/* Desktop Nav Items */}
        <ul className='hidden md:flex items-center gap-6 font-inter font-semibold text-sm cursor-pointer'>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          className='md:hidden cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className='absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 font-inter font-semibold text-sm md:hidden z-50 cursor-pointer'>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default HeaderComponent;
