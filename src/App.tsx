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
  X
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
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#E3D5C5] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-[#E3D5C5]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Fish className="text-[#2D5A27] w-8 h-8" />
            <span className="font-serif text-xl font-bold tracking-tight">Bar Sandacz</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {["Galeria", "Godziny", "Opinie", "Kontakt"].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                whileHover={{ y: -2 }}
                className="hover:text-[#2D5A27] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2D5A27] transition-all group-hover:w-full" />
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
              className="bg-[#1877F2] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:shadow-lg transition-shadow"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </motion.a>
          </motion.div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="md:hidden bg-[#FDFCF8] border-b border-[#E3D5C5] px-4 py-6 flex flex-col gap-4 text-center overflow-hidden"
            >
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium">Galeria</a>
              <a href="#godziny" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium">Godziny</a>
              <a href="#opinie" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium">Opinie</a>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium">Kontakt</a>
              <a 
                href={FB_LINK}
                target="_blank"
                className="bg-[#1877F2] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
              >
                <Facebook className="w-5 h-5" /> Facebook
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img 
              src={IMAGES[1]} 
              className="w-full h-full object-cover grayscale-[0.2] brightness-50"
              alt="Bar Sandacz Inowłódz"
            />
          </motion.div>
          
          <div className="relative z-10 text-white text-center px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h4 
                variants={fadeInUp}
                className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 opacity-80"
              >
                Zapraszamy do Inowłodza
              </motion.h4>
              <motion.h1 
                variants={fadeInUp}
                className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight py-2"
              >
                Smażalnia Ryb<br/>
                <span className="italic text-[#E3D5C5]">Bar Sandacz</span>
              </motion.h1>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a 
                  href="#godziny"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FDFCF8] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg shadow-xl"
                >
                  Zobacz Godziny
                </motion.a>
                <motion.a 
                  href="tel:886554290"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" /> 886 554 290
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-24 max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Poczuj smak świeżej ryby</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-[#2D5A27] mx-auto"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                variants={itemScale}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl bg-gray-100"
              >
                <img 
                  src={src} 
                  alt={`Smażalnia Bar Sandacz - Zdjęcie ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Hours Section */}
        <section id="godziny" className="py-24 bg-[#F5F2ED]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src={IMAGES[2]} 
                className="rounded-[3rem] w-full h-[600px] object-cover shadow-2xl"
                alt="Wystrój Bar Sandacz"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="max-w-md">
                <div className="flex items-center gap-3 text-[#2D5A27] mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <Clock className="w-10 h-10" />
                  </motion.div>
                  <span className="uppercase tracking-widest font-bold text-sm">Witamy wszystkich gości</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-gray-900 italic">Godziny Otwarcia</h2>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {hours.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className={`flex justify-between items-center py-4 border-b border-[#E3D5C5]/50 ${item.closed ? 'text-gray-400 opacity-60' : ''}`}
                    >
                      <span className="text-xl font-medium">{item.day}</span>
                      <span className={`text-xl font-bold ${!item.closed ? 'text-[#2D5A27]' : ''}`}>
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews CTA */}
        <section id="opinie" className="py-32 bg-white relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            className="absolute -top-20 -right-20 pointer-events-none"
          >
            <Star className="w-96 h-96 fill-current text-black" />
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-1 mb-6"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: -30 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-8 h-8 fill-[#FFB800] text-[#FFB800]" />
                </motion.div>
              ))}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl font-bold mb-8 italic"
            >
              Świetne jedzenie, świetne opinie.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Nasi goście doceniają świeżą rybę, miłą obsługę i domowy klimat. Przeczytaj wszystkie opinie na naszym Facebooku lub zostaw własną!
            </motion.p>
            <motion.a 
              href={REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-black transition-all group shadow-xl"
            >
              Zobacz Opinie na Facebooku
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </section>

        {/* Contact/Location */}
        <section id="kontakt" className="py-24 bg-[#1A1A1A] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Odwiedź nas</h2>
                
                <div className="space-y-10">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <MapPin className="w-8 h-8 text-[#E3D5C5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#E3D5C5]">Lokalizacja</h3>
                      <p className="text-xl text-gray-400">Inowłódz, Polska</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="w-8 h-8 text-[#E3D5C5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#E3D5C5]">Telefon</h3>
                      <p className="text-3xl font-bold text-white tracking-widest mt-1 hover:text-[#E3D5C5] transition-colors">
                        <a href="tel:886554290">886 554 290</a>
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-16">
                  <motion.a 
                    href={FB_LINK}
                    target="_blank"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-[#E3D5C5] hover:text-white transition-colors group"
                  >
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#1877F2] transition-colors">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold border-b border-[#E3D5C5]/30 pb-1">Śledź nas na Facebooku</span>
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                className="h-[500px] bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.913506945084!2d20.2207904!3d51.5264627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710be28c9f041ff%3A0x6fb0c8fe484ff26a!2zU21hxbxhbG5pYSByeWIgIkJhciBTYW5kYWN6Ig!5e0!3m2!1spl!2spl!4v1716121800000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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

      <footer className="py-12 border-t border-[#E3D5C5]/30 text-center text-gray-500 text-sm">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Smażalnia Ryb Bar Sandacz. Wszelkie prawa zastrzeżone.
        </motion.p>
      </footer>
    </div>
  );
}

