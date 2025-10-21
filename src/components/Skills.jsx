import React from 'react'

import { useState } from "react";
import { cn } from "@/lib/utils";
import imag from "../assets/girl.jpg"
import { Code } from 'lucide-react';

const skills = [
    // Frontend
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },


    // Backend
    { name: "PHP", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Laravel", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "Elasticsearch", category: "backend" },


    // Graphics
    { name: "Blender", category: "graphics" },
    { name: "Unity3D", category: "graphics" },
    { name: "C#", category: "graphics" },

    // SOC
    { name: "Wazuh", category: "SOC" },
    { name: "SIEM", category: "SOC" },


    // Tools
    { name: "Git/GitHub", category: "tools" },
    { name: "Jira", category: "tools" },
    { name: "Confluence", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Trello", category: "tools" },
];

const categories = ["all", "frontend", "backend", "graphics", "SOC", "tools"];


const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card flex flex-row p-6  rounded-lg shadow-xs card-hover items-center"
                        >
                            <div className="text-left  items-center">
                                {/* <img
                                    className="object-cover h-10 w-10 rounded-full"
                                    src={imag} /> */}
                                <Code className="text-primary"/>
                            </div>
                            <div className="text-left pl-5 ">
                                <h3 className="font-semibold text-lg "> {skill.name}</h3>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills

