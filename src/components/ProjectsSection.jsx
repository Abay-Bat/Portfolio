import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ArtNovus",
    description: "Platform connecting clients with trusted construction experts.",
    image: "./projects/ArtNovus.png",
    tags: ["React", "Form Handling", "LocalStorage"],
    launchURL: "https://www.artnovus.kz/",
    gitHubURL: "https://github.com/Abay-Bat/ArtNovus",
  },
  {
    id: 2,
    title: "Qazaq News",
    description: "News app fetching and displaying articles from the NYT API.",
    image: "./projects/Media_as_Medium.png",
    tags: ["API Integration", "Async/Await", "Dynamic Routing", "Data Fetching"],
    launchURL: "https://abay-bat.github.io/Project-3-Media_As_Medium/",
    gitHubURL: "https://github.com/Abay-Bat/Project-3-Media_As_Medium",
  },
  {
    id: 3,
    title: "ToDo App",
    description: "Feature-rich task manager with persistent state and task filters.",
    image: "./projects/To_Do_App.png",
    tags: ["React Hooks", "State Management", "Conditional Rendering", "UX Design"],
    launchURL: "https://project-4-to-do-app.vercel.app/",
    gitHubURL: "https://github.com/Abay-Bat/Project-4-To-Do-App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Projects highlighting skills in React, UI, and web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.launchURL, "_blank")}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-transform hover:scale-[1.01] block cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div
                  className="flex items-center text-foreground/80"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card's onClick
                    window.open(project.gitHubURL, "_blank");
                  }}
                >
                  <Github size={20} className="hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Abay-Bat"
            rel="noopener noreferrer"
          >
            Check My GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
