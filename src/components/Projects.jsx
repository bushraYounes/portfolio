import React from 'react'
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/projects/project11.jpg"
import project2 from "../assets/projects/project2.jpg"
import project5 from "../assets/projects/project5.jpg"
const projects = [
  {
    id: 1,
    title: "This Portfolio",
    description: "A beautiful and responsive portfolio website showcasing my skills and projects. Built with React and Tailwind CSS, featuring smooth animations, dark/light modes, and optimized performance, still in production",
    image: project1,
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/bushraYounes/Bushra-Portfolio1",
  },
  {
    id: 2,
    title: "Villa Website",
    description:
      "A modern real estate website built with React for browsing luxury villas and vacation homes. Features property listings, detailed views, pricing information, but still need some css fixing.",
    image:project2,
    tags: ["JavaScript", "React", "SCSS"],
    demoUrl: "https://bushrayounes.github.io/FrontEnd_Task1_villa_website/",
    githubUrl: "https://github.com/bushraYounes/FrontEnd_Task1_villa_website",
  },
  {
    id: 3,
    title: "3D Mushroom in Blender",
    description:"A detailed 3D mushroom model created using Blender, showcasing professional modeling techniques and material work, using skills like 3D Modeling, Shading, Texturing and Rendering.",
    image: project5,
    tags: ["Blender"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];


const Projects = () => {
   return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mb-15">
          {" "}
          Featured <span className="text-primary "> Projects </span>
        </h2>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
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
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/bushraYounes"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects










