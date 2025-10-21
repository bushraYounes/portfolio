import React, { useState, useEffect } from 'react'
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // 
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle active section based on scroll position
    useEffect(() => {
        const handleScrollActive = () => {
            const sections = navItems.map(item => ({
                name: item.name,
                element: document.querySelector(item.href),
            }));

            // Find which section is currently in view
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element && scrollPosition >= section.element.offsetTop) {
                    setActiveSection(section.name);
                    break;
                }
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScrollActive);
        
        // Initial check
        handleScrollActive();

        return () => {
            window.removeEventListener('scroll', handleScrollActive);
        };
    }, []);

    // Smooth scroll function
    const handleNavClick = (href, name) => {
        setActiveSection(name);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href='#hero'
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#hero', 'Home');
                    }}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Bushra</span> Younes
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <a 
                            key={index}
                            href={item.href}
                            className={cn(
                                "text-foreground/80 hover:text-primary transition-colors duration-300 relative",
                                activeSection === item.name ? "text-primary font-semibold" : ""
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href, item.name);
                            }}
                        >
                            {item.name}
                            {activeSection === item.name && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden mr-10 p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col text-xl space-y-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={cn(
                                    "text-foreground/80 hover:text-primary transition-colors duration-300",
                                    activeSection === item.name ? "text-primary font-semibold" : ""
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, item.name);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;