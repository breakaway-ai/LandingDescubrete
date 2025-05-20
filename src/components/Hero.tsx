import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-deep-teal">Construye tu futuro</span> con nuestra 
              <span className="text-orange-vibrant"> comunidad</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descúbrete+ es un ecosistema de comunidad vibrante para personas que buscan crecimiento personal y profesional, con acceso a Nepsis, tu coach emocional personalizado.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-vibrant text-white px-8 py-4 rounded-full font-medium flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20.5v-17A.5.5 0 0 1 5.5 3H6l13 8.5-13 8.5h-.5a.5.5 0 0 1-.5-.5zM12 12l5.5 3.5-7 4.5V4l7 4.5L12 12z"/></svg>
                </span>
                Google Play
              </motion.a>
              
              <motion.a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-deep-teal text-white px-8 py-4 rounded-full font-medium flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9.88 14.12L8.12 16a6 6 0 0 1 0-8l1.76 1.88A4 4 0 0 0 9.88 14.12zm2.12 5.76V19h2v2.88a8.06 8.06 0 0 1-2 0zm0-17.76V4H10V2.12a8.06 8.06 0 0 1 2 0zm6.88 3.88L17.12 8A4 4 0 0 0 13 9.88L11.12 8a6 6 0 0 1 7.88-2z"/></svg>
                </span>
                App Store
              </motion.a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              className="w-full h-[500px] bg-gradient-to-br from-deep-teal/10 to-orange-vibrant/10 rounded-2xl flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 100 
              }}
            >
              {/* Here we would add a 3D animation or illustration */}
              <div className="text-center">
                <div className="text-xl text-deep-teal mb-4">Visualización 3D avanzada</div>
                <div className="text-light-gray">(Animación 3D a implementar)</div>
              </div>
            </motion.div>
          </div>
        </div>
        
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