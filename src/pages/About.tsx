import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Briefcase, Code } from "lucide-react";

const certifications = [
  {
    name: "Cloud Computing Foundations",
    issuer: "NPTEL",
    date: "2(Aug–Oct 2023)",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "(Dec 2024)",
  },
  {
    name: "PHP Course",
    issuer: " Udemy",
    date: "(May 2024)",
  },
  {
    name: "Data Science",
    issuer: "Infosys Springboard",
    date: "(June 2024)",
  },
  {
    name: "AWS Certified Developer",
    issuer: "Associate Certification",
    date: "(June 2025)",
  },
  {
    name: "AI_APPRECIATE & AI_AWARE badges and certificates",
    issuer: "Digital India (intel)",
    date: "(July 2025)",
  },
];

const virtualExperiences = [
  {
    company: "J.P Morgan Chase & Co. Quantitative Research Virtual Experience Program on Forage – (July 2025)",
    description: "Completed a simulation focused on quantitative research methods. Analyzed a book of loans to estimate a customer's probability of default. Used dynamic programming to convert FICO scores into categorical data to predict defaults.",
  },
  {
    company: "Deloitte Australia Data Analytics Job Simulation on Forage - (July 2025)",
    description: "Completed a Deloitte job simulation involving data analysis and forensic technology. Created a data dashboard using Tableau. Used Excel to classify data and draw business conclusions.",
  },
  {
    company: "Accenture Nordics Consultant Job Simulation on Forage - (Dec 2024)",
    description: "Improved a hypothetical mobile healthcare app based on data analysis and UX suggestions. Prioritized client requirements and managed issue resolution.",
  },
  {
    company: "Electronic Arts Software Engineering Program – Forage (Dec 2024)",
    description: "Proposed and developed a feature for EA Sports College Football. Built class diagrams and optimized C++ code structures.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and experiences
            </p>
          </div>

          {/* Current Work */}
          <Card className="mb-12 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-6 w-6" />
                What I'm Currently Doing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I am pursuing a B.Tech in Computer Science and Engineering from Graphic Era Hill University, Bhimtal. I am in 7th sem where I am honing my skills in software development, data analysis, and cloud computing. I am passionate about leveraging technology to solve real-world problems and continuously learning new tools and frameworks. My journey in the world of technology has been nothing short of exhilarating, and I have enthusiastically embraced every opportunity to learn and grow in this dynamic field.
              </p>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Virtual Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-accent" />
              Virtual Experience
            </h2>
            <div className="space-y-6">
              {virtualExperiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{exp.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}