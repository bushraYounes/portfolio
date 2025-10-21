import React, { useState } from 'react'
import { Briefcase, Code, User } from "lucide-react";
import svu from "../assets/svut.png"
import hiast from "../assets/hiastH.png"
import ncd from "../assets/ncdt.png"
import hat from "../assets/hatred.png"
import hat_2 from "../assets/hat2.png"

const Education = () => {
    const [hoveredImage, setHoveredImage] = useState(hat_2);

    return (
        <section id="education" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary"> Education </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">
                            My Academic Journey
                        </h3>

                       <img 
                           src={hoveredImage} 
                           alt='' 
                           className='w-full h-64 object-contain transition-all duration-500 delay-300'
                       />

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#certifications" className="cosmic-button">
                                {" "}
                                View Certifications
                            </a>

                            <a
                                href="#projects"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View My Academic Projects
                            
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div 
                            className="gradient-border p-6 card-hover transition-all duration-300 delay-100"
                            onMouseEnter={() => setHoveredImage(svu)}
                            onMouseLeave={() => setHoveredImage(hat_2)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-1 rounded-full bg-primary-foreground">
                                    <img className='h-10 w-10 rounded-full object-cover' src={svu} alt="Logo" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow "> Professional Master in Technology Management</h4>
                                    <p className="text-muted-foreground">
                                        Syrian Virtual University
                                    </p>
                                    <p className="text-muted-foreground ">
                                        Online, 2/2022 - Until now
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            className="gradient-border p-6 card-hover transition-all duration-300 delay-100"
                            onMouseEnter={() => setHoveredImage(hiast)}
                            onMouseLeave={() => setHoveredImage(hat_2)}
                        >
                            <div className="flex items-start gap-4">
                               <div className="p-1 rounded-full bg-primary-foreground">
                                    <img className='h-10 w-10 rounded-full object-cover' src={hiast} alt="Logo" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow ">Bachelor of Science in Software Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Higher Institute for Applied Sciences and Technology
                                    </p>
                                    <p className="text-muted-foreground">
                                        Syria, Damascus, 10/2017 - 08/2022
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            className="gradient-border p-6 card-hover transition-all duration-300 delay-100"
                            onMouseEnter={() => setHoveredImage(ncd)}
                            onMouseLeave={() => setHoveredImage(hat_2)}
                        >
                            <div className="flex items-start gap-4">
                               <div className="p-1 rounded-full bg-primary-foreground">
                                    <img className='h-10 w-10 rounded-full object-cover' src={ncd} alt="Logo" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow">High School Diploma </h4>
                                    <p className="text-muted-foreground">
                                        National Centre for Distinguished
                                    </p>
                                     <p>
                                        Syria, Lattakia, 06/2014 - 06/2017
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education