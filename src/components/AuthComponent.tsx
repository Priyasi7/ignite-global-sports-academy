
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Lock, Mail, User, Trophy, Calendar, CreditCard, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const AuthComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    sport: "",
    experience: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (formData.email && formData.password) {
      toast.success("Login successful! Welcome back to Elite Sports Academy.");
    } else {
      toast.error("Please fill in all required fields.");
    }
    
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      toast.success("Account created successfully! Welcome to Elite Sports Academy.");
    } else {
      toast.error("Please fill in all required fields.");
    }
    
    setIsLoading(false);
  };

  const features = [
    { icon: Calendar, title: "Session Booking", desc: "Schedule training sessions with world-class coaches" },
    { icon: Trophy, title: "Progress Tracking", desc: "Monitor your athletic development and achievements" },
    { icon: MessageCircle, title: "AI Coaching", desc: "Get personalized training recommendations" },
    { icon: CreditCard, title: "Secure Payments", desc: "Wallet system for easy session payments" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Join <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Elite Sports Academy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unlock your potential with AI-powered coaching, world-class trainers, and cutting-edge technology.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                🏆 500+ Elite Coaches
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                🌍 50+ Countries
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                ⭐ 4.9/5 Rating
              </Badge>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">Elite Sports</span>
                </div>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <CardDescription>
                  Join thousands of athletes improving their game
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <Button variant="link" size="sm" className="text-blue-600 p-0">
                          Forgot password?
                        </Button>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700" 
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sport">Primary Sport</Label>
                        <Input
                          id="sport"
                          placeholder="e.g., Football, Basketball, Tennis"
                          value={formData.sport}
                          onChange={(e) => handleInputChange('sport', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700" 
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    By continuing, you agree to our{" "}
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Terms of Service
                    </Button>{" "}
                    and{" "}
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Privacy Policy
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or sign up with:</p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
