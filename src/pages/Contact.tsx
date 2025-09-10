import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-24 w-3 h-3 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-accent/45 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/35 rounded-full animate-float blur-sm" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent font-display leading-tight">
              Contact Me
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-sans px-4">
              Let's connect and discuss opportunities, collaborations, or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-card hover:shadow-glow transition-all duration-500 bg-slate-800/90 backdrop-blur-sm border-primary/30 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white font-display">
                    <MessageCircle className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 font-sans">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`transition-all duration-300 bg-slate-700/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary focus:bg-slate-700/70 ${
                          focusedField === 'name' ? 'scale-105 shadow-glow' : ''
                        }`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-sans">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`transition-all duration-300 bg-slate-700/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary focus:bg-slate-700/70 ${
                          focusedField === 'email' ? 'scale-105 shadow-glow' : ''
                        }`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300 font-sans">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`transition-all duration-300 bg-slate-700/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary focus:bg-slate-700/70 resize-none ${
                          focusedField === 'message' ? 'scale-105 shadow-glow' : ''
                        }`}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-black font-display font-semibold hover:shadow-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '0.4s' }}>
              <Card className="shadow-card hover:shadow-glow transition-all duration-500 bg-slate-800/90 backdrop-blur-sm border-primary/30 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white font-display">
                    <Mail className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-white font-display">Email</h3>
                        <p className="text-gray-300 font-sans">
                          <a 
                            href="mailto:kumkumpandey0234@gmail.com" 
                            className="hover:text-primary transition-colors duration-300"
                          >
                            kumkumpandey0234@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300">
                      <Clock className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-white font-display">Response Time</h3>
                        <p className="text-gray-300 font-sans">
                          I usually respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-white font-display">Available For</h3>
                        <ul className="text-gray-300 space-y-1 font-sans">
                          <li>• Freelance projects</li>
                          <li>• Full-time opportunities</li>
                          <li>• Technical consultations</li>
                          <li>• Collaborations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thank You Message */}
              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 shadow-card hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-white font-display group-hover:text-primary transition-colors duration-300">Thank You!</h3>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    Thank you for visiting my portfolio. I'm excited to hear about your projects 
                    and explore how we can work together to bring your ideas to life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
