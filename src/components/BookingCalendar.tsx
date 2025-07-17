
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar as CalendarIcon, User, MapPin, CreditCard, Bell, Video, Users } from "lucide-react";
import { toast } from "sonner";

interface Session {
  id: number;
  coach: string;
  sport: string;
  date: string;
  time: string;
  duration: number;
  type: 'individual' | 'group' | 'virtual';
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  location?: string;
}

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedCoach, setSelectedCoach] = useState<string>("");
  const [sessionType, setSessionType] = useState<string>("individual");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const sports = ["Football", "Basketball", "Tennis", "Swimming", "Athletics", "Martial Arts"];
  const coaches = ["Sarah Johnson", "Mike Chen", "Emma Rodriguez", "Alex Thompson", "Maria Garcia"];
  
  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const upcomingSessions: Session[] = [
    {
      id: 1,
      coach: "Sarah Johnson",
      sport: "Tennis",
      date: "2024-01-25",
      time: "10:00",
      duration: 60,
      type: "individual",
      status: "upcoming",
      price: 80,
      location: "Court A"
    },
    {
      id: 2,
      coach: "Mike Chen",
      sport: "Basketball",
      date: "2024-01-26",
      time: "15:00",
      duration: 90,
      type: "group",
      status: "upcoming",
      price: 50
    },
    {
      id: 3,
      coach: "Emma Rodriguez",
      sport: "Swimming",
      date: "2024-01-27",
      time: "08:00",
      duration: 60,
      type: "virtual",
      status: "upcoming",
      price: 60
    }
  ];

  const handleBookSession = () => {
    if (!selectedDate || !selectedTime || !selectedSport || !selectedCoach) {
      toast.error("Please fill in all required fields to book a session");
      return;
    }

    toast.success(`Session booked successfully! 
      ${selectedSport} with ${selectedCoach} 
      on ${selectedDate.toDateString()} at ${selectedTime}`);
  };

  const handleCancelSession = (sessionId: number) => {
    toast.info(`Session ${sessionId} has been cancelled. Refund processed.`);
  };

  const handleRescheduleSession = (sessionId: number) => {
    toast.info(`Reschedule request sent for session ${sessionId}`);
  };

  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case 'individual': return <User className="h-4 w-4" />;
      case 'group': return <Users className="h-4 w-4" />;
      case 'virtual': return <Video className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Session Booking & Calendar
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your training sessions with world-class coaches
          </p>
        </div>

        <Tabs defaultValue="book" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="book">Book Session</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Book New Session */}
          <TabsContent value="book">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Book New Session
                  </CardTitle>
                  <CardDescription>
                    Select your preferences to book a training session
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Sport Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sport</label>
                    <Select value={selectedSport} onValueChange={setSelectedSport}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a sport" />
                      </SelectTrigger>
                      <SelectContent>
                        {sports.map((sport) => (
                          <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Coach Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Coach</label>
                    <Select value={selectedCoach} onValueChange={setSelectedCoach}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a coach" />
                      </SelectTrigger>
                      <SelectContent>
                        {coaches.map((coach) => (
                          <SelectItem key={coach} value={coach}>{coach}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Session Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Session Type</label>
                    <Select value={sessionType} onValueChange={setSessionType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual (1-on-1)</SelectItem>
                        <SelectItem value="group">Group Session</SelectItem>
                        <SelectItem value="virtual">Virtual Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Calendar */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Available Times</label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="text-sm"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <Button 
                    onClick={handleBookSession}
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    size="lg"
                  >
                    Book Session - $80
                  </Button>
                </CardContent>
              </Card>

              {/* Session Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Session Summary</CardTitle>
                  <CardDescription>Review your booking details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {selectedSport && (
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Sport:</span>
                      <Badge variant="secondary">{selectedSport}</Badge>
                    </div>
                  )}

                  {selectedCoach && (
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Coach:</span>
                      <span>{selectedCoach}</span>
                    </div>
                  )}

                  {sessionType && (
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Type:</span>
                      <div className="flex items-center gap-2">
                        {getSessionTypeIcon(sessionType)}
                        <span className="capitalize">{sessionType}</span>
                      </div>
                    </div>
                  )}

                  {selectedDate && (
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium">Date:</span>
                      <span>{selectedDate.toDateString()}</span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Price:</span>
                      <span className="text-green-600">$80.00</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <span>Automatic reminders will be sent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Payment processed securely</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Upcoming Sessions */}
          <TabsContent value="upcoming">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled training sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <Card key={session.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold">{session.sport}</h3>
                                <Badge className={getStatusColor(session.status)}>
                                  {session.status}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  {getSessionTypeIcon(session.type)}
                                  <span className="text-sm capitalize">{session.type}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-1 text-gray-600">
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  <span>Coach: {session.coach}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CalendarIcon className="h-4 w-4" />
                                  <span>{session.date} at {session.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{session.duration} minutes</span>
                                </div>
                                {session.location && (
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{session.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 md:items-end">
                              <div className="text-2xl font-bold text-green-600">
                                ${session.price}
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleRescheduleSession(session.id)}
                                >
                                  Reschedule
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleCancelSession(session.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Session History */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Your completed and past sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No session history yet</h3>
                  <p className="text-gray-600 mb-6">
                    Your completed sessions will appear here after you start training
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Your First Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookingCalendar;
