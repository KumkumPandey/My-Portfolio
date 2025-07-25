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
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and skills I work with to bring ideas to life
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={key}
                  variant={activeCategory === key ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(key as keyof typeof skillCategories)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="mr-2 h-5 w-5" />
                  {category.title}
                </Button>
              );
            })}
          </div>

          {/* Skills Display */}
          <Card className="shadow-card hover:shadow-glow transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                {(() => {
                  const IconComponent = skillCategories[activeCategory].icon;
                  return <IconComponent className="h-7 w-7" />;
                })()}
                {skillCategories[activeCategory].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="p-3 text-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}