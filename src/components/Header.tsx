import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed w-full z-50 bg-deep-teal py-4"
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
            src="/src/assets/images/Logo.avif" 
            alt="Descúbrete+ Logo" 
            className="h-10 mr-3"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div className="text-3xl font-bold text-white">
            Descúbrete<span className="text-orange-vibrant">+</span>
          </div>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Comunidad', href: '#community' },
            { name: 'Nepsis', href: '#nepsis' },
            { name: 'Descargar', href: '#download' }
          ].map((item, index) => (
            <motion.a 
              key={index}
              href={item.href} 
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
          className="bg-orange-vibrant text-white px-6 py-2 rounded-full font-medium"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 15px -3px rgba(255, 102, 0, 0.3)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Descargar App
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header; 