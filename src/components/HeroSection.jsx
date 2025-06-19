import { ArrowDown } from "lucide-react"

export const HeroSection = () =>{
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-transparent sm:text-inherit">
  <span className="opacity-0 animate-fade-in"> Hey, I am </span>
  <span className="hidden sm:inline text-primary opacity-0 animate-fade-in-delay-1"> Batyrbekov </span>
  <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Abay </span>
</h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I am a multilingual SDU graduate and frontend developer with a strong technical foundation in React, Tailwind CSS, JavaScript, and Vite. As a graduate of the NFactorial frontend bootcamp and a recipient of a golden certificate in JavaScript, I have developed and deployed responsive, user-focused web applications integrating public APIs and browser storage. 
                    In addition to my IT background, I am fluent in Kazakh, Russian, English (C1), & Chinese (HSK 3).
                     With over 1,850 English lessons taught and experience interpreting at more than 35 international events, I bring a unique combination of technical expertise and cross-cultural communication skills.
                </p>
                <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#project" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
  <span className="text-sm text-muted-foreground mb-2">Scroll</span>
  <ArrowDown className="h-5 w-5 text-primary" />
</div>

    </section>
}
