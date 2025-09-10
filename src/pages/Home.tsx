import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleArrowClick = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-2 h-2 bg-accent/50 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary/35 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent/45 rounded-full animate-float blur-sm" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Interactive cursor glow */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out blur-xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: 0.8
        }}
      />
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left lg:order-1 space-y-6">
              <div className="relative group">
                <Sparkles className="absolute -top-2 -left-2 h-6 w-6 text-primary/70 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-display hover:scale-105 transition-transform duration-300 cursor-default leading-tight">
                Hi, I'm Kumkum Pandey
                </h1>
              </div>
              
              <div className="space-y-6 animate-fade-in font-sans" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl md:text-2xl text-gray-300 mb-4 hover:text-white transition-colors duration-300">
                  <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
                    CSE student | Web Dev, Data science & ML enthusiast
                  </span>
                </p>
                <p className="text-lg mb-8 text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300 font-light">
                  I am a passionate Computer Science student with a keen interest in web development, data science, and machine learning. I love exploring new technologies and applying them to solve real-world problems.
                  Likes to learn new things and share knowledge with others. Always eager to take on new challenges and grow as a developer.
                </p>
                <p className="text-lg mb-6 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  <span className="font-semibold text-primary font-display">Hobbies:</span> Reading, Listening music, painting, blogging, exploring new tech, and playing badminton.
                </p>
              </div>
              <div className="flex space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-glow border-2 border-primary/50 hover:border-primary bg-primary/10 backdrop-blur-sm font-display font-medium"
                  asChild
                >
                  <a href="https://github.com/KumkumPandey" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
                    GitHub
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-glow border-2 border-accent/50 hover:border-accent bg-accent/10 backdrop-blur-sm font-display font-medium"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/kumkum-pandey-73a517333/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div className="flex justify-center lg:justify-end lg:order-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative group cursor-pointer">
                {/* Animated border glow */}
                <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-primary/25 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
                
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="relative w-96 h-[34rem] rounded-xl object-cover border-4 border-background shadow-card transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-glow"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={handleArrowClick}
              className="group animate-bounce hover:text-primary transition-all duration-300 cursor-pointer hover:scale-125 p-3 rounded-full hover:bg-primary/20 backdrop-blur-sm border border-primary/30">
              <ArrowDown className="h-6 w-6 mx-auto text-gray-400 group-hover:text-primary transition-colors duration-300" />
              <span className="block text-xs mt-1 text-gray-400 group-hover:text-primary transition-colors duration-300 font-display font-medium">Explore More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
