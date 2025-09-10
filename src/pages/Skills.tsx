import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Users, Wrench } from "lucide-react";

const skillCategories = {
  technical: {
    title: "Technical Skills",
    icon: Code,
    skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "C", "C++", "SQL", "AWS"," Python", "Java", "Tailwind CSS"
    ]
  },
  soft: {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem Solving", "Team Collaboration", "Communication", "Leadership",
      "Time Management", "Critical Thinking", "Adaptability", "Creativity",
      "Project Management", "Mentoring", "Teamwork"
    ]
  },
  tools: {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
        "Git", "GitHub", "VS Code", "Figma", "Dev C/C++", "PowerBI", "MS Word", "MS Excel", "MS PowerPoint", "Canva", "MYSql workbench"
    ]
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>("technical");

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-24 right-1/3 w-3 h-3 bg-accent/35 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent font-display leading-tight">
              Skills & Expertise
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-sans px-4">
              Technologies and skills I work with to bring ideas to life
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={key}
                  variant={activeCategory === key ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
                  className={`transition-all duration-300 hover:scale-105 w-full sm:w-auto font-display min-h-[48px] ${
                    activeCategory === key 
                      ? 'bg-primary text-black hover:bg-primary/90' 
                      : 'border-primary/50 text-gray-300 hover:bg-primary/20 hover:text-white hover:border-primary'
                  }`}
                >
                  <IconComponent className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base font-medium">{category.title}</span>
                </Button>
              );
            })}
          </div>

          {/* Skills Display */}
          <Card className="shadow-card hover:shadow-glow transition-all duration-500 bg-slate-800/90 backdrop-blur-sm border-primary/30 mx-4 sm:mx-0">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-display">
                {(() => {
                  const IconComponent = skillCategories[activeCategory].icon;
                  return <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />;
                })()}
                <span className="text-white">{skillCategories[activeCategory].title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-primary/20 to-accent/10 hover:from-primary/30 hover:to-accent/20 border border-primary/30 hover:border-primary/60 rounded-lg backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <span className="text-white group-hover:text-primary font-sans text-xs sm:text-sm font-medium transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-12 text-center px-4">
            <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto">
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
