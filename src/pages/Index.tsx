import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlayCircle, DollarSign, TrendingUp, Clock, Users, Star, Check, Zap, Target, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-monetization.jpg";
import dashboardImage from "@/assets/dashboard-stats.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    option: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.option) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success! 🎉",
      description: "Your spot has been reserved! We'll contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', whatsapp: '', option: '' });
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      revenue: "$12,847",
      timeframe: "First Month",
      quote: "I couldn't believe it when I hit $12K in my first month! MoneyTuber's automation tool literally runs my channel while I sleep.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      revenue: "$34,921",
      timeframe: "90 Days",
      quote: "From zero to $35K in 90 days. The training was incredible, but the automation tool is pure magic!",
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      revenue: "$8,456",
      timeframe: "First 3 Weeks",
      quote: "I was skeptical until I saw my first $8K payout. Now I'm a believer! This system actually works.",
      avatar: "ET"
    }
  ];

  const features = [
    { icon: Target, title: "20-Day Fast Track", desc: "Get monetized in record time" },
    { icon: Zap, title: "MEGA-MONEY Automation", desc: "AI-powered channel growth" },
    { icon: Award, title: "Proven System", desc: "1000+ successful students" },
    { icon: DollarSign, title: "Guaranteed Results", desc: "Or your money back" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 animate-fade-in-up">
            <Badge className="animate-neon-pulse bg-destructive/90 backdrop-blur-sm text-destructive-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-2 border-destructive/50 shadow-neon">
              🚨 URGENT: YouTube Bans AI Content July 15! 🚨
            </Badge>
            <Badge className="animate-bounce-in bg-gradient-money text-accent-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-glow-intense">
              ⚡ LIMITED TIME: 40% OFF AUTOMATION TOOL ⚡
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-orbitron font-black mb-6 sm:mb-8 bg-gradient-youtube bg-clip-text text-transparent animate-scale-pulse drop-shadow-2xl leading-tight">
            MoneyTuber
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-secondary animate-float tracking-wide drop-shadow-lg leading-tight">
            20 Days to YouTube Monetization
          </p>
          
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12 animate-slide-up px-2 sm:px-4">
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 backdrop-blur-sm shadow-dramatic hover:shadow-neon transition-all duration-500">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-destructive mb-3 sm:mb-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-orbitron">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 animate-pulse" />
                <span className="text-center sm:text-left">BREAKING: YouTube's New Policy Kills AI Channels!</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Starting July 15, 2025, YouTube will NO LONGER MONETIZE AI-generated videos! 
                Millions of creators are losing their income streams. Don't be one of them!
              </p>
              <div className="text-secondary font-bold text-base sm:text-lg md:text-xl lg:text-2xl animate-pulse bg-gradient-success bg-clip-text text-transparent text-center sm:text-left">
                ✅ Our proven system creates AUTHENTIC, monetizable content that passes YouTube's new guidelines
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light tracking-wide text-center">
              Join the Journey and Do-It-Yourself OR use our MEGA-MONEY automation tool 
              to create AUTHENTIC content while you collect real payouts
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 animate-zoom-in px-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 bg-card/30 backdrop-blur-md px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl border border-border/30 hover:bg-card/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-secondary animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">{feature.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-slide-up px-4 sm:px-0">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-xl sm:rounded-2xl shadow-neon hover:shadow-glow-intense transition-all duration-300 transform hover:scale-105 font-bold">
              <PlayCircle className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 animate-pulse" />
              GRAB 40% DISCOUNT NOW
            </Button>
            <Button variant="money" size="lg" className="w-full sm:w-auto text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-xl sm:rounded-2xl shadow-dramatic hover:shadow-neon transition-all duration-300 transform hover:scale-105 font-bold">
              <Users className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 animate-pulse" />
              JOIN TRAINING
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            <Card className="bg-card/20 backdrop-blur-md border-border/30 hover:bg-card/30 hover:scale-105 transition-all duration-500 shadow-dramatic hover:shadow-neon rounded-2xl sm:rounded-3xl">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <TrendingUp className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-secondary mx-auto mb-4 sm:mb-6 animate-float" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary font-orbitron">1000+</h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Students Monetized</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/20 backdrop-blur-md border-border/30 hover:bg-card/30 hover:scale-105 transition-all duration-500 shadow-dramatic hover:shadow-neon rounded-2xl sm:rounded-3xl">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <DollarSign className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-secondary mx-auto mb-4 sm:mb-6 animate-float" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary font-orbitron">$2.8M+</h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Total Revenue Generated</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/20 backdrop-blur-md border-border/30 hover:bg-card/30 hover:scale-105 transition-all duration-500 shadow-dramatic hover:shadow-neon rounded-2xl sm:rounded-3xl sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <Clock className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-secondary mx-auto mb-4 sm:mb-6 animate-float" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary font-orbitron">20 Days</h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Average Time to Monetize</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-money bg-clip-text text-transparent">
            Real Students, Real Results
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Watch how our students went from zero to YouTube monetization heroes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/20 backdrop-blur-sm border-border/20 hover:scale-105 transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-money flex items-center justify-center text-accent-foreground font-bold text-sm sm:text-base">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                      <Badge className="bg-gradient-success text-primary-foreground text-xs sm:text-sm">
                        {testimonial.revenue} in {testimonial.timeframe}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground italic text-sm sm:text-base mb-3 sm:mb-4">"{testimonial.quote}"</p>
                  <Button variant="ghost" className="text-secondary hover:text-secondary/80 text-xs sm:text-sm w-full sm:w-auto">
                    <PlayCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Watch Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-youtube bg-clip-text text-transparent">
              See The Money Rolling In
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real dashboards from our students showing life-changing income streams
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
            <div className="absolute inset-0 bg-gradient-money opacity-20 rounded-lg blur-xl"></div>
            <Card className="relative bg-card/10 backdrop-blur-sm border-border/20 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={dashboardImage} 
                  alt="YouTube Monetization Dashboard"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-success text-primary-foreground px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg animate-pulse-glow">
                  🎉 $15,847 This Month!
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">4.2M</div>
              <div className="text-sm sm:text-base text-muted-foreground">Views</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">247K</div>
              <div className="text-sm sm:text-base text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">$0.07</div>
              <div className="text-sm sm:text-base text-muted-foreground">CPM</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/20 backdrop-blur-sm border-border/20 mx-2 sm:mx-0">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-money bg-clip-text text-transparent">
                  Reserve Your Spot NOW!
                </CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2 sm:px-0">
                  Limited slots available. Don't miss your chance to join the MoneyTuber revolution!
                </CardDescription>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2">
                  <Badge className="bg-destructive text-destructive-foreground animate-pulse text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                    🚨 6 Days Until YouTube Ban!
                  </Badge>
                  <Badge className="bg-gradient-youtube text-primary-foreground animate-pulse text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                    🔥 Only 47 Spots Left
                  </Badge>
                  <Badge className="bg-gradient-success text-primary-foreground animate-pulse text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                    ⏰ 40% Discount Ends Soon
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base lg:text-lg font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4 lg:p-6 bg-background/50 border-border/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base lg:text-lg font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4 lg:p-6 bg-background/50 border-border/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm sm:text-base lg:text-lg font-medium">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg p-3 sm:p-4 lg:p-6 bg-background/50 border-border/50"
                      placeholder="Enter your WhatsApp number"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm sm:text-base lg:text-lg font-medium mb-3 sm:mb-4 block">Choose Your Path to Success *</Label>
                    <RadioGroup 
                      value={formData.option} 
                      onValueChange={(value) => setFormData({...formData, option: value})}
                      className="space-y-3 sm:space-y-4"
                    >
                      <Card className="p-3 sm:p-4 cursor-pointer hover:bg-card/30 transition-colors">
                        <div className="flex items-start sm:items-center space-x-3">
                          <RadioGroupItem value="training" id="training" className="mt-1 sm:mt-0" />
                          <Label htmlFor="training" className="flex-1 cursor-pointer">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-secondary">Join Training Program</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Learn AUTHENTIC content strategies that pass YouTube's new guidelines</p>
                </div>
                              <Badge className="bg-gradient-success text-primary-foreground text-sm sm:text-base">
                                $497
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      </Card>
                      
                      <Card className="p-3 sm:p-4 cursor-pointer hover:bg-card/30 transition-colors border-secondary/50">
                        <div className="flex items-start sm:items-center space-x-3">
                          <RadioGroupItem value="automation" id="automation" className="mt-1 sm:mt-0" />
                          <Label htmlFor="automation" className="flex-1 cursor-pointer">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-secondary">MEGA-MONEY Automation Tool</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">Creates AUTHENTIC content that YouTube approves for monetization</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge className="bg-gradient-money text-accent-foreground text-xs sm:text-sm">
                      🎉 40% OFF - Limited Time!
                    </Badge>
                    <Badge className="bg-destructive text-destructive-foreground text-xs sm:text-sm">
                      🚨 Beats July 15 Ban!
                    </Badge>
                  </div>
                </div>
                              <div className="text-right">
                                <div className="text-xs sm:text-sm text-muted-foreground line-through">$2,497</div>
                                <Badge className="bg-gradient-youtube text-primary-foreground text-sm sm:text-base lg:text-lg">
                                  $1,497
                                </Badge>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </Card>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 mt-6">
                    <Zap className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    RESERVE MY SPOT NOW!
                  </Button>
                  
                  <div className="text-center text-xs sm:text-sm text-muted-foreground px-2">
                    <Check className="inline h-3 w-3 sm:h-4 sm:w-4 text-secondary mr-1" />
                    100% Money-Back Guarantee
                    <span className="mx-1 sm:mx-2">•</span>
                    <Check className="inline h-3 w-3 sm:h-4 sm:w-4 text-secondary mr-1" />
                    No Hidden Fees
                    <span className="mx-1 sm:mx-2">•</span>
                    <Check className="inline h-3 w-3 sm:h-4 sm:w-4 text-secondary mr-1" />
                    Lifetime Support
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 text-center border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-money bg-clip-text text-transparent mb-3 sm:mb-4">
            MoneyTuber
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 max-w-md mx-auto">
            Transform your YouTube dreams into cash reality
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2024 MoneyTuber. All rights reserved. Results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;