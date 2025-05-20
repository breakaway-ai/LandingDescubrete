import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4"
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
          {/* Replace with actual logo */}
          <div className="text-3xl font-bold text-orange-vibrant">
            Descúbrete<span className="text-deep-teal">+</span>
          </div>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          <a href="#community" className="text-dark hover:text-orange-vibrant transition-colors">
            Comunidad
          </a>
          <a href="#nepsis" className="text-dark hover:text-orange-vibrant transition-colors">
            Nepsis
          </a>
          <a href="#download" className="text-dark hover:text-orange-vibrant transition-colors">
            Descargar
          </a>
        </nav>

        <motion.a 
          href="#download"
          className="bg-orange-vibrant text-white px-6 py-2 rounded-full font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Descargar App
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header; 