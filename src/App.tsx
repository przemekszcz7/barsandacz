/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Fish, 
  MapPin, 
  Phone, 
  Clock, 
  Facebook, 
  Star, 
  ChevronRight,
  Menu,
  X,
  Waves,
  Ship,
  Anchor
} from "lucide-react";
import { useState } from "react";

const IMAGES = [
  "https://i.ibb.co/RGV8rTXp/685103572-943016131808153-7121733592426159639-n.jpg",
  "https://i.ibb.co/XxJLs95h/686118715-943016068474826-5370037828059026265-n.jpg",
  "https://i.ibb.co/p6sQ3HVP/684942518-943015985141501-5712463085174841890-n.jpg",
  "https://i.ibb.co/CKVytpTy/687045568-943016011808165-5445665923146372564-n.jpg"
];

const FB_LINK = "https://www.facebook.com/profile.php?id=100082993257549";
const REVIEWS_LINK = "https://www.facebook.com/profile.php?id=100082993257549&sk=reviews";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hours = [
    { day: "Poniedziałek", time: "ZAMKNIĘTE", closed: true },
    { day: "Wtorek", time: "12:00 - 20:00" },
    { day: "Środa", time: "12:00 - 20:00" },
    { day: "Czwartek", time: "12:00 - 20:00" },
    { day: "Piątek", time: "12:00 - 20:00" },
    { day: "Sobota", time: "12:00 - 20:00" },
    { day: "Niedziela", time: "12:00 - 20:00" },
  ];

  return (
    <div className="min-h-screen bg-sand-100 text-marine-900 font-sans selection:bg-sea-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-sand-100/90 backdrop-blur-md border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 bg-marine-900 rounded-lg">
              <Anchor className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-bold tracking-tight text-marine-900">Bar Sandacz</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sea-500">Smażalnia Ryb</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-marine-900">
            {["Galeria", "Godziny", "Opinie", "Kontakt"].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                whileHover={{ y: -2 }}
                className="hover:text-sea-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sea-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <motion.a 
              href={FB_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1877F2] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg hover:shadow-[#1877F2]/30 transition-shadow"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </motion.a>
          </motion.div>

          <button className="md:hidden text-marine-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-sand-100 border-b border-sand-200 px-4 py-8 flex flex-col gap-6 text-center overflow-hidden"
            >
              {["Galeria", "Godziny", "Opinie", "Kontakt"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-xl font-bold uppercase tracking-widest text-marine-900"
                >
                  {item}
                </a>
              ))}
              <a 
                href={FB_LINK}
                target="_blank"
                className="bg-[#1877F2] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-xl shadow-[#1877F2]/20 text-marine-900"
              >
                <Facebook className="w-5 h-5 text-white" /> Facebook
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
            className="absolute inset-0"
          >
            <img 
              src={IMAGES[1]} 
              className="w-full h-full object-cover brightness-[0.4]"
              alt="Bar Sandacz Inowłódz"
            />
          </motion.div>
          
          {/* Animated Waves Background Overlay */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[100px] text-sand-100 fill-current opacity-20 animate-wave-slow">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.7,56.46,105,71.21,158.85,73.49,211.39,75.7,263.39,64.24,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="relative z-10 text-white text-center px-4 max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center gap-2 mb-6"
              >
                <Waves className="text-sea-500 w-6 h-6 animate-pulse" />
                <h4 className="uppercase tracking-[0.4em] text-xs font-black text-sea-500">
                  Autentyczna Kuchnia Rybna
                </h4>
                <Waves className="text-sea-500 w-6 h-6 animate-pulse" />
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="font-serif text-6xl md:text-[9rem] font-bold mb-8 leading-[0.9] py-4"
              >
                Morski Klimat <br/>
                <span className="italic text-sand-200">nad Pilicą</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium"
              >
                Zapraszamy do Inowłodza na najświeższą rybę w okolicy. Rodzinna atmosfera i smak, który zapamiętasz na długo.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <motion.a 
                  href="#godziny"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-marine-900 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl border border-white/10"
                >
                  Odwiedź nas dziś
                </motion.a>
                <motion.a 
                  href="tel:886554290"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 text-white"
                >
                  <Phone className="w-4 h-4" /> 886 554 290
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-32 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-marine-900 leading-tight">
                Złapane w sieć <br/>
                <span className="text-sea-500 italic">naszego menu</span>
              </h2>
              <p className="text-xl text-marine-700/70 font-medium">
                Poczuj zapach świeżości. Każde danie przygotowujemy z pasją i dbałością o każdy detal.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-marine-900 p-8 rounded-3xl text-white flex items-center gap-4 shadow-2xl rotate-3"
            >
              <Ship className="w-12 h-12 text-sea-500" />
              <div>
                <p className="text-xs uppercase tracking-widest font-black text-sea-500 mb-1">Potwierdzona jakość</p>
                <p className="text-lg font-bold text-white">Zawsze świeża dostawa</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                variants={itemScale}
                whileHover={{ y: -15, rotate: i % 2 === 0 ? 2 : -2 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-2xl bg-sand-200 border-8 border-white"
              >
                <img 
                  src={src} 
                  alt={`Smażalnia Bar Sandacz - Zdjęcie ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-marine-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Anchor className="text-white w-12 h-12 drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Hours & Atmosphere Section */}
        <section id="godziny" className="py-32 bg-marine-900 text-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4A90E2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <img 
                src={IMAGES[2]} 
                className="rounded-[4rem] w-full h-[700px] object-cover shadow-3xl border-[20px] border-white/5"
                alt="Wystrój Bar Sandacz"
              />
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-sea-500 p-10 rounded-full shadow-2xl border-8 border-marine-900"
              >
                <Waves className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="max-w-xl">
                <h2 className="font-serif text-5xl md:text-7xl font-bold mb-12 text-white">
                  Port Otwarty <br/>
                  <span className="text-sea-500 italic">Dla Ciebie</span>
                </h2>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {hours.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className={`flex justify-between items-center py-5 border-b border-white/10 ${item.closed ? 'opacity-30' : ''}`}
                    >
                      <span className="text-xl font-bold uppercase tracking-[0.2em]">{item.day}</span>
                      <div className="flex items-center gap-4">
                        {!item.closed && <Clock className="w-5 h-5 text-sea-500" />}
                        <span className={`text-2xl font-black ${!item.closed ? 'text-sea-500' : 'text-white'}`}>
                          {item.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10 flex items-start gap-6">
                  <div className="bg-sea-500/20 p-4 rounded-xl">
                    <MapPin className="text-sea-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Nasza Przystań</h4>
                    <p className="text-white/60 leading-relaxed text-lg">
                      Inowłódz, Polska.<br/>
                      Tuż nad brzegiem Pilicy, w sercu natury.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="opinie" className="py-40 bg-sand-100 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-3 mb-10"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-12 h-12 fill-[#FFB800] text-[#FFB800] drop-shadow-xl" />
              ))}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-8xl font-bold mb-10 text-marine-900 leading-tight italic"
            >
              "Najlepszy Sandacz <br/>jakiego jadłem!"
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-marine-700/80 mb-16 max-w-3xl mx-auto font-medium italic leading-relaxed"
            >
              "Wspaniałe miejsce z duszą. Ryba świeża, chrupiąca i idealnie doprawiona. Atmosfera sprawia, że czujesz się jak u starych dobrych znajomych. Polecam każdemu, kto odwiedza Inowłódz!"
            </motion.p>
            
            <motion.a 
              href={REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-marine-900 text-white px-12 py-6 rounded-full font-black text-lg uppercase tracking-widest hover:bg-marine-800 transition-all shadow-3xl text-white"
            >
              Dołącz do załogi na Facebooku
              <ChevronRight className="w-6 h-6 text-sea-500" />
            </motion.a>
          </div>
        </section>

        {/* Contact/Map Section */}
        <section id="kontakt" className="pt-24 pb-48 bg-marine-900 text-white relative overflow-hidden">
          {/* Animated Wave Background Top */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[120px] text-sand-100 fill-current animate-wave">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.7,56.46,105,71.21,158.85,73.49,211.39,75.7,263.39,64.24,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-sea-500" />
                  <span className="uppercase tracking-[0.4em] text-xs font-black text-sea-500">Kontakt</span>
                </div>
                <h2 className="font-serif text-6xl md:text-8xl font-bold mb-16 text-white leading-tight">
                  Zadzwoń do <br/>
                  <span className="italic text-sea-500">Kapitana</span>
                </h2>
                
                <div className="space-y-12">
                  <motion.div whileHover={{ x: 15 }} className="flex gap-8 items-start group">
                    <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-sea-500/20 transition-colors border border-white/5">
                      <Phone className="w-10 h-10 text-sea-500" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-black text-white/40 mb-2">Telefon Rezerwacje</h3>
                      <a href="tel:886554290" className="text-4xl md:text-5xl font-black text-white tracking-tighter hover:text-sea-500 transition-colors">
                        886 554 290
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 15 }} className="flex gap-8 items-start group">
                    <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-sea-500/20 transition-colors border border-white/5">
                      <MapPin className="w-10 h-10 text-sea-500" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-black text-white/40 mb-2">Nasza Baza</h3>
                      <p className="text-3xl font-bold text-white tracking-tight">
                        Inowłódz, Polska
                      </p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 15 }} className="flex gap-8 items-start group">
                    <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-[#1877F2]/20 transition-colors border border-white/5">
                      <Facebook className="w-10 h-10 text-[#1877F2]" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-black text-white/40 mb-4">Media Społecznościowe</h3>
                      <a 
                        href={FB_LINK}
                        target="_blank"
                        className="inline-block py-3 px-8 rounded-full border border-white/10 font-bold hover:bg-white hover:text-marine-900 transition-all text-sm uppercase tracking-widest text-white hover:text-marine-900"
                      >
                        Bar Sandacz na Facebooku
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-[650px] bg-white/5 rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl relative"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.913506945084!2d20.2207904!3d51.5264627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710be28c9f041ff%3A0x6fb0c8fe484ff26a!2zU21hxbxhbG5pYSByeWIgIkJhciBTYW5kYWN6Ig!5e0!3m2!1spl!2spl!4v1716121800000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.5) invert(0.9) contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Bar Sandacz"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-marine-900 border-t border-white/5 text-center px-4 relative z-10 overflow-hidden">
        <Fish className="w-12 h-12 text-sea-500 mx-auto mb-8 animate-bounce" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-white/40 font-bold uppercase tracking-[0.2em] text-xs mb-12">
          <a href="#galeria" className="hover:text-sea-500 transition-colors">Galeria</a>
          <a href="#godziny" className="hover:text-sea-500 transition-colors">Godziny Otwarcia</a>
          <a href="#opinie" className="hover:text-sea-500 transition-colors">Opinie Gości</a>
          <a href="#kontakt" className="hover:text-sea-500 transition-colors">Zadzwoń do nas</a>
        </div>
        <p className="text-white/20 text-xs font-medium max-w-sm mx-auto leading-relaxed uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Smażalnia Ryb Bar Sandacz.<br/>
          Strona wykonana z nautical-klimatem.
        </p>
      </footer>
    </div>
  );
}

