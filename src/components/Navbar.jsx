import { useEffect, useState } from "react";
import { cn } from "../lib/utils"; // adjust path if needed
import { Menu, X } from "lucide-react";

const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
       <nav className={cn(
    "fixed w-full z-40 transition-all duration-300",
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
)}>
    <div className="container flex items-center justify-between relative"> {/* <-- added 'relative' */}
                <a className="text-xl font-bold text-primary flex items-center" href="#hero"
                >
                    <span className="relative z-10 ">
                        <span className="text-glow text-foreground">ABAY-BAT</span> Portfolio
                    </span>
                </a>
                {/* Render NavItems */} 
                    {/* Desktop */}
                 
                <div className="hidden md:flex space-x-8">
                    {NavItems.map((item, key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                            </a>
                    ))}
                </div>


                    <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open  Menu"}
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Phone */} 
                    <div className={cn("absolute top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",

                        "transition-all duration-300 md:hidden",
                        isMenuOpen 
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"

                    )}>
                     <div className="flex flex-col space-y-8 text-xl">
                    {NavItems.map((item, key)=>(
                        <a key={key} href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                           > {item.name}
                            </a>
                    ))}
                </div>
                </div>
              
            </div>
        </nav>
    );
};
