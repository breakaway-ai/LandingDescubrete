import { motion } from 'framer-motion';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-br from-white to-light-gray/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-deep-teal">Ecosistema </span>
            <span className="text-orange-vibrant">Descúbrete+</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma tecnológica integral que combina comunidad digital avanzada con inteligencia artificial de vanguardia para acelerar tu crecimiento personal y profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Nepsis - AI Agent */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="ai-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="2" fill="white"/>
                      <path d="M30,0 L30,60 M0,30 L60,30" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ai-grid)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-orange-vibrant rounded-2xl flex items-center justify-center mr-4"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      borderRadius: ["16px", "20px", "16px"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Nepsis</h3>
                    <p className="text-orange-vibrant font-medium">Agente de IA Emocional</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg mb-6">
                  Nuestro agente de inteligencia artificial especializado en coaching emocional y desarrollo personal. Nepsis utiliza algoritmos avanzados de machine learning para proporcionar apoyo personalizado 24/7.
                </p>

                <div className="space-y-4">
                  {[
                    "Análisis emocional en tiempo real",
                    "Recomendaciones personalizadas basadas en IA",
                    "Evolución continua a través de deep learning",
                    "Integración con wearables y biometría"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-orange-vibrant rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Descúbrete+ App */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-orange-vibrant to-orange-vibrant/80 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="app-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="2" height="2" fill="white"/>
                      <rect x="20" y="20" width="2" height="2" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#app-grid)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-deep-teal rounded-2xl flex items-center justify-center mr-4"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      borderRadius: ["16px", "20px", "16px"]
                    }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Descúbrete+</h3>
                    <p className="text-deep-teal font-medium">Aplicación Móvil</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg mb-6">
                  Plataforma social digital de próxima generación que conecta profesionales y personas en busca de crecimiento. Integra tecnologías emergentes para una experiencia de comunidad única.
                </p>

                <div className="space-y-4">
                  {[
                    "Networking inteligente con algoritmos de matching",
                    "Eventos virtuales inmersivos en tiempo real",
                    "Sistema de gamificación para el crecimiento",
                    "Integración nativa con Nepsis IA"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-deep-teal rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-deep-teal">
            Tecnología de Vanguardia
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Machine Learning", icon: "🤖" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Real-time Analytics", icon: "📊" },
              { name: "Blockchain", icon: "🔗" }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-light-gray/20 to-light-gray/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem; 