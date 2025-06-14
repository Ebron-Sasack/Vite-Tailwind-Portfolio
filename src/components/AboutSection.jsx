import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = ()=>{

    return (
        <>
            <section id="about" className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                            <p className="text-muted-foreground">
                                Hi! I’m passionate Frontend Developer with a strong foundation in HTML, CSS, 
                                JavaScript, and React.js. I love crafting clean, responsive, and user-friendly web interfaces 
                                that bring ideas to life. I focus on creating seamless digital experiences 
                                that are both functional and visually appealing.
                            </p>
                            <p className="text-muted-foreground">
                                Currently, I’m sharpening my skills in Node.js to become a 
                                full-stack MERN developer. I enjoy turning complex problems into simple, 
                                beautiful solutions and constantly strive to learn and 
                                grow in the ever-evolving web ecosystem.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Get in Touch
                                </a>
                                <a 
                                    href="/Resume.pdf" download target="_blank"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                        <p className="text-muted-foreground">Build responsive websites using HTML, CSS, JS, and React. 
                                            Focused on performance, clean code, and cross-browser compatibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">Design user-friendly interfaces in Figma with a 
                                            focus on simplicity, accessibility, and user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground">Manage tasks, timelines, and teamwork using Git/GitHub.
                                             Ensure smooth delivery from idea to deployment..
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}