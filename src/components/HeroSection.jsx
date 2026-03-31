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

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
  IT Specialist and Engineer with hands-on experience in production infrastructure, digital broadcasting, and web development. A fast learner with a proven track record, including an nFactorial Gold Certificate. Proficient in 5+ languages with experience at 35+ international events, I leverage technical expertise and systems thinking to support and modernize industrial-grade IT systems.
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
