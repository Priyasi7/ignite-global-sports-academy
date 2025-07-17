
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star, Trophy, Users, Clock, Calendar, MessageCircle, CreditCard, Globe, BookOpen, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sports = [
    { name: "Football", icon: "⚽", coaches: 15, sessions: 120, rating: 4.8 },
    { name: "Basketball", icon: "🏀", coaches: 12, sessions: 98, rating: 4.9 },
    { name: "Tennis", icon: "🎾", coaches: 8, sessions: 75, rating: 4.7 },
    { name: "Swimming", icon: "🏊", coaches: 10, sessions: 89, rating: 4.8 },
    { name: "Athletics", icon: "🏃", coaches: 20, sessions: 150, rating: 4.9 },
    { name: "Martial Arts", icon: "🥋", coaches: 14, sessions: 110, rating: 4.8 }
  ];

  const features = [
    { icon: MessageCircle, title: "AI Call Tracking", desc: "Advanced AI monitors and analyzes your training sessions" },
    { icon: CreditCard, title: "Wallet Payments", desc: "Secure wallet system for seamless transactions" },
    { icon: Clock, title: "24/7 AI Support", desc: "Round-the-clock AI assistance for all your queries" },
    { icon: Globe, title: "Global Coaching", desc: "Access world-class coaches from anywhere" },
    { icon: Users, title: "Multi-language", desc: "Support in multiple languages worldwide" },
    { icon: Trophy, title: "AR/VR Training", desc: "Immersive training with cutting-edge technology" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", sport: "Tennis", text: "The AI coaching insights transformed my game completely!", rating: 5 },
    { name: "Mike Chen", sport: "Basketball", text: "Best investment in my athletic journey. Highly recommended!", rating: 5 },
    { name: "Emma Rodriguez", sport: "Swimming", text: "24/7 support and amazing coaches. Perfect platform!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Elite Sports Academy
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#sports" className="text-gray-700 hover:text-blue-600 transition-colors">Sports</a>
              <a href="#coaches" className="text-gray-700 hover:text-blue-600 transition-colors">Coaches</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
              Unlock Your Athletic Potential
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Join thousands of athletes training with world-class coaches through our AI-powered platform. 
              Experience the future of sports training with personalized coaching, AR/VR modules, and 24/7 support.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for sports or coaches..." 
                  className="pl-10 h-12 text-lg border-2 focus:border-blue-500"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                Find Coach
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">🏆 500+ Elite Coaches</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">🌍 50+ Countries</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">⭐ 4.9/5 Rating</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">🚀 AI-Powered</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-lg mb-2">Personalized Training</h3>
                  <p className="text-gray-600">AI-customized sessions for your skill level</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-200 hover:border-green-400 transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">🥽</div>
                  <h3 className="font-bold text-lg mb-2">AR/VR Training</h3>
                  <p className="text-gray-600">Immersive technology for better learning</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-bold text-lg mb-2">Affordable Sessions</h3>
                  <p className="text-gray-600">Quality coaching at competitive prices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section id="sports" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Sports Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your passion with our comprehensive range of sports. Each category features expert coaches, 
              proven methodologies, and success stories from athletes worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <Card key={sport.name} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{sport.icon}</div>
                  <CardTitle className="text-2xl text-blue-600">{sport.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{sport.rating}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Coaches:</span>
                      <Badge variant="outline">{sport.coaches}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sessions:</span>
                      <Badge variant="outline">{sport.sessions}+</Badge>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Explore {sport.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Elite Sports Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge platform combines traditional coaching excellence with innovative technology 
              to deliver an unparalleled training experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Athletes Say</h2>
            <p className="text-xl text-gray-600">Real stories from real athletes who transformed their game</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.sport} Athlete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who have already transformed their performance with our AI-powered coaching platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Session
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We're here to help you succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>support@elitesportsacademy.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Available 24/7 Worldwide</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Subject" />
                  <textarea 
                    className="w-full p-3 border rounded-md resize-none h-24" 
                    placeholder="Your Message"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Elite Sports Academy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering athletes worldwide with AI-powered coaching and cutting-edge training technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Our Coaches</div>
                <div>Sports Categories</div>
                <div>Success Stories</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact Support</div>
                <div>Book a Session</div>
                <div>AI Chat Support</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Technology</h3>
              <div className="space-y-2 text-gray-400">
                <div>AI Call Tracking</div>
                <div>AR/VR Training</div>
                <div>Mobile App</div>
                <div>API Access</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elite Sports Academy. All rights reserved. | Powered by AI Technology</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button 
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={() => toast.success("AI Chat coming soon! 🤖")}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
