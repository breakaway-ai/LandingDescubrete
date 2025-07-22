import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#003366"/>
              <path d="M0,50 L100,50 M50,0 L50,100" stroke="#003366" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-deep-teal">Conecta </span>
            <span className="text-orange-vibrant">con nosotros</span>
          </h2>
          
          <p className="text-xl mb-16 max-w-2xl mx-auto text-gray-600">
            ¿Tienes una idea disruptiva? ¿Quieres formar parte de nuestro ecosistema? Hablemos sobre el futuro de la tecnología y la innovación.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <motion.div 
              className="bg-gradient-to-br from-deep-teal to-deep-teal/90 rounded-3xl p-8  relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-vibrant/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-vibrant/10 rounded-full"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-orange-vibrant rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(255, 102, 0, 0.7)",
                      "0 0 0 10px rgba(255, 102, 0, 0)",
                      "0 0 0 0 rgba(255, 102, 0, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Email Directo</h3>
                <p className="mb-6">
                  Para partnerships, colaboraciones y oportunidades de negocio
                </p>
                
                <motion.a 
                  href="mailto:contacto@descubrete.mx"
                  className="bg-white/20 backdrop-blur-sm  px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 border border-white/30"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>contacto@descubrete.mx</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div 
              className="bg-gradient-to-br from-orange-vibrant to-orange-vibrant/90 rounded-3xl p-8  relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/5 rounded-full"></div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Respuesta Rápida</h3>
                <p className="mb-4">
                  Nuestro equipo responde en
                </p>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-sm">
                  Tiempo promedio de respuesta
                </p>
              </div>
            </motion.div>

            {/* Office Location */}
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-deep-teal/5 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-vibrant/5 rounded-full"></div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-16 h-16 bg-deep-teal rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-deep-teal">Oficina</h3>
                <p className="text-gray-600 mb-4">
                  Nos ubicamos en el corazón del ecosistema tech de México
                </p>
                <div className="text-lg font-semibold text-gray-800 mb-1">CDMX, México</div>
                <p className="text-gray-500 text-sm">
                  Timezone: GMT-6
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-deep-teal to-deep-teal/90 rounded-3xl p-12 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4">¿Listo para revolucionar el futuro?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a nosotros en la construcción del ecosistema tecnológico más innovador de Latinoamérica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="mailto:contacto@descubrete.mx?subject=Partnership Opportunity"
                className="bg-orange-vibrant  px-8 py-4 rounded-full font-semibold"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(255, 102, 0, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Email
              </motion.a>
              
              <motion.button 
                onClick={() => navigator.clipboard.writeText('contacto@descubrete.mx')}
                className="bg-white/20 backdrop-blur-sm  px-8 py-4 rounded-full font-medium border border-white/30"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Copiar Email
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 