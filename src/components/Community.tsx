import { motion } from 'framer-motion';

const Community = () => {
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
            <span className="text-deep-teal">Comunidad de </span>
            <span className="text-orange-vibrant">crecimiento personal</span>
          </h2>
          <p className="text-xl">
            Descúbrete+ conecta personas comprometidas con su transformación personal en una red global de apoyo y crecimiento mutuo. Más que contactos, creamos conexiones auténticas que impulsan tu evolución personal y profesional.
          </p>
        </motion.div>

        {/* Network Connections Background */}
        <div className="w-full h-[500px] rounded-3xl relative mb-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-light-gray/10 z-0"></div>

          {/* Network grid pattern */}
          <div className="absolute inset-0 z-10 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#003366" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 z-20" width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {/* Horizontal connection lines */}
            <motion.path 
              d="M0,100 C200,100 300,200 500,200 C700,200 800,100 1000,100" 
              stroke="#ff660033" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M0,100 C200,100 300,200 500,200 C700,200 800,100 1000,100",
                  "M0,120 C200,90 300,220 500,180 C700,220 800,90 1000,120",
                  "M0,100 C200,100 300,200 500,200 C700,200 800,100 1000,100"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path 
              d="M0,300 C250,350 350,250 500,250 C650,250 750,350 1000,300" 
              stroke="#00336633" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M0,300 C250,350 350,250 500,250 C650,250 750,350 1000,300",
                  "M0,280 C250,370 350,230 500,270 C650,230 750,370 1000,280",
                  "M0,300 C250,350 350,250 500,250 C650,250 750,350 1000,300"
                ]
              }}
              transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path 
              d="M0,400 C150,350 350,450 500,400 C650,350 850,450 1000,400" 
              stroke="#ffe00033" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M0,400 C150,350 350,450 500,400 C650,350 850,450 1000,400",
                  "M0,420 C150,330 350,470 500,380 C650,370 850,430 1000,420",
                  "M0,400 C150,350 350,450 500,400 C650,350 850,450 1000,400"
                ]
              }}
              transition={{ duration: 15, delay: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Vertical connection lines */}
            <motion.path 
              d="M200,0 C220,100 180,200 200,300 C220,400 180,500 200,500" 
              stroke="#ff660033" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M200,0 C220,100 180,200 200,300 C220,400 180,500 200,500",
                  "M200,0 C240,100 160,200 220,300 C240,400 160,500 200,500",
                  "M200,0 C220,100 180,200 200,300 C220,400 180,500 200,500"
                ]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path 
              d="M500,0 C480,100 520,200 500,300 C480,400 520,500 500,500" 
              stroke="#00336633" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M500,0 C480,100 520,200 500,300 C480,400 520,500 500,500",
                  "M500,0 C460,100 540,200 480,300 C460,400 540,500 500,500",
                  "M500,0 C480,100 520,200 500,300 C480,400 520,500 500,500"
                ]
              }}
              transition={{ duration: 18, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path 
              d="M800,0 C820,100 780,200 800,300 C820,400 780,500 800,500" 
              stroke="#ffe00033" 
              strokeWidth="2" 
              fill="none"
              animate={{
                d: [
                  "M800,0 C820,100 780,200 800,300 C820,400 780,500 800,500",
                  "M800,0 C840,100 760,200 820,300 C840,400 760,500 800,500",
                  "M800,0 C820,100 780,200 800,300 C820,400 780,500 800,500"
                ]
              }}
              transition={{ duration: 18, delay: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Nodes */}
            <motion.circle 
              cx="200" cy="100" r="6" 
              fill="#ff6600"
              animate={{ r: [6, 8, 6], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle 
              cx="500" cy="200" r="8" 
              fill="#003366"
              animate={{ r: [8, 10, 8], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
            />
            <motion.circle 
              cx="800" cy="100" r="6" 
              fill="#ff6600"
              animate={{ r: [6, 8, 6], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            />
            <motion.circle 
              cx="200" cy="300" r="6" 
              fill="#003366"
              animate={{ r: [6, 8, 6], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
            />
            <motion.circle 
              cx="500" cy="250" r="7" 
              fill="#ffe000"
              animate={{ r: [7, 9, 7], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 2, repeat: Infinity }}
            />
            <motion.circle 
              cx="800" cy="300" r="6" 
              fill="#003366"
              animate={{ r: [6, 8, 6], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 0.8, repeat: Infinity }}
            />
            <motion.circle 
              cx="200" cy="400" r="7" 
              fill="#ffe000"
              animate={{ r: [7, 9, 7], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1.2, repeat: Infinity }}
            />
            <motion.circle 
              cx="500" cy="400" r="6" 
              fill="#ff6600"
              animate={{ r: [6, 8, 6], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 2.5, repeat: Infinity }}
            />
            <motion.circle 
              cx="800" cy="400" r="8" 
              fill="#ffe000"
              animate={{ r: [8, 10, 8], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: 1.8, repeat: Infinity }}
            />
          </svg>
          
          {/* Community Text */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-deep-teal">Conexiones Auténticas</h3>
              <p className="text-lg">
                Encuentra personas que comparten tus valores, metas y visión de crecimiento. Creamos vínculos genuinos basados en compatibilidad de objetivos y apoyo mutuo.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Círculos de Crecimiento",
              description: "Grupos pequeños de personas con objetivos similares que se apoyan mutuamente en su transformación personal."
            },
            {
              title: "Mentorías Personalizadas",
              description: "Conecta con mentores experimentados que han recorrido el camino que tú quieres transitar."
            },
            {
              title: "Red de Apoyo Global",
              description: "Comunidad de 25K+ personas comprometidas con su desarrollo personal y crecimiento continuo."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-white to-light-gray/30 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-deep-teal">{feature.title}</h3>
              <p className="text-grey-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community; 