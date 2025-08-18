import Header from "../../components/Header/Header";

export const CreateProjectsPage : React.FC = () : React.ReactNode => {
    const projects = [
       {
        title: "Portfolio",
        description: "Un site personnel pour présenter mes expériences, projets et passions.",
        stack: ["React", "Tailwind", "GitHub Pages"],
        image: "/assets/shoothemup.jpg",
        github: "https://github.com/remyhamed/rh",
        demo: "https://remyhamed.github.io/rh/"
        },
        {
        title: "Shoot Them Up",
        description: "Un petit jeu en Python avec Pygame, avec plusieurs niveaux et ennemis IA.",
        stack: ["Python", "Pygame"],
        image: "/assets/shoot-them-up.webp",
        github: "https://github.com/remyhamed/shoothemUp"
        },
        {
        title: "App Client Rust",
        description: "Application cliente en Rust, basée sur une architecture hexagonale.",
        stack: ["Rust", "Hexagonal Architecture"],
        image: "/assets/rust-app.webp",
        github: "#"
        }
    ];
    return (
        <>
        <Header></Header>
<div className="w-full">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 border-b border-gray-300"
        >
          {/* Colonne gauche - Texte */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{project.description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Stack utilisée :</h3>
              <ul className="list-disc ml-5 text-gray-600">
                {project.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-6">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-500 transition"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="
            md:w-1/2
            h-full
            flex
            items-center
            justify-center
            bg-[url(/assets/shoothemup.jpg)] 
            bg-no-repeat
            h-screen
            w-full
            bg-cover
            bg-center">
          </div>
        </div>
      ))}
    </div>
        </>
    );

}