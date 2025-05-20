import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Nepsis = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="nepsis" className="py-24 bg-deep-teal relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-white/5"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-vibrant/10"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [50, -50]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]),
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0 pr-10"
            style={{ y, opacity }}
          >
            <div className="w-full h-[600px] bg-gradient-to-br from-black/20 to-orange-vibrant/20 rounded-2xl shadow-2xl backdrop-blur-sm p-8 flex items-center justify-center">
              {/* Organic, flowing Nepsis sphere with extreme deformations */}
              <motion.div 
                className="relative w-64 h-64 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Base extremely deformed shape */}
                <motion.div
                  className="absolute inset-0 bg-orange-vibrant"
                  animate={{
                    borderRadius: [
                      '70% 30% 20% 80%/60% 30% 70% 40%',
                      '20% 80% 60% 40%/30% 60% 30% 70%',
                      '80% 20% 40% 60%/30% 70% 60% 40%',
                      '30% 70% 70% 30%/60% 40% 30% 70%',
                      '70% 30% 20% 80%/60% 30% 70% 40%'
                    ],
                    scale: [0.9, 1, 1.1, 1, 0.9],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Additional deforming overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-orange-vibrant/30"
                    animate={{
                      borderRadius: [
                        '20% 80% 80% 20%/80% 20% 80% 20%',
                        '80% 20% 20% 80%/20% 80% 20% 80%',
                        '20% 80% 80% 20%/80% 20% 80% 20%'
                      ],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Outer glow effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255, 102, 0, 0)",
                      "0 0 0 30px rgba(255, 102, 0, 0.2)",
                      "0 0 0 50px rgba(255, 102, 0, 0.1)",
                      "0 0 0 70px rgba(255, 102, 0, 0.05)",
                      "0 0 0 90px rgba(255, 102, 0, 0)",
                    ],
                    borderRadius: [
                      '70% 30% 20% 80%/60% 30% 70% 40%',
                      '20% 80% 60% 40%/30% 60% 30% 70%',
                      '80% 20% 40% 60%/30% 70% 60% 40%',
                      '30% 70% 70% 30%/60% 40% 30% 70%',
                      '70% 30% 20% 80%/60% 30% 70% 40%'
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Inner rotating effect with more deformation */}
                <motion.div
                  className="absolute w-[85%] h-[85%] left-[7.5%] top-[7.5%] bg-orange-vibrant/30"
                  animate={{
                    borderRadius: [
                      '90% 10% 80% 20%/30% 70% 20% 80%',
                      '20% 80% 10% 90%/70% 30% 80% 20%',
                      '80% 20% 90% 10%/10% 90% 30% 70%',
                      '90% 10% 80% 20%/30% 70% 20% 80%'
                    ],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Additional spinning inner blob */}
                <motion.div
                  className="absolute w-1/2 h-1/2 left-1/4 top-1/4 bg-orange-vibrant/20"
                  animate={{
                    borderRadius: [
                      '60% 40% 70% 30%/30% 70% 40% 60%',
                      '40% 60% 30% 70%/70% 30% 60% 40%',
                      '60% 40% 70% 30%/30% 70% 40% 60%'
                    ],
                    rotate: [360, 180, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Stabilized text container to keep text aligned */}
                <motion.div 
                  className="relative z-10 flex items-center justify-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    // This ensures the text doesn't inherit deformations
                    transform: "none"
                  }}
                >
                  <div className="text-3xl font-bold text-white">
                    Nepsis
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conoce a <span className="text-orange-vibrant">Nepsis</span>,<br/>
              tu coach emocional
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Dentro de nuestra aplicación, tendrás acceso exclusivo a Nepsis, tu coach emocional personalizado impulsado por IA, diseñado para brindarte apoyo en tu bienestar emocional y desarrollo personal.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Soporte Personalizado",
                  description: "Nepsis aprende y se adapta a tus necesidades específicas."
                },
                {
                  title: "Disponible 24/7",
                  description: "Accede a tu coach emocional en cualquier momento que lo necesites."
                },
                {
                  title: "Evolución Constante",
                  description: "Nepsis evoluciona contigo, ofreciendo apoyo cada vez más relevante."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-12 h-12 bg-orange-vibrant rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="#download"
                className="bg-orange-vibrant text-white px-8 py-4 rounded-full font-medium inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce a Nepsis
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nepsis; 