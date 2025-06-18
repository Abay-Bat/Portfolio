import { useState } from "react";
import { cn } from "../lib/utils";

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

   
  const skills = [
    // Frontend Core
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 88, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Vite", level: 78, category: "tools" },
    { name: "Redux", level: 75, category: "frontend" },
    { name: "Next.js", level: 70, category: "frontend" },

    // Styling & Animation
    { name: "Responsive Design", level: 90, category: "frontend" },
    { name: "Framer Motion", level: 75, category: "frontend" },
    { name: "ShadCN/UI", level: 70, category: "frontend" },

    // Backend & Data
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express.js", level: 65, category: "backend" },
    { name: "MongoDB", level: 65, category: "database" },
    { name: "Firebase", level: 60, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "JSON", level: 92, category: "data" },

    // Tools & Platforms
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "NPM/Yarn", level: 82, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Vercel/Netlify", level: 80, category: "tools" },
    { name: "Chrome DevTools", level: 88, category: "tools" },

    // Languages & Communication
    { name: "English (C1)", level: 95, category: "language" },
    { name: "Kazakh", level: 100, category: "language" },
    { name: "Russian", level: 100, category: "language" },
    { name: "Chinese (HSK 3)", level: 60, category: "language" },

    // Soft & Other Skills
    { name: "Public Speaking", level: 90, category: "soft" },
    { name: "Translation/Localization", level: 95, category: "soft" },
    { name: "Team Collaboration", level: 85, category: "soft" },
    { name: "Project Management", level: 75, category: "soft" },
    { name: "UI/UX Thinking", level: 80, category: "design" }
  ];
  
 const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory );

  const categories = ["all", "frontend", "backend", "tools", "database", "data", "language", "soft", "design"]

  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
            <button key={key} 
            onClick={()=> setActiveCategory(category)}
            className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary/70 text-foreground hover:bd-secondary"

                )}>
                {category}
            </button>
        ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
             <div className="text-left mb-4 ">
             <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
            style={{width: skill.level + "%"}} />
            </div>

            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
