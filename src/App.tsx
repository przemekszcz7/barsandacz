/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#E3D5C5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-[#E3D5C5]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Fish className="text-[#2D5A27] w-8 h-8" />
            <span className="font-serif text-xl font-bold tracking-tight">Bar Sandacz</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#galeria" className="hover:text-[#2D5A27] transition-colors">Galeria</a>
            <a href="#godziny" className="hover:text-[#2D5A27] transition-colors">Godziny</a>
            <a href="#opinie" className="hover:text-[#2D5A27] transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-[#2D5A27] transition-colors">Kontakt</a>
          </div>

          <div className="hidden md:block">
            <a 
              href={FB_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1877F2] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-[#166FE5] transition-colors"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FDFCF8] border-b border-[#E3D5C5] px-4 py-6 flex flex-col gap-4 text-center"
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
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={IMAGES[1]} 
              className="w-full h-full object-cover grayscale-[0.2] brightness-50"
              alt="Bar Sandacz Inowłódz"
            />
          </div>
          
          <div className="relative z-10 text-white text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <h4 className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 opacity-80">Zapraszamy do Inowłodza</h4>
              <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight">
                Smażalnia Ryb<br/>
                <span className="italic text-[#E3D5C5]">Bar Sandacz</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#godziny"
                  className="bg-[#FDFCF8] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E3D5C5] transition-all transform hover:scale-105"
                >
                  Zobacz Godziny
                </a>
                <a 
                  href="tel:886554290"
                  className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" /> 886 554 290
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-24 max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Poczuj smak świeżej ryby</h2>
            <div className="w-24 h-1 bg-[#2D5A27] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl"
              >
                <img 
                  src={src} 
                  alt={`Smażalnia Bar Sandacz - Zdjęcie ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hours Section */}
        <section id="godziny" className="py-24 bg-[#F5F2ED]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src={IMAGES[2]} 
                className="rounded-[3rem] w-full h-[600px] object-cover shadow-2xl"
                alt="Wystrój Bar Sandacz"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="max-w-md">
                <div className="flex items-center gap-3 text-[#2D5A27] mb-6">
                  <Clock className="w-10 h-10" />
                  <span className="uppercase tracking-widest font-bold text-sm">Witamy wszystkich gości</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-gray-900 italic">Godziny Otwarcia</h2>
                
                <div className="space-y-4">
                  {hours.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center py-4 border-b border-[#E3D5C5]/50 ${item.closed ? 'text-gray-400 opacity-60' : ''}`}
                    >
                      <span className="text-xl font-medium">{item.day}</span>
                      <span className={`text-xl font-bold ${!item.closed ? 'text-[#2D5A27]' : ''}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews CTA */}
        <section id="opinie" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 italic">Świetne jedzenie, świetne opinie.</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Nasi goście doceniają świeżą rybę, miłą obsługę i domowy klimat. Przeczytaj wszystkie opinie na naszym Facebooku lub zostaw własną!
            </p>
            <a 
              href={REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-black transition-all group shadow-xl"
            >
              Zobacz Opinie na Facebooku
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Contact/Location */}
        <section id="kontakt" className="py-24 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Odwiedź nas</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <MapPin className="w-8 h-8 text-[#E3D5C5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Lokalizacja</h3>
                      <p className="text-xl text-gray-400">Inowłódz, Polska</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="w-8 h-8 text-[#E3D5C5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Telefon</h3>
                      <p className="text-3xl font-bold text-white tracking-widest mt-1 hover:text-[#E3D5C5] transition-colors">
                        <a href="tel:886554290">886 554 290</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <a 
                    href={FB_LINK}
                    target="_blank"
                    className="flex items-center gap-4 text-[#E3D5C5] hover:text-white transition-colors"
                  >
                    <div className="bg-white/10 p-3 rounded-full">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold border-b border-[#E3D5C5]/30 pb-1">Śledź nas na Facebooku</span>
                  </a>
                </div>
              </div>
              
              <div className="h-[500px] bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                {/* Fake Map integration feel */}
                <div className="absolute inset-0 bg-[#242424] flex items-center justify-center p-8 text-center text-gray-500">
                  <div>
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="text-sm uppercase tracking-[0.2em] mb-6">Inowłódz, Poland</p>
                    <a 
                      href="https://www.google.com/maps/search/Smażalnia+Ryb+Bar+Sandacz+Inowłódz"
                      target="_blank"
                      className="bg-[#E3D5C5] text-[#1A1A1A] px-10 py-4 rounded-full font-bold shadow-lg"
                    >
                      Otwórz Mapę Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-[#E3D5C5]/30 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Smażalnia Ryb Bar Sandacz. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
