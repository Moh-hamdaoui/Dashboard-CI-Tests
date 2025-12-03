"use client";
import { useState, useEffect, useRef } from "react";
import { Home, Calendar, BarChart3, Settings, Search, Plus, X, CircleUser } from "lucide-react";

const events = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NTc0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "15 Décembre 2025",
    description: "Image de dance dans un bar"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG11c2ljfGVufDF8fHx8MTc2NDU4NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "22 Décembre 2025",
    description: "Image de dance dans un bar"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjQ1ODQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "30 Décembre 2025",
    description: "Image de dance dans un bar"
  },
];

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  // Écouter Échap
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Focus automatique modal
  useEffect(() => {
    if (openModal) {
      firstInputRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [openModal]);

  return (
    <div className="relative w-[1440px] h-[900px] bg-[#FAFAFA] overflow-hidden font-sans">
      {/* Header fixe en haut */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-white shadow-sm flex items-center px-6 gap-6 z-30">
        <CircleUser className="w-10 h-10 rounded-lg text-slate-400" aria-label="icone utilisateur" />
        <div className="flex-1 max-w-md relative">
          <label htmlFor="search" className="sr-only">
            Recherche d'un événement
          </label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="search"
            type="text"
            placeholder="Rechercher…"
            className="w-full h-10 pl-10 pr-4 bg-slate-50 rounded-lg border border-slate-200"
          />
        </div>
      </header>

      {/* Nav FIXE (toujours visible) */}
      <nav
        aria-label="Navigation principale"
        className="fixed top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200 z-40"
      >
        <div className="flex flex-col gap-2 p-3 pt-6">
          <button aria-label="Accueil" className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white cursor-pointer hover:shadow-md transition-shadow">
            <Home className="w-5 h-5" />
          </button>
          <button aria-label="Calendrier" className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
          <button aria-label="Statistiques" className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <BarChart3 className="w-5 h-5" />
          </button>
          <button aria-label="Paramètres" className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Main : décalé pour laisser la nav fixe sur la gauche */}
      <main
        className="absolute top-[70px] left-[70px] right-0 bottom-0 p-8"
        aria-label="Liste des événements"
      >
        <h3 className="mb-6 text-lg font-semibold">Mes évènements</h3>

        {/* Conteneur scrollable précis et indépendant */}
        <div className="content-scroll h-[calc(100%-3rem)] overflow-x-auto pr-4">
          <ul className="grid grid-cols-3 gap-6">
            {events.map((event) => (
              <li key={event.id} tabIndex={0} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img src={event.image} alt={event.description} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="mb-2 font-medium">{event.title}</p>
                  <p className="text-[#000000] mb-4">{event.date}</p>
                  <button
                    ref={openButtonRef}
                    onClick={() => setOpenModal(true)}
                    className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                  >
                    Ajouter un événement
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Modal (au-dessus de tout) */}
      {openModal && (
        <dialog
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 w-full h-full p-0 bg-black/20 flex items-center justify-center"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-8 relative">
            <h2 id="modal-title" className="mb-6 font-semibold text-lg">
              Ajouter un évènement
            </h2>

            <button
              aria-label="Fermer la modal"
              className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center text-[#D5D5D5]"
              onClick={() => setOpenModal(false)}
            >
              <X className="w-4 h-4" />
            </button>

            <form className="space-y-4 mb-6">
              <div>
                <label htmlFor="event-name" className="block font-medium">
                  Nom de l'événement
                </label>
                <input
                  ref={firstInputRef}
                  id="event-name"
                  type="text"
                  placeholder="Nom de l'évènement"
                  className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>
              <div>
                <label htmlFor="event-date" className="block font-medium">
                  Date de l'événement
                </label>
                <input
                  id="event-date"
                  type="text"
                  placeholder="JJ/MM/AAAA"
                  className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-md transition-shadow"
              >
                Créer
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
