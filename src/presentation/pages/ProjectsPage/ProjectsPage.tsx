import Header from "../../components/Header/Header";

export const CreateProjectsPage : React.FC = () : React.ReactNode => {
    return (
        <>
          <Header></Header>
          <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ">
            <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
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
                    GitHub
                  </a>
                  <a href="https://remyhamed.github.io/rh/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-500 transition">
                    Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 h-full w-full bg-[url('/assets/shoothemup.jpg')] bg-no-repeat bg-cover bg-center" />
            </section>
            <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Shoot Them Up</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Un petit jeu en Python avec Pygame, avec plusieurs niveaux et ennemis IA.
                </p>
                <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
                <ul className="list-disc ml-5 text-gray-600 mb-6">
                  <li>Python</li>
                  <li>Pygame</li>
                </ul>
                <a href="https://github.com/remyhamed/shoothemUp" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition">
                  GitHub
                </a>
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
}