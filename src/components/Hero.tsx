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
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-white overflow-hidden">
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
                className="bg-deep-teal text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-3 shadow-lg"
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
              className="w-full h-[500px] bg-gradient-to-br from-deep-teal/10 to-orange-vibrant/10 rounded-2xl flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 100 
              }}
            >
              {/* 3D animation placeholder */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-2xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(255, 102, 0, 0.2) 0%, rgba(0, 51, 102, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
                    "radial-gradient(circle at 70% 70%, rgba(255, 102, 0, 0.2) 0%, rgba(0, 51, 102, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
                    "radial-gradient(circle at 30% 70%, rgba(255, 102, 0, 0.2) 0%, rgba(0, 51, 102, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
                    "radial-gradient(circle at 70% 30%, rgba(255, 102, 0, 0.2) 0%, rgba(0, 51, 102, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
                    "radial-gradient(circle at 30% 30%, rgba(255, 102, 0, 0.2) 0%, rgba(0, 51, 102, 0.1) 50%, rgba(255, 255, 255, 0) 70%)",
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              
              {/* Animated particles */}
              {[...Array(20)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 rounded-full bg-orange-vibrant/40"
                  initial={{
                    x: Math.random() * 500 - 250,
                    y: Math.random() * 500 - 250,
                    opacity: 0.3 + Math.random() * 0.7,
                    scale: 0.4 + Math.random() * 0.6,
                  }}
                  animate={{
                    x: Math.random() * 500 - 250,
                    y: Math.random() * 500 - 250,
                    opacity: [0.3 + Math.random() * 0.7, 0.5, 0.3 + Math.random() * 0.7],
                    scale: [0.4 + Math.random() * 0.6, 0.6 + Math.random() * 0.4, 0.4 + Math.random() * 0.6],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
              
              {[...Array(15)].map((_, index) => (
                <motion.div
                  key={index + 20}
                  className="absolute w-2 h-2 rounded-full bg-deep-teal/40"
                  initial={{
                    x: Math.random() * 500 - 250,
                    y: Math.random() * 500 - 250,
                    opacity: 0.3 + Math.random() * 0.7,
                    scale: 0.4 + Math.random() * 0.6,
                  }}
                  animate={{
                    x: Math.random() * 500 - 250,
                    y: Math.random() * 500 - 250,
                    opacity: [0.3 + Math.random() * 0.7, 0.5, 0.3 + Math.random() * 0.7],
                    scale: [0.4 + Math.random() * 0.6, 0.6 + Math.random() * 0.4, 0.4 + Math.random() * 0.6],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
              
              <motion.div 
                className="text-center z-10 bg-white/30 backdrop-blur-sm px-8 py-6 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="text-2xl text-deep-teal font-semibold mb-4">Descubre conexiones significativas</div>
                <div className="text-dark/80">Expande tus horizontes personales y profesionales</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Abstract shapes */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-orange-vibrant/10 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        <motion.div 
          className="absolute top-20 -right-10 w-40 h-40 rounded-full bg-deep-teal/10 z-0"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 