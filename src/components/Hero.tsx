import { motion } from 'framer-motion';
import DownloadOnTheAppStore  from '../assets/images/LogoAppStore.webp';
import GetItOnGooglePlay  from '../assets/images/LogoGooglePlay.png';
import DescubreteLaunch  from '../assets/images/DescubreteLaunch.avif';


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
                Acelera tu futuro
              </motion.span> 
              <span> con </span>
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
                inteligencia artificial
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 max-w-xl"
              variants={itemVariants}
            >
              Descúbrete+ es el ecosistema tecnológico que combina una plataforma social de última generación con Nepsis, nuestro agente de IA emocional. Diseñado para profesionales y startups que buscan acelerar su crecimiento exponencial.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-deep-teal/20 border border-deep-teal text-deep-teal px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-3 cursor-default"
              >
                <img 
                  src={GetItOnGooglePlay}
                  alt="Google Play" 
                  className="h-8 opacity-50"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">PRÓXIMAMENTE</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-100 border border-gray-300 text-gray-600 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-3 cursor-default"
              >
                <img 
                  src={DownloadOnTheAppStore} 
                  alt="App Store" 
                  className="h-8 opacity-50"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">PRÓXIMAMENTE</div>
                  <div className="font-medium">App Store</div>
                </div>
              </motion.div>
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
                src={DescubreteLaunch}
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