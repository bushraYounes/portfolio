import React from 'react'

import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { cn } from "../../src/lib/utils"
import { useState } from "react";

const Contacts = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1500);


    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="bushrayounes.se@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        bushrayounes.se@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <LinkedinIcon className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h4 className="font-medium "> Linked In</h4>
                                    <a
                                        href="http://www.linkedin.com/in/bushra-ali-younes-3613a822a"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        /bushra-ali-younes-3613a822a
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GithubIcon className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h4 className="font-medium"> GitHub</h4>
                                    <a
                                        href="https://github.com/bushraYounes"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        https://github.com/bushraYounes
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+963981810320"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +963 981 810 320
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Syria, Damascus
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Bushra Younes..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="bushrayounes.se@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts



