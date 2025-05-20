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
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center"
            >
              <img 
                src="/src/assets/images/GetItOnGooglePlay.png"
                alt="Get it on Google Play" 
                className="h-16 w-auto object-contain"
              />
            </motion.a>
            
            <motion.a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center"
            >
              <img 
                src="/src/assets/images/DownloadOnTheAppStore.png"
                alt="Download on the App Store" 
                className="h-16 w-auto object-contain"
              />
            </motion.a>
          </motion.div>

          {/* QR Code Section */}
          <motion.div 
            className="mt-16 p-8 rounded-3xl shadow-lg inline-block"
            style={{ background: "linear-gradient(to bottom right, #003366, #1a4d80, #0066cc)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-[200px] h-[200px] bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
                {/* Replace with actual QR code */}
                <div 
                  className="w-full h-full flex items-center justify-center rounded-lg"
                  style={{ background: "linear-gradient(to bottom right, #003366, #0066cc)" }}
                >
                  <p className="text-center text-white font-medium">QR Code para escanear</p>
                </div>
              </div>
              <div className="text-left max-w-xs text-white">
                <h3 className="text-2xl font-bold mb-3 text-white">Escanea y descarga</h3>
                <p className="text-white/90">Escanea este código QR con tu cámara para descargar Descúbrete+ directamente a tu dispositivo.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download; 