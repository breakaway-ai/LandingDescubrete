import { motion } from 'framer-motion';
import { useState } from 'react';

const Download = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      // Aquí iría la lógica para enviar el email a la waitlist
      console.log('Email added to waitlist:', email);
    }
  };

  return (
    <section id="download" className="py-24 bg-gradient-to-br from-deep-teal to-deep-teal/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full bg-orange-vibrant/10 z-0"
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
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/5 z-0"
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 ">
            <span>Únete a la </span>
            <span className="text-orange-vibrant">lista de espera</span>
          </h2>
          
          <p className="text-xl mb-12 max-w-2xl mx-auto ">
            Sé el primero en acceder al ecosistema tecnológico más avanzado para profesionales y startups. Regístrate y obtén acceso temprano exclusivo.
          </p>

          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-vibrant border-2"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="bg-orange-vibrant  px-8 py-4 rounded-full font-semibold whitespace-nowrap"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 25px -5px rgba(255, 102, 0, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Unirme al Waitlist
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold  mb-2">¡Perfecto!</h3>
              <p className="">
                Te has unido exitosamente al waitlist. Te notificaremos cuando estemos listos para lanzar.
              </p>
            </motion.div>
          )}

          {/* Benefits */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              {
                icon: "⚡",
                title: "Acceso Temprano",
                description: "Sé de los primeros en probar nuestro ecosistema completo"
              },
              {
                icon: "🎁",
                title: "Beneficios Exclusivos",
                description: "Descuentos especiales y features premium gratuitas"
              },
              {
                icon: "🚀",
                title: "Beta Privilege",
                description: "Influye en el desarrollo del producto con tu feedback"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold  mb-2">{benefit.title}</h3>
                <p className="">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5K+", label: "En el waitlist" },
                { number: "Q3 2025", label: "Fecha de lanzamiento" },
                { number: "50+", label: "Beta testers" },
                { number: "100%", label: "Confidencialidad" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-vibrant mb-2">
                    {stat.number}
                  </div>
                  <p className=" text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download; 