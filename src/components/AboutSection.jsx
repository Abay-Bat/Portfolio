import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Frontend Developer with a Global Perspective</h3>
                
               
            <p className="text-muted-foreground">I create responsive apps with React and Tailwind, bridging tech and languages.</p>
           
            <p className="text-muted-foreground">With a background in language and interpretation, I bring clarity and a user-first approach to every project.
</p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    Get To know 
                </a>
            
                <a href="https://drive.google.com/file/d/1-aO1CtGEsEaMIsaiy5cMzINi1EpH_q7A/view?usp=sharing" target="_blank"  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    Download CV 
                </a>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-6 ">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start  gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                       <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Engineering Scalable Web Solutions</h4>
                            <p className="text-muted-foreground">
                                I craft high-performance, responsive apps using React and modern UI frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start  gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                       <User className="h-6 w-6 text-primary"/>
                        </div>
                         <div className="text-left">
                            <h4 className="font-semibold text-lg">Creating Seamless User Experiences</h4>
                            <p className="text-muted-foreground">
                                I design intuitive, accessible interfaces with a strong focus on usability, performance, and cross-device consistency.
                            </p>
                        </div>
                    </div></div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start  gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                       <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                         <div className="text-left">
                            <h4 className="font-semibold text-lg">Delivering Clean & Maintainable Code</h4>
                            <p className="text-muted-foreground">
                                I follow best practices in architecture and development to build reliable, scalable applications ready for real-world use.
                            </p>
                        </div>
                    </div></div>
            </div>
        </div>

        </div>
        </section>
}
