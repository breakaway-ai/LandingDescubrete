import { motion } from 'framer-motion';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full bg-orange-vibrant/5 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-deep-teal/5 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-deep-teal">Descarga </span>
            <span className="text-orange-vibrant">Descúbrete+</span>
            <span className="text-deep-teal"> ahora</span>
          </h2>
          
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Únete a nuestra comunidad vibrante y accede a Nepsis, tu coach emocional personalizado. Descarga la aplicación y comienza tu viaje de crecimiento personal y profesional.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-deep-teal hover:bg-deep-teal/90 text-white py-6 px-8 rounded-2xl flex items-center justify-center gap-4 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20.5v-17A.5.5 0 0 1 5.5 3H6l13 8.5-13 8.5h-.5a.5.5 0 0 1-.5-.5zM12 12l5.5 3.5-7 4.5V4l7 4.5L12 12z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">DESCARGA EN</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-dark hover:bg-dark/90 text-white py-6 px-8 rounded-2xl flex items-center justify-center gap-4 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.37 3.51 7.08 9.05 6.88c1.65.08 2.78.94 3.75.94 1 0 2.83-1.16 4.78-.99 1.83.15 3.22.91 4.11 2.33-3.54 2.23-2.97 6.71.26 8.58-.76 1.92-1.8 3.6-3.9 4.54z"/><path d="M12.77 4.05c.8-1.07 1.45-2.61 1.22-4.21-1.32.09-2.84.92-3.73 2.03-.82 1-1.51 2.58-1.24 4.08 1.42.11 2.87-.72 3.75-1.9z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">DESCARGA EN</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </motion.a>
          </motion.div>

          {/* QR Code Section */}
          <motion.div 
            className="mt-16 bg-gradient-to-br from-light-gray/20 to-white p-8 rounded-3xl shadow-lg inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-[200px] h-[200px] bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
                {/* Replace with actual QR code */}
                <div className="w-full h-full bg-deep-teal/10 flex items-center justify-center">
                  <p className="text-center text-deep-teal">QR Code para escanear</p>
                </div>
              </div>
              <div className="text-left max-w-xs">
                <h3 className="text-2xl font-bold mb-3 text-deep-teal">Escanea y descarga</h3>
                <p>Escanea este código QR con tu cámara para descargar Descúbrete+ directamente a tu dispositivo.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download; 