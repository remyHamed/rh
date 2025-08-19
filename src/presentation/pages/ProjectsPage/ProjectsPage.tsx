import { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/Header/Header";

export const CreateProjectsPage: React.FC = (): React.ReactNode => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const handleScroll = useCallback(() => {
    if (isScrolling.current || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const currentSection = Math.floor(scrollTop / containerHeight);
    
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      isScrolling.current = true;
      const section = scrollContainerRef.current.children[index] as HTMLElement;
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(Math.min(activeSection + 1, 2));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(Math.max(activeSection - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <>
      <Header />
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`block w-3 h-3 rounded-full my-4 transition-all duration-300 ${
              index === activeSection 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Aller à la section ${index + 1}`}
          />
        ))}
      </div>
      <div 
        ref={scrollContainerRef}
        className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        onScroll={handleScroll}
      >
        <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Shoot Them Up</h2>
            <p className="text-lg text-gray-700 mb-6">
              J'ai développé ce shoot'em up en Python avec Pygame en un temps record, démontrant ma capacité d'apprentissage rapide. J'ai conçu le gameplay, créé les sprites et implémenté une IA ennemi utilisant l'apprentissage par renforcement (Q-table). Ce projet exigeant a renforcé ma polyvalence technique et ma passion pour les défis complexes.
            </p>
            <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
            <ul className="list-disc ml-5 text-gray-600 mb-6">
              <li>Python</li>
              <li>Pygame</li>
              <li> Q-Learning</li>
            </ul>
            <div className="flex gap-6">
              <a href="https://github.com/remyhamed/shoothemUp" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition">
                Repo GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-full w-full bg-[url('/assets/shoothemup.jpg')] bg-no-repeat bg-cover bg-center" />
        </section>
                <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Game of life</h2>
            <p className="text-lg text-gray-700 mb-6">
              J'ai co-développé cette implémentation du Jeu de la Vie en adaptant un code existant que j'avais initialement écrit en Java. Mon rôle a consisté à convertir la logique métier et optimiser les algorithmes, tandis que mon binôme a implémenté l'interface graphique avec Pygame. Une collaboration efficace qui démontre ma capacité à travailler sur du code legacy et à m'adapter à différents paradigmes de programmation.            </p>
            <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
            <ul className="list-disc ml-5 text-gray-600 mb-6">
              <li>Python</li>
              <li>tkinter</li>
            </ul>
            <div className="flex gap-6">
              <a href=" https://github.com/remyHamed/GameOfLifePy" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition">
                Repo GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-full w-full bg-[url('/assets/gof.webp')] bg-no-repeat bg-cover bg-center" />
        </section>
        <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Un site personnel pour présenter mes expériences, projets et passions.
            </p>
            <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
            <ul className="list-disc ml-5 text-gray-600 mb-6">
              <li>React</li>
              <li>Tailwind</li>
              <li>GitHub Pages</li>
            </ul>
            <div className="flex gap-6">
              <a href="https://github.com/remyhamed/rh" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition">
                Repo GitHub
              </a>
              <a href="https://remyhamed.github.io/rh/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-500 transition">
                Demo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-full w-full bg-[url('/assets/chat_shark.png')] bg-no-repeat bg-cover bg-center" />
        </section>

        <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">App Client Rust</h2>
            <p className="text-lg text-gray-700 mb-6">
              Application cliente en Rust, basée sur une architecture hexagonale.
            </p>
            <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
            <ul className="list-disc ml-5 text-gray-600 mb-6">
              <li>Rust</li>
              <li>Hexagonal Architecture</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition">
              GitHub
            </a>
          </div>
          <div className="md:w-1/2 h-full w-full bg-[url('/assets/udon.jpg')] bg-no-repeat bg-cover bg-center" />
        </section>
      </div>
    </>
  );
};