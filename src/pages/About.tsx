import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Briefcase, Code } from "lucide-react";

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Data Science Professional",
    issuer: "Oracle",
    date: "(Sept 2025)",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Generative AI Professional (1Z0-1127-25)",
    issuer: "Oracle",
    date: "(Sept 2025)",
  },
  {
    name: "Advanced Techniques in Social Media Marketing",
    issuer: "Reliance Foundation",
    date: "(Aug 2025)",
  },
  {
    name: "Learning Data Analytics: 1 Foundations",
    issuer: "Robin Hunt",
    date: "(Aug 2025)",
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
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "(Dec 2024)",
  },
  {
    name: "Data Science",
    issuer: "Infosys Springboard",
    date: "(June 2024)",
  },
  {
    name: "PHP Course",
    issuer: " Udemy",
    date: "(May 2024)",
  },
  {
    name: "Cloud Computing Foundations",
    issuer: "NPTEL",
    date: "(Aug–Oct 2023)",
  },
];

const virtualExperiences = [
  {
    company: "Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on Forage – (September 2025)",
    description: "Completed a simulation involving creating data visualizations for Tata Consultancy Services.Prepared questions for a meeting with client senior leadership.Created visuals for data analysis to help executives with effective decision making",
  },
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/25 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-display">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-sans">
              Get to know more about my journey, skills, and experiences
            </p>
          </div>

          {/* Current Work */}
          <Card className="mb-12 shadow-card hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-display">
                <Code className="h-6 w-6 text-primary" />
                What I'm Currently Doing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed font-sans text-base">
                Currently, I am pursuing a B.Tech in Computer Science and Engineering from Graphic Era Hill University, Bhimtal. I am in 7th sem where I am honing my skills in software development, data analysis, and cloud computing. I am passionate about leveraging technology to solve real-world problems and continuously learning new tools and frameworks. My journey in the world of technology has been nothing short of exhilarating, and I have enthusiastically embraced every opportunity to learn and grow in this dynamic field.
              </p>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-white font-display">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              Certifications
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg text-white font-display">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-2 font-sans text-sm sm:text-base">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 font-sans">
                      <Calendar className="h-4 w-4 text-accent" />
                      {cert.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Virtual Experience */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-white font-display">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              Virtual Experience
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {virtualExperiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg text-white font-display">{exp.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed">{exp.description}</p>
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
