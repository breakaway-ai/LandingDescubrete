import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="lg:w-1/2 z-10" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5
              }}
            >
              <motion.span 
                className="text-deep-teal inline-block"
                animate={{ 
                  scale: [1, 1.03, 1],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }
                }}
              >
                Construye tu futuro
              </motion.span> 
              <span> con nuestra </span>
              <motion.span 
                className="text-orange-vibrant inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { 
                    duration: 1.5, 
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }
                }}
              >
                comunidad
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 max-w-xl"
              variants={itemVariants}
            >
              Descúbrete+ es un ecosistema de comunidad vibrante para personas que buscan crecimiento personal y profesional, con acceso a Nepsis, tu coach emocional personalizado.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-deep-teal texture-circuit text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(0, 51, 102, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/src/assets/images/LogoGooglePlay.png" 
                  alt="Google Play" 
                  className="h-8"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">DESCARGA EN</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark text-deep-teal px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-3 shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/src/assets/images/LogoAppStore.webp" 
                  alt="App Store" 
                  className="h-8"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">DESCARGA EN</div>
                  <div className="font-medium">App Store</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              className="w-full h-[500px] rounded-2xl relative flex items-center justify-center overflow-hidden" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 100 
              }}
            >
              <motion.img 
                src="/src/assets/images/DescubreteLaunch.avif"
                alt="Descúbrete Launch"
                className="w-full h-full object-cover rounded-2xl" 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 