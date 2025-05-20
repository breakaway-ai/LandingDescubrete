import { motion } from 'framer-motion';
import { useRef } from 'react';

const Community = () => {
  const constraintsRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-deep-teal">Una comunidad </span>
            <span className="text-orange-vibrant">vibrante</span>
          </h2>
          <p className="text-xl">
            Descúbrete+ es más que una plataforma, es un ecosistema de comunidad diseñado para personas y profesionales que buscan un crecimiento personal y profesional continuo.
          </p>
        </motion.div>

        {/* Interactive 3D Space */}
        <motion.div 
          className="w-full h-[500px] bg-gradient-to-br from-white to-light-gray/10 rounded-3xl relative mb-20 overflow-hidden"
          ref={constraintsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Draggable community nodes */}
          <motion.div 
            className="absolute w-24 h-24 bg-orange-vibrant rounded-full flex items-center justify-center text-white font-bold"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100, y: 100 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(255, 102, 0, 0.3)", "0px 0px 30px rgba(255, 102, 0, 0.7)", "0px 0px 0px rgba(255, 102, 0, 0.3)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Conexiones
          </motion.div>

          <motion.div 
            className="absolute w-28 h-28 bg-deep-teal rounded-full flex items-center justify-center text-white font-bold"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1 }}
            initial={{ x: 300, y: 200 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(0, 51, 102, 0.3)", "0px 0px 30px rgba(0, 51, 102, 0.7)", "0px 0px 0px rgba(0, 51, 102, 0.3)"]
            }}
            transition={{ 
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Conocimiento
          </motion.div>

          <motion.div 
            className="absolute w-20 h-20 bg-highlight-yellow rounded-full flex items-center justify-center text-dark font-bold"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1 }}
            initial={{ x: 500, y: 150 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(255, 224, 0, 0.3)", "0px 0px 30px rgba(255, 224, 0, 0.7)", "0px 0px 0px rgba(255, 224, 0, 0.3)"]
            }}
            transition={{ 
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Soporte
          </motion.div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-light-gray text-sm">
            Interactúa con los nodos arrastrándolos
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Conexiones Estratégicas",
              description: "Teje lazos con individuos que te inspiran e impulsan a alcanzar tus metas más ambiciosas."
            },
            {
              title: "Conocimiento de Vanguardia",
              description: "Benefíciate de perspectivas diversas y valiosas que potenciarán tu desarrollo personal y profesional."
            },
            {
              title: "Soporte Continuo",
              description: "Recibe el respaldo constante de una red comprometida con tu éxito mutuo."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-deep-teal">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community; 