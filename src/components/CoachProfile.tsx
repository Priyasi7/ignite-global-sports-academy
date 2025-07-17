
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Star, Trophy, Users, Clock, MessageCircle, Phone, Mail, MapPin, Award, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface CoachProfileProps {
  coach: {
    id: number;
    name: string;
    title: string;
    sport: string;
    image: string;
    rating: number;
    reviews: number;
    experience: number;
    price: number;
    location: string;
    languages: string[];
    specialties: string[];
    achievements: string[];
    philosophy: string;
    bio: string;
    credentials: string[];
    availability: {
      [key: string]: string[];
    };
    testimonials: Array<{
      name: string;
      text: string;
      rating: number;
      date: string;
    }>;
  };
}

const CoachProfile = ({ coach }: CoachProfileProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleBookSession = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your session");
      return;
    }
    toast.success(`Session booked with ${coach.name} on ${selectedDate.toDateString()} at ${selectedTime}!`);
  };

  const handleMessage = () => {
    toast.info("Opening chat with coach...");
  };

  const getCurrentDayAvailability = () => {
    if (!selectedDate) return [];
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    return coach.availability[dayName] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Coach Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">{coach.name}</h1>
                <p className="text-xl mb-4">{coach.title} • {coach.sport}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{coach.rating}</span>
                    <span className="opacity-90">({coach.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-5 w-5" />
                    <span>{coach.experience} years experience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-5 w-5" />
                    <span>{coach.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">${coach.price}</div>
                <div className="text-lg opacity-90">per session</div>
                <div className="flex gap-2 mt-4">
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleMessage} className="border-white text-white hover:bg-white hover:text-blue-600">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{coach.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Credentials & Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coach.credentials.map((credential, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                          <Award className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {coach.languages.map((language, index) => (
                        <Badge key={index} variant="outline">{language}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="philosophy">
                <Card>
                  <CardHeader>
                    <CardTitle>Coaching Philosophy</CardTitle>
                    <CardDescription>My approach to training and development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg">{coach.philosophy}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      Major Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {coach.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                          <Trophy className="h-6 w-6 text-yellow-600" />
                          <span className="font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  {coach.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.date}</p>
                          </div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Session
                </CardTitle>
                <CardDescription>Select your preferred date and time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                
                {selectedDate && (
                  <div>
                    <h4 className="font-semibold mb-3">Available Times</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {getCurrentDayAvailability().map((time, index) => (
                        <Button
                          key={index}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    
                    {getCurrentDayAvailability().length === 0 && (
                      <p className="text-gray-500 text-sm">No available times for this date</p>
                    )}
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Session Price:</span>
                    <span className="text-2xl font-bold text-green-600">${coach.price}</span>
                  </div>
                  
                  <Button 
                    onClick={handleBookSession}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">coach@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Response within 2 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
