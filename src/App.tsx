
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SportCategory from "./components/SportCategory";
import CoachProfile from "./components/CoachProfile";
import AuthComponent from "./components/AuthComponent";
import BookingCalendar from "./components/BookingCalendar";

const queryClient = new QueryClient();

// Sample data for demonstration
const sampleSport = {
  name: "Football",
  icon: "⚽",
  description: "Master the beautiful game with our expert football coaches. From basic skills to advanced tactics, our comprehensive program covers all aspects of football training.",
  methodology: "Our football methodology combines traditional European coaching techniques with modern sports science. We focus on technical skills, tactical understanding, physical conditioning, and mental resilience. Each session is tailored to the player's level, from beginners learning basic ball control to advanced players perfecting their match strategies. Our coaches emphasize proper technique, game intelligence, and character development both on and off the field.",
  coaches: [
    {
      id: 1,
      name: "Carlos Rodriguez",
      specialty: "Youth Development",
      experience: 8,
      rating: 4.9,
      price: 80,
      image: "",
      achievements: ["UEFA B License", "Youth Coach of the Year 2023"],
      available: true
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      specialty: "Advanced Tactics",
      experience: 12,
      rating: 4.8,
      price: 100,
      image: "",
      achievements: ["FIFA Coaching Diploma", "Champions League Experience"],
      available: true
    }
  ],
  testimonials: [
    {
      name: "James Wilson",
      text: "The football program transformed my game completely. The tactical knowledge I gained is incredible!",
      rating: 5
    },
    {
      name: "Maria Santos",
      text: "Best football coaching I've ever received. My daughter's confidence on the field has skyrocketed!",
      rating: 5
    }
  ]
};

const sampleCoach = {
  id: 1,
  name: "Carlos Rodriguez",
  title: "Professional Football Coach",
  sport: "Football",
  image: "",
  rating: 4.9,
  reviews: 127,
  experience: 8,
  price: 80,
  location: "Barcelona, Spain",
  languages: ["English", "Spanish", "Portuguese"],
  specialties: ["Youth Development", "Technical Skills", "Tactical Training"],
  achievements: [
    "UEFA B Coaching License",
    "Youth Coach of the Year 2023",
    "Former Barcelona Youth Academy Coach",
    "Developed 15+ Professional Players"
  ],
  philosophy: "I believe that football is more than just a game - it's a tool for character development and life lessons. My coaching philosophy centers on building confident, intelligent players who understand the game deeply. I focus on creating a positive learning environment where players can express themselves while mastering fundamental skills and tactical concepts. Every player is unique, and I tailor my approach to unlock their individual potential while fostering teamwork and sportsmanship.",
  bio: "Carlos Rodriguez brings over 8 years of professional coaching experience to Elite Sports Academy. Having worked with Barcelona's youth academy and various professional clubs across Europe, Carlos has developed a reputation for nurturing young talent and helping players reach their full potential. His expertise spans from grassroots development to elite performance coaching. Carlos holds multiple coaching certifications and has successfully guided numerous players to professional contracts. His innovative training methods combine traditional techniques with modern sports science, ensuring players develop both technically and mentally.",
  credentials: [
    "UEFA B Coaching License",
    "Sports Science Degree - University of Barcelona", 
    "Youth Development Certificate - FIFA",
    "Sports Psychology Certification"
  ],
  availability: {
    Monday: ["09:00", "10:00", "15:00", "16:00"],
    Tuesday: ["09:00", "11:00", "14:00", "17:00"],
    Wednesday: ["10:00", "15:00", "16:00", "18:00"],
    Thursday: ["09:00", "10:00", "15:00", "16:00"],
    Friday: ["09:00", "11:00", "14:00"],
    Saturday: ["09:00", "10:00", "11:00"],
    Sunday: ["15:00", "16:00", "17:00"]
  },
  testimonials: [
    {
      name: "David Thompson",
      text: "Carlos helped my son develop incredible ball control and confidence. His tactical knowledge is exceptional!",
      rating: 5,
      date: "2024-01-15"
    },
    {
      name: "Lisa Chang",
      text: "Professional, patient, and incredibly knowledgeable. My daughter loves training with Carlos!",
      rating: 5,
      date: "2024-01-10"
    }
  ]
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path="/booking" element={<BookingCalendar />} />
          <Route path="/sport/:sportName" element={<SportCategory sport={sampleSport} />} />
          <Route path="/coach/:coachId" element={<CoachProfile coach={sampleCoach} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
