import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Community = () => {
  const constraintsRef = useRef(null);
  const controls = useAnimation();
  
  // Estado para tener un nodo activo que se pueda destacar
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Track positions of nodes for drawing connections
  const [nodePositions, setNodePositions] = useState({
    node1: { x: 100, y: 100 },
    node2: { x: 300, y: 200 },
    node3: { x: 500, y: 150 }
  });

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

  useEffect(() => {
    // Iniciar la secuencia de animación cuando se monta el componente
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    });
    
    // Movimiento dinámico de nodos cuando no están siendo arrastrados
    const interval = setInterval(() => {
      if (!activeNode) {
        setNodePositions(prev => ({
          ...prev,
          node1: { 
            x: prev.node1.x + (Math.random() * 2 - 1), 
            y: prev.node1.y + (Math.random() * 2 - 1) 
          },
          node2: { 
            x: prev.node2.x + (Math.random() * 2 - 1), 
            y: prev.node2.y + (Math.random() * 2 - 1) 
          },
          node3: { 
            x: prev.node3.x + (Math.random() * 2 - 1), 
            y: prev.node3.y + (Math.random() * 2 - 1) 
          },
        }));
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [activeNode, controls]);

  // Función para iniciar una onda expansiva desde un nodo
  const triggerWave = (nodeKey: string) => {
    setActiveNode(nodeKey);
    setTimeout(() => setActiveNode(null), 1500);
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
          {/* Fondo interactivo con animaciones */}
          <motion.div 
            className="absolute inset-0 z-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
                "radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
                "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
                "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />

          {/* Grid de puntos de fondo */}
          <div className="absolute inset-0 z-0 opacity-10">
            {[...Array(20)].map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex justify-between">
                {[...Array(30)].map((_, colIndex) => (
                  <motion.div
                    key={`dot-${rowIndex}-${colIndex}`}
                    className="w-1 h-1 rounded-full bg-deep-teal"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {/* Connection from node1 to node2 */}
            <motion.line 
              x1={nodePositions.node1.x + 48} 
              y1={nodePositions.node1.y + 48} 
              x2={nodePositions.node2.x + 56} 
              y2={nodePositions.node2.y + 56}
              stroke={activeNode === 'node1' || activeNode === 'node2' ? "#ff6600" : "#ff660033"}
              strokeWidth={activeNode === 'node1' || activeNode === 'node2' ? 3 : 2}
              strokeDasharray="6 4"
              animate={{
                strokeWidth: [2, 3, 2],
                stroke: [
                  "#ff660033", 
                  activeNode === 'node1' || activeNode === 'node2' ? "#ff6600" : "#ff660066", 
                  "#ff660033"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Connection from node2 to node3 */}
            <motion.line 
              x1={nodePositions.node2.x + 56} 
              y1={nodePositions.node2.y + 56} 
              x2={nodePositions.node3.x + 40} 
              y2={nodePositions.node3.y + 40}
              stroke={activeNode === 'node2' || activeNode === 'node3' ? "#003366" : "#00336633"}
              strokeWidth={activeNode === 'node2' || activeNode === 'node3' ? 3 : 2}
              strokeDasharray="6 4"
              animate={{
                strokeWidth: [2, 3, 2],
                stroke: [
                  "#00336633", 
                  activeNode === 'node2' || activeNode === 'node3' ? "#003366" : "#00336666", 
                  "#00336633"
                ]
              }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Connection from node3 to node1 */}
            <motion.line 
              x1={nodePositions.node3.x + 40} 
              y1={nodePositions.node3.y + 40} 
              x2={nodePositions.node1.x + 48} 
              y2={nodePositions.node1.y + 48}
              stroke={activeNode === 'node3' || activeNode === 'node1' ? "#ffe000" : "#ffe00033"}
              strokeWidth={activeNode === 'node3' || activeNode === 'node1' ? 3 : 2}
              strokeDasharray="6 4"
              animate={{
                strokeWidth: [2, 3, 2],
                stroke: [
                  "#ffe00033", 
                  activeNode === 'node3' || activeNode === 'node1' ? "#ffe000" : "#ffe00066", 
                  "#ffe00033"
                ]
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Animated data particles along the connections */}
            {[...Array(18)].map((_, i) => (
              <motion.circle
                key={i}
                r={i % 6 === 0 ? 4 : 3}
                fill={i % 3 === 0 ? "#ff6600" : i % 3 === 1 ? "#003366" : "#ffe000"}
                animate={{
                  cx: [
                    nodePositions.node1.x + 48,
                    nodePositions.node2.x + 56,
                    nodePositions.node3.x + 40,
                    nodePositions.node1.x + 48
                  ],
                  cy: [
                    nodePositions.node1.y + 48,
                    nodePositions.node2.y + 56,
                    nodePositions.node3.y + 40,
                    nodePositions.node1.y + 48
                  ],
                  opacity: [0, 0.8, 0.8, 0],
                  r: [2, i % 6 === 0 ? 4 : 3, i % 6 === 0 ? 4 : 3, 2]
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.33, 0.66, 1],
                  delay: i * 0.4,
                  repeat: Infinity
                }}
              />
            ))}
          </svg>

          {/* Draggable community nodes */}
          <motion.div 
            className="absolute w-24 h-24 bg-orange-vibrant rounded-full flex items-center justify-center text-white font-bold z-20 cursor-grab active:cursor-grabbing shadow-lg"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 102, 0, 0.5)" }}
            whileDrag={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 102, 0, 0.7)" }}
            initial={{ x: 100, y: 100 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(255, 102, 0, 0.3)", "0px 0px 30px rgba(255, 102, 0, 0.7)", "0px 0px 0px rgba(255, 102, 0, 0.3)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            onClick={() => triggerWave('node1')}
            onDrag={(_, info) => {
              setNodePositions(prev => ({
                ...prev,
                node1: { x: info.point.x - 48, y: info.point.y - 48 }
              }));
            }}
          >
            <div className="text-center">
              <div>Conexiones</div>
              <div className="text-xs mt-1 opacity-80">Interactúa</div>
            </div>
            
            {/* Onda expansiva cuando el nodo está activo */}
            {activeNode === 'node1' && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-vibrant"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}
          </motion.div>

          <motion.div 
            className="absolute w-28 h-28 bg-deep-teal rounded-full flex items-center justify-center text-white font-bold z-20 cursor-grab active:cursor-grabbing shadow-lg"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 51, 102, 0.5)" }}
            whileDrag={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 51, 102, 0.7)" }}
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
            onClick={() => triggerWave('node2')}
            onDrag={(_, info) => {
              setNodePositions(prev => ({
                ...prev,
                node2: { x: info.point.x - 56, y: info.point.y - 56 }
              }));
            }}
          >
            <div className="text-center">
              <div>Conocimiento</div>
              <div className="text-xs mt-1 opacity-80">Interactúa</div>
            </div>
            
            {/* Onda expansiva cuando el nodo está activo */}
            {activeNode === 'node2' && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-deep-teal"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}
          </motion.div>

          <motion.div 
            className="absolute w-20 h-20 bg-highlight-yellow rounded-full flex items-center justify-center text-dark font-bold z-20 cursor-grab active:cursor-grabbing shadow-lg"
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 224, 0, 0.5)" }}
            whileDrag={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 224, 0, 0.7)" }}
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
            onClick={() => triggerWave('node3')}
            onDrag={(_, info) => {
              setNodePositions(prev => ({
                ...prev,
                node3: { x: info.point.x - 40, y: info.point.y - 40 }
              }));
            }}
          >
            <div className="text-center">
              <div>Soporte</div>
              <div className="text-xs mt-1 opacity-80">Interactúa</div>
            </div>
            
            {/* Onda expansiva cuando el nodo está activo */}
            {activeNode === 'node3' && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-highlight-yellow"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}
          </motion.div>

          {/* Efecto de partículas flotantes adicionales */}
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className={`absolute w-1.5 h-1.5 rounded-full z-10 ${
                index % 3 === 0 
                  ? 'bg-orange-vibrant/50' 
                  : index % 3 === 1 
                    ? 'bg-deep-teal/50' 
                    : 'bg-highlight-yellow/50'
              }`}
              initial={{ 
                x: Math.random() * 800, 
                y: Math.random() * 400,
                opacity: 0.3 + Math.random() * 0.7
              }}
              animate={{ 
                x: Math.random() * 800,
                y: Math.random() * 400,
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}

          <div className="absolute bottom-4 left-0 right-0 text-center text-light-gray text-sm font-medium">
            Arrastra los nodos para formar nuevas conexiones o haz clic para expandir
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
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
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