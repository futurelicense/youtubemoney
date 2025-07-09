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
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 animate-bounce-in bg-gradient-money text-accent-foreground text-lg px-6 py-2">
            ⚡ LIMITED TIME: 40% OFF AUTOMATION TOOL ⚡
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-youtube bg-clip-text text-transparent animate-scale-pulse">
            MoneyTuber
          </h1>
          
          <p className="text-3xl md:text-4xl font-bold mb-4 text-secondary animate-float">
            20 Days to YouTube Monetization
          </p>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Join the Journey and Do-It-Yourself OR use our MEGA-MONEY automation tool 
            to get your YouTube monetized while you sit back and collect payouts
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20">
                <feature.icon className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">{feature.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-xl px-8 py-6">
              <PlayCircle className="mr-2 h-6 w-6" />
              GRAB 40% DISCOUNT NOW
            </Button>
            <Button variant="money" size="lg" className="text-xl px-8 py-6">
              <Users className="mr-2 h-6 w-6" />
              JOIN TRAINING
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/10 backdrop-blur-sm border-border/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary">1000+</h3>
                <p className="text-muted-foreground">Students Monetized</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/10 backdrop-blur-sm border-border/20">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary">$2.8M+</h3>
                <p className="text-muted-foreground">Total Revenue Generated</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/10 backdrop-blur-sm border-border/20">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary">20 Days</h3>
                <p className="text-muted-foreground">Average Time to Monetize</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-money bg-clip-text text-transparent">
            Real Students, Real Results
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Watch how our students went from zero to YouTube monetization heroes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/20 backdrop-blur-sm border-border/20 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-money flex items-center justify-center text-accent-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <Badge className="bg-gradient-success text-primary-foreground">
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
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <Button variant="ghost" className="mt-4 text-secondary hover:text-secondary/80">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-youtube bg-clip-text text-transparent">
              See The Money Rolling In
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real dashboards from our students showing life-changing income streams
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-money opacity-20 rounded-lg blur-xl"></div>
            <Card className="relative bg-card/10 backdrop-blur-sm border-border/20 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={dashboardImage} 
                  alt="YouTube Monetization Dashboard"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-gradient-success text-primary-foreground px-6 py-3 rounded-full font-bold text-lg animate-pulse-glow">
                  🎉 $15,847 This Month!
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">4.2M</div>
              <div className="text-muted-foreground">Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">247K</div>
              <div className="text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">$0.07</div>
              <div className="text-muted-foreground">CPM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/20 backdrop-blur-sm border-border/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-money bg-clip-text text-transparent">
                  Reserve Your Spot NOW!
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Limited slots available. Don't miss your chance to join the MoneyTuber revolution!
                </CardDescription>
                
                <div className="flex justify-center gap-4 mt-6">
                  <Badge className="bg-gradient-youtube text-primary-foreground animate-pulse">
                    🔥 Only 47 Spots Left
                  </Badge>
                  <Badge className="bg-gradient-success text-primary-foreground animate-pulse">
                    ⏰ 40% Discount Ends Soon
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2 text-lg p-6 bg-background/50 border-border/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 text-lg p-6 bg-background/50 border-border/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp" className="text-lg font-medium">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="mt-2 text-lg p-6 bg-background/50 border-border/50"
                      placeholder="Enter your WhatsApp number"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-lg font-medium mb-4 block">Choose Your Path to Success *</Label>
                    <RadioGroup 
                      value={formData.option} 
                      onValueChange={(value) => setFormData({...formData, option: value})}
                      className="space-y-4"
                    >
                      <Card className="p-4 cursor-pointer hover:bg-card/30 transition-colors">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="training" id="training" />
                          <Label htmlFor="training" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-lg font-bold text-secondary">Join Training Program</h3>
                                <p className="text-muted-foreground">Learn step-by-step monetization strategies</p>
                              </div>
                              <Badge className="bg-gradient-success text-primary-foreground">
                                $497
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      </Card>
                      
                      <Card className="p-4 cursor-pointer hover:bg-card/30 transition-colors border-secondary/50">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="automation" id="automation" />
                          <Label htmlFor="automation" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-lg font-bold text-secondary">MEGA-MONEY Automation Tool</h3>
                                <p className="text-muted-foreground">Sit back while AI grows your channel</p>
                                <Badge className="bg-gradient-money text-accent-foreground mt-2">
                                  🎉 40% OFF - Limited Time!
                                </Badge>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground line-through">$2,497</div>
                                <Badge className="bg-gradient-youtube text-primary-foreground text-lg">
                                  $1,497
                                </Badge>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </Card>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full text-xl py-6">
                    <Zap className="mr-2 h-6 w-6" />
                    RESERVE MY SPOT NOW!
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <Check className="inline h-4 w-4 text-secondary mr-1" />
                    100% Money-Back Guarantee
                    <span className="mx-2">•</span>
                    <Check className="inline h-4 w-4 text-secondary mr-1" />
                    No Hidden Fees
                    <span className="mx-2">•</span>
                    <Check className="inline h-4 w-4 text-secondary mr-1" />
                    Lifetime Support
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="text-3xl font-bold bg-gradient-money bg-clip-text text-transparent mb-4">
            MoneyTuber
          </div>
          <p className="text-muted-foreground mb-4">
            Transform your YouTube dreams into cash reality
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 MoneyTuber. All rights reserved. Results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;