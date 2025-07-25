import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/translator.png";
import project2 from "@/assets/instareach.png";
import project3 from "@/assets/pycode.png";

const projects = [
  {
    title: "All Language Translator",
    description: "Web app for translating various universal languages. Users can input text in one language and instantly translate it into multiple global languages. The tool supports voice input/output, image input/output features, and language detection for seamless communication.",
    image: project1,
    technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Python","Tailwind CSS"],
    githubUrl: "https://github.com/KumkumPandey/All-Language-Translator",
    liveUrl: "https://all-language-translator.netlify.app",
  },
  {
    title: "Instagram-reach analyser",
    description: "Track your daily Instagram actions, from posts to stories. Our app provides detailed visual graphs to analyze your reach and engagement, helping you understand and boost your performance.",
    image: project2,
    technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/KumkumPandey/Instagram-reach-analyser",
    liveUrl: "https://insta-reach-analyser.netlify.app",
  },
  {
    title: "PyCodeCraft - Mini Python IDE",
    description: "An interactive Python learning tool for beginners (2025). Users can write, run, and debug Python code in a beginner-friendly environment. It offers syntax highlighting, code suggestions, and learning modules to practice and improve programming skills interactively.",
    image: project3,
    technologies: ["Python" ,"HTML", "CSS", "JavaScript","Flask or Django" ,"CodeMirror/ACE.js" ,"Bootstrap"],
    githubUrl: "https://github.com/KumkumPandey/PyCodeCraft-Mini-Python-IDE",
    liveUrl: null, // This project is not published
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              More projects coming soon! Check out my GitHub for additional work.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://github.com/KumkumPandey" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
