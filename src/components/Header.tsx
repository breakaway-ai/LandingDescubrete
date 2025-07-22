import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../assets/images/Logo.avif';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset para que no quede justo debajo del header
        behavior: 'smooth'
      });
      
      // Cerrar menú móvil después de hacer clic
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-deep-teal texture-header py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.img 
            src={Logo} 
            alt="Descúbrete+ Logo" 
            className="h-6 sm:h-8 md:h-10 mr-2 sm:mr-3"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Descúbrete<span className="text-orange-vibrant">+</span>
          </div>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Comunidad', href: '#community', id: 'community' },
            { name: 'Nepsis', href: '#nepsis', id: 'nepsis' },
            { name: 'Descargar', href: '#download', id: 'download' }
          ].map((item, index) => (
            <motion.a 
              key={index}
              href={item.href} 
              onClick={handleScrollTo(item.id)}
              className="text-white hover:text-orange-vibrant transition-colors relative"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {item.name}
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-vibrant"
                whileHover={{ 
                  width: '100%',
                  transition: { duration: 0.3 }
                }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.a 
          href="#download"
          onClick={handleScrollTo('download')}
          className="hidden md:flex bg-orange-vibrant texture-noise text-white text-sm sm:text-base px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 15px -3px rgba(255, 102, 0, 0.3)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Descúbrete+
        </motion.a>

        {/* Mobile menu button - only shows on small screens */}
        <div className="md:hidden">
          <motion.button
            className="text-white p-2 focus:outline-none relative z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={{
                opacity: isMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white"
            />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-deep-teal texture-header z-40 md:hidden pt-20"
        initial={{ opacity: 0, y: -20, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          y: isMenuOpen ? 0 : -20,
          height: isMenuOpen ? '100vh' : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col items-center space-y-6">
            {[
              { name: 'Comunidad', href: '#community', id: 'community' },
              { name: 'Nepsis', href: '#nepsis', id: 'nepsis' },
              { name: 'Descargar', href: '#download', id: 'download' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={handleScrollTo(item.id)}
                className="text-white text-2xl font-medium relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-vibrant"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                />
              </motion.a>
            ))}
            
            <motion.a
              href="#download"
              onClick={handleScrollTo('download')}
              className="mt-6 bg-gradient-to-r from-orange-vibrant to-orange-vibrant/90 texture-noise text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.9 }}
              transition={{ delay: 0.5 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Descúbrete+
            </motion.a>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 