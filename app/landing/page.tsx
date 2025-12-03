"use client"
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, CircleUser } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité avec nos outils"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble de manière plus efficace"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    title: "Analyses détaillées",
    description: "Suivez vos performances avec des données précises"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    title: "Réunions productives",
    description: "Organisez et planifiez vos réunions facilement"
  }
];

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);


  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
  
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [carouselItems.length]);
  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white overflow-auto font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[70px] flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <CircleUser className="w-10 h-10 rounded-lg text-slate-400" aria-label="Utilisateur" />
          <span className="text-[#000000] font-semibold">Logo</span>
        </div>

        <nav className="flex gap-6 md:gap-8" aria-label="Navigation principale">
          <a href="#accueil" className="text-[#000000] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">Accueil</a>
          <a href="#fonctionnalites" className="text-[#000000] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">Fonctionnalités</a>
          <a href="#contact" className="text-[#000000] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="accueil" className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          aria-hidden="true"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="mb-4 text-white text-2xl md:text-4xl font-bold">Transformez votre façon de travailler</h1>
          <p className="text-white mb-8 text-lg md:text-xl">
            Découvrez une plateforme innovante qui révolutionne la gestion de vos projets et optimise votre productivité
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:shadow-lg transition-shadow">
              Commencer
            </button>
            <a href="#fonctionnalites" className="text-white text-sm underline focus:outline-none focus:ring-2 focus:ring-white">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Fonctionnalités / Carousel */}
      <section id="fonctionnalites" className="py-16 px-4 md:px-12 bg-white" aria-label="Nos fonctionnalités">
        <h2 className="text-center mb-12 text-slate-800 text-2xl md:text-3xl font-semibold">Nos fonctionnalités</h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="min-w-[100%] sm:min-w-[50%] md:min-w-[25%] px-2 md:px-3">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={item.image} alt={`Image : ${item.title}`} className="w-full h-48 object-cover"/>
                    <div className="p-5">
                      <h3 className="mb-2 font-medium">{item.title}</h3>
                      <p className="text-[#002673] text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèches */}
          <button
            aria-label="Slide précédente"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => scrollToSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length)}
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
          </button>
          <button
            aria-label="Slide suivante"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => scrollToSlide((currentSlide + 1) % carouselItems.length)}
          >
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* Bullets */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                aria-label={`Aller à la slide ${index + 1}`}
                className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'}`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 md:px-12 bg-gradient-to-br from-slate-50 to-slate-100" aria-labelledby="contact-title">
        <div className="max-w-2xl mx-auto">
          <h2 id="contact-title" className="text-center mb-10 text-3xl text-slate-800 font-semibold">Contactez-nous</h2>

          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Nom</label>
              <input id="name" type="text" required placeholder="Nom" className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input id="email" type="email" required placeholder="Email" className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea id="message" required placeholder="Message" rows={4} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
            <button type="submit" className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-md transition-shadow">
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
            <p className="text-[#000000] text-sm">© 2025 Entreprise. Tous droits réservés.</p>
            <div className="flex gap-3">
              <a href="#" className="text-[#000000] text-xs focus:outline-none focus:ring-2 focus:ring-purple-500">Confidentialité</a>
              <a href="#" className="text-[#000000] text-xs focus:outline-none focus:ring-2 focus:ring-purple-500">Conditions</a>
              <a href="#" className="text-[#000000] text-xs focus:outline-none focus:ring-2 focus:ring-purple-500">Cookies</a>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500">
              <Facebook className="w-4 h-4 text-slate-400" />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500">
              <Twitter className="w-4 h-4 text-slate-400" />
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500">
              <Instagram className="w-4 h-4 text-slate-400" />
            </a>
            <a href="#" aria-label="Linkedin" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500">
              <Linkedin className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
