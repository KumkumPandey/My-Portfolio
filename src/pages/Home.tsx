import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile.jpg";

export default function Home() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-sans">
              Hi, I'm Kumkum Pandey
              </h1>
              
              <p className="text-xl md:text-xl text-muted-foreground mb-4">
  <span className="font-semibold">
    CSE student | Web Dev, Data science & ML enthusiast
  </span>
</p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                I am a passionate Computer Science student with a keen interest in web development, data science, and machine learning. I love exploring new technologies and applying them to solve real-world problems.
                Likes to learn new things and share knowledge with others. Always eager to take on new challenges and grow as a developer.
              </p>
             <p className="text-lg mb-6 text-muted-foreground">
  <span className="font-semibold">Hobbies:</span> Reading, Listning music, painting, blogging, exploring new tech, and playing badminton.
</p>
<div className="flex space-x-6 mb-12">
  {/* Social buttons yahan hain */}
</div>
              <div className="flex space-x-6 mb-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/KumkumPandey" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    GitHub
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/kumkum-pandey-73a517333/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={profilePhoto}
                  alt="Profile"
                 className="relative w-96 h-[34 rem] rounded-xl object-cover border-4 border-background shadow-card transform transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <button 
              onClick={handleArrowClick}
              className="animate-bounce hover:text-primary transition-colors cursor-pointer">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}