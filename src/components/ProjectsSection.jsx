import { Description } from "@radix-ui/react-toast"
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "JumysTap",
    description: "Job platform for skill-based hiring.",
    image: "./projects/JumysTap.png",
    tags: ["React", "Tailwind CSS", "Form Handling", "LocalStorage", "UI Logic"],
    gitHubURL: "https://github.com/Abay-Bat/Project-1-Jumys-Tap-Desktop",
  },
  {
    id: 2,
    title: "Media_as_Medium",
    description: "News app fetching and displaying articles from the NYT API.",
    image: "./projects/Media_as_Medium.png",
    tags: ["API Integration", "Async/Await", "Dynamic Routing", "Error Handling", "Data Fetching"],
    gitHubURL: "https://github.com/Abay-Bat/Project-3-Media_As_Medium",
  },
  {
    id: 3,
    title: "To_Do_App",
    description: "Feature-rich task manager with persistent state and task filters.",
    image: "./projects/To_Do_App.png",
    tags: ["React Hooks", "State Management", "LocalStorage", "Conditional Rendering", "UX Design"],
    gitHubURL: "https://github.com/Abay-Bat/Project-4-To-Do-App",
  },
];

export  const ProjectsSection = () => {

    return <section id="project" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                 A selection of my recent projects showcasing practical skills in React, UI design, and web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6 ">
                            <div className="flex flex-wrap gap-2 mb-4 ">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font:medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                     

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 ">
                                        <a 
                                        href={project.gitHubURL}
                                        target="_blank" 
                                        className="text-foreground/80 hover:text-primary duration-300"> 
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                                </div>
                        </div>
                    ))}
            </div>

                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/Abay-Bat">
                            Check My GitHub <ExternalLink size={16}/>
                        </a>
                    </div>


        </div>
    </section>
}