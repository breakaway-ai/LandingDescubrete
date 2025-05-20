import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              className="mb-6 text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Descúbrete<span className="text-orange-vibrant">+</span>
            </motion.div>
            <motion.p 
              className="text-white/80 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Uniendo mentes afines que desean expandir sus horizontes tanto a nivel personal como en sus carreras.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Facebook Icon */}
              <a 
                href="https://www.facebook.com/profile.php?id=61553590869891" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-vibrant transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              
              {/* Instagram Icon with external image */}
              <a 
                href="https://www.instagram.com/descubrete_mx/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-vibrant transition-colors p-2"
              >
                <img 
                  src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
              
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/company/descubretemx/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-vibrant transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Enlaces Rápidos
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { name: 'Inicio', href: '#' },
                { name: 'Comunidad', href: '#community' },
                { name: 'Nepsis', href: '#nepsis' },
                { name: 'Descargar', href: '#download' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-orange-vibrant transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Legal
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { name: 'Términos de Servicio', href: '#' },
                { name: 'Política de Privacidad', href: '#' },
                { name: 'Cookies', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-orange-vibrant transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Descarga la App
            </motion.h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-deep-teal/50 hover:bg-deep-teal text-white px-5 py-2 rounded-xl font-medium flex items-center justify-start gap-3 transition-colors"
                whileHover={{ scale: 1.02, x: 3 }}
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src="/src/assets/images/LogoGooglePlay.png" 
                  alt="Google Play" 
                  className="h-6"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">DESCARGA EN</div>
                  <div className="font-medium text-sm">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-deep-teal/50 hover:bg-deep-teal text-white px-5 py-2 rounded-xl font-medium flex items-center justify-start gap-3 transition-colors"
                whileHover={{ scale: 1.02, x: 3 }}
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src="/src/assets/images/LogoAppStore.webp" 
                  alt="App Store" 
                  className="h-6"
                />
                <div className="text-left">
                  <div className="text-xs opacity-80">DESCARGA EN</div>
                  <div className="font-medium text-sm">App Store</div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="border-t border-white/10 pt-8 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} Descúbrete+. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 