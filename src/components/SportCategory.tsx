
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, MessageCircle, Calendar, Trophy, Users, Clock, Search, Filter } from "lucide-react";
import { toast } from "sonner";

interface Coach {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  price: number;
  image: string;
  achievements: string[];
  available: boolean;
}

interface SportCategoryProps {
  sport: {
    name: string;
    icon: string;
    description: string;
    methodology: string;
    coaches: Coach[];
    testimonials: Array<{
      name: string;
      text: string;
      rating: number;
    }>;
  };
}

const SportCategory = ({ sport }: SportCategoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const filteredCoaches = sport.coaches.filter(coach => 
    coach.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filterAvailable || coach.available)
  );

  const handleBookSession = (coachName: string) => {
    toast.success(`Booking session with ${coachName}! Redirecting to calendar...`);
  };

  const handleChatWithAI = () => {
    setChatOpen(!chatOpen);
    toast.info("AI Sports Assistant activated! 🤖");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <div className="text-8xl mb-6">{sport.icon}</div>
          <h1 className="text-5xl font-bold mb-4">{sport.name}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">{sport.description}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Users className="mr-2 h-4 w-4" />
              {sport.coaches.length} Expert Coaches
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Trophy className="mr-2 h-4 w-4" />
              100+ Success Stories
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Clock className="mr-2 h-4 w-4" />
              24/7 AI Support
            </Badge>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Our {sport.name} Methodology</CardTitle>
              <CardDescription className="text-lg">
                Proven techniques that deliver results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                {sport.methodology}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coach Search and Filter */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search coaches by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={filterAvailable ? "default" : "outline"}
              onClick={() => setFilterAvailable(!filterAvailable)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Available Only
            </Button>
            <Button onClick={handleChatWithAI} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our {sport.name} Coaches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoaches.map((coach) => (
              <Card key={coach.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{coach.name}</CardTitle>
                  <CardDescription className="font-semibold text-blue-600">
                    {coach.specialty}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{coach.rating}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold">{coach.experience} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-green-600">${coach.price}/session</span>
                    </div>
                    
                    <div className="pt-2">
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {coach.achievements.slice(0, 2).map((achievement, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleBookSession(coach.name)}
                        disabled={!coach.available}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {coach.available ? 'Book Session' : 'Unavailable'}
                      </Button>
                    </div>
                    
                    {coach.available && (
                      <Badge variant="secondary" className="w-full justify-center text-green-600">
                        Available Now
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{sport.name} Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sport.testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{sport.name} Student</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">{sport.name} AI Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-blue-700"
            >
              ✕
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">
                  Hi! I'm your {sport.name} AI assistant. I can help you with:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Finding the right coach</li>
                  <li>• Booking training sessions</li>
                  <li>• {sport.name} technique tips</li>
                  <li>• Equipment recommendations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Ask me anything..." className="flex-1" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportCategory;
