import { motion } from 'framer-motion';

const Content = () => {
  return (
    <section id="content" className="py-24 bg-gradient-to-br from-deep-teal to-deep-teal/90 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 ">
            <span>Contenido </span>
            <span className="text-orange-vibrant">Transformador</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Accede a contenido exclusivo diseñado para impulsar tu crecimiento personal, establecer y alcanzar metas ambiciosas, y desarrollar el mindset de alta performance que necesitas para triunfar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Live Events */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-16 h-16 bg-orange-vibrant rounded-2xl flex items-center justify-center mr-4"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold ">Eventos Live</h3>
                <p className="text-orange-vibrant font-medium">En tiempo real</p>
              </div>
            </div>
            
            <p className=" text-lg mb-6">
              Participa en sesiones en vivo diseñadas para acelerar tu crecimiento personal, alcanzar tus metas más ambiciosas y desarrollar una mentalidad de éxito.
            </p>

            <div className="space-y-3">
              {[
                "Masterclasses de desarrollo personal",
                "Sesiones de establecimiento de metas",
                "Workshops de productividad avanzada",
                "Coaching grupal en vivo"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center /80"
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
          </motion.div>

          {/* Podcast */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-orange-vibrant to-orange-vibrant/80 rounded-2xl flex items-center justify-center mr-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold ">Podcast Growth</h3>
                <p className="text-orange-vibrant font-medium">Conversaciones profundas</p>
              </div>
            </div>
            
            <p className=" text-lg mb-6">
              Escucha conversaciones profundas con expertos en desarrollo personal, psicólogos especializados y líderes que han transformado sus vidas.
            </p>

            <div className="space-y-3">
              {[
                "Entrevistas con coaches reconocidos",
                "Historias de transformación personal",
                "Técnicas de alta performance",
                "Estrategias de cumplimiento de metas"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center /80"
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
          </motion.div>

          {/* YouTube Content */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-8 h-8 " fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold ">YouTube Personal</h3>
                <p className="text-orange-vibrant font-medium">Contenido visual</p>
              </div>
            </div>
            
            <p className=" text-lg mb-6">
              Contenido visual inspirador con ejercicios prácticos, documentales de transformación personal y guías paso a paso para alcanzar tus objetivos.
            </p>

            <div className="space-y-3">
              {[
                "Ejercicios de desarrollo personal",
                "Documentales inspiracionales",
                "Rutinas de alta performance",
                "Guías de establecimiento de metas"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center /80"
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
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 ">
            Impacto en el Crecimiento Personal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25K+", label: "Personas transformadas" },
              { number: "500+", label: "Sesiones realizadas" },
              { number: "2M+", label: "Horas de contenido" },
              { number: "92%", label: "Alcanzan sus metas" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-vibrant mb-2">
                  {stat.number}
                </div>
                <p className="/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="bg-orange-vibrant  px-8 py-4 rounded-full font-medium text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 102, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Accede al Contenido Transformador
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Content; 