import React from 'react'
import { ArrowRight, ExternalLink } from "lucide-react";
import cer1 from "../assets/certifications/cer1.png"
import cer2 from "../assets/certifications/cer2.jpg"
import cer3 from "../assets/certifications/cer3.jpg"

const certifications = [
  {
    id: 1,
    title: "Cybersecurity | SOC1 Analyst Online Course",
    description: "This course provides hands-on training in fundamental Security Operations Center (SOC) skills like log analysis, threat detection, SIEM utilization, and incident response, using real-world scenarios and tools.",
    image: cer1,
    company: "GDAREM, Poland",
    date: "October 2025",
    demoUrl: "https://drive.google.com/drive/folders/1eXobvXf7OtV01hv55zj20nkf8hIAtDC_?usp=sharing",

  },
  {
    id: 2,
    title: "Web Development | Full Stack Lvl.2",
    description:
      "Successfully completed four months internship, with a 96% rating on KPIs. Hands-on experience with Laravel, React and MySQL, by creating individual and team projects, using project management tools like Git and Trello. ",
    image: cer3,
    company: "Focal X.agency, Syria",
    date: "December 2024",
    demoUrl: "https://www.focal-x.com/Certificate/bz303qdb7a0",

  },
  {
    id: 3,
    title: "Effective Problem-Solving and Decision-Making",
    description:
      "This course enhanced my critical thinking, decision theory, decision-making, problem-solving, and analysis skills. Authorized by University of California, Irvine and offered through Coursera.",
    image: cer2,
    company: "UCI, Coursera",
    date: "August 2023",
    demoUrl: "https://coursera.org/share/0ecf17070081ffba91ec002e645fa3a8",

  },

];
const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mb-15">
          {" "}
          <span className="text-primary "> Certifications </span>
        </h2>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {certification.company}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {certification.date}
                  </span>

                </div>

                <h3 className="text-xl font-semibold mb-1"> {certification.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {certification.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={certification.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex"
                    >
                      <ExternalLink size={20} />
                      <span className='text-primary pl-2'>View Certificate</span>
                    </a>

                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Certifications