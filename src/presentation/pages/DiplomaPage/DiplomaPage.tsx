import Header from "../../components/Header/Header";

export const CreateDiplomaPage : React.FC = () : React.ReactNode => {

    return (
        <>
          <Header />
          <div 
            className="w-full  h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
          >
            <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100 border-b border-gray-300">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">
                  Master Expert Ingénierie du Développement et en Architecture Logiciel
                </h2>
                <h3 className="text-xl font-semibold mb-2">
                  2024-2025
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Le Mastère en Architecture des Logiciels de l'ESGI est une formation de deux ans visant à former des experts capables de concevoir, développer et gérer des applications logicielles robustes et évolutives. Ce programme met l'accent sur l'apprentissage pratique à travers des workshops, des projets professionnels et une alternance obligatoire, permettant aux étudiants d'acquérir une maîtrise avancée des langages de programmation tels que Java, C# et des technologies comme JEE et .NET.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Stack utilisée :
                </h3>
                <ul className="list-disc ml-5 text-gray-600 mb-6">
                  <li>C#</li>
                  <li>Frameworks JEE </li>
                  <li>Java</li>
                  <li>Spring</li>
                  <li>Rust</li>
                  <li>Flutter</li>
                </ul>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/rhamed/" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-800 text-white rounded-xl shadow hover:bg-blue-500 transition">
                    Linkedin
                  </a>
                  <a href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-800 text-white rounded-xl shadow hover:bg-blue-500 transition">
                    ESGI
                  </a>
                </div>
              </div>
            </section>
            <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100 border-b border-gray-300">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Bachelor chef de projet logiciel et réseau, Informatique</h2>
                <h3 className="text-xl font-semibold mb-2">
                  2021-2022
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Le Bachelor en Architecture des Logiciels de l'ESGI est une formation intensive d'un an destinée aux personnes en reconversion professionnelle, titulaires d'un niveau Bac à Bac+2. Ce programme offre une solide base théorique et des compétences opérationnelles en conception, développement et déploiement d'applications multi-plateformes. Les étudiants maîtrisent les principaux langages de programmation tels que Java, PHP et JavaScript, et acquièrent des compétences en gestion de projets informatiques.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Stack utilisée :
                </h3>
                <ul className="list-disc ml-5 text-gray-600 mb-6">
                  <li>Java</li>
                  <li>php</li>
                  <li>Js</li>
                  <li>C</li>
                  <li>Api  NodeJS </li>
                  <li>Langage Java avancé : POO, lambdas, stream, JavaFX </li>
                  <li> Scripting Python </li>
                  <li>Théorie des langages et compilation </li>
                  <li>IA</li>
                  <li>Linux orienté Développeurs</li>
                  <li>Conception de bases de données relationnelles</li>
                  <li>Bases de données NoSQL</li>
                </ul>
                <div className="flex gap-6">
                  <a href="https://github.com/remyhamed/shoothemUp" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-800 text-white rounded-xl shadow hover:bg-blue-500 transition">
                    Linkedin
                  </a>
                  <a href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-800 text-white rounded-xl shadow hover:bg-blue-500 transition">
                    ESGI
                  </a>
                </div>
              </div>
            </section>
            <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100 border-b border-gray-300">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Licence Histoire</h2>
                <h3 className="text-xl font-semibold mb-2">
                  2013-2016
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  J'ai suivi une licence d'histoire à l'Université Paris Nanterre (Paris Ouest), où j'ai eu l'opportunité d'être formé par des professeurs remarquables tels que Didier Musiedlak, spécialiste du fascisme et du nazisme, et Hervé Inglebert. Leur enseignement m'a profondément marqué et m'a permis de développer une réflexion critique et une compréhension approfondie des enjeux historiques et politiques.
                </p>
                <div className="flex gap-6">
                  <a href="https://formations.parisnanterre.fr/fr/index.html" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-800 text-white rounded-xl shadow hover:bg-red-500 transition">
                    Paris Nanterre
                  </a>
                </div>
              </div>
            </section>

          </div>
        </>
    );

}