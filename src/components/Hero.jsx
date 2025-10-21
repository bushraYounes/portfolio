import React from 'react'
import { ArrowDown, Download } from "lucide-react";
import cv from "../../public/BushraYounesCV.pdf"
const Hero = () => {
   
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Bushra
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Younes
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4 ">
                            {" "}
                            Software Engineer
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I architect and build scalable software systems from concept to deployment. Leveraging clean code principles and a diverse skill set, I specialize in creating robust web applications.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center flex-col sm:flex-row ">
                        <a href="#projects" className="cosmic-button m-5">
                            View My Work
                        </a>
                        <a className=" flex m-5  px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"  href={cv} download="BushraYounesCV.pdf">
                            <Download className="h-5 w-5 text-forground mr-1" />
                            <span >
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}

export default Hero