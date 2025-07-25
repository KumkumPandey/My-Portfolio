import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just say hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-105 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      "Sending..."
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

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-6 w-6" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a 
                          href="mailto:your.email@example.com" 
                          className="hover:text-primary transition-colors duration-300"
                        >
                          kumkumpandey0234@gmail.com
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-muted-foreground">
                        I usually respond within 24 hours
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Available For</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Freelance projects</li>
                        <li>• Full-time opportunities</li>
                        <li>• Technical consultations</li>
                        <li>• Collaborations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Thank You Message */}
              <Card className="bg-gradient-hero border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
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