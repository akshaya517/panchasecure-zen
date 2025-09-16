import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, BarChart3, Bell, Shield, Users, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-panchakarma.jpg";
import dashboardImage from "@/assets/dashboard-illustration.jpg";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "Intelligent therapy scheduling system that manages appointments, practitioner availability, and treatment sequences automatically."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated alerts for pre/post-procedure precautions, appointment reminders, and treatment progress updates."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Real-time visualization of patient progress with customizable charts, wellness scores, and recovery milestones."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient profiles with treatment history, preferences, and personalized care plans."
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Advanced analytics for treatment outcomes, center efficiency, and patient satisfaction metrics."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA-compliant data security with encrypted patient records and secure communication channels."
    }
  ];

  const benefits = [
    "Reduce manual scheduling time by 75%",
    "Improve patient compliance by 40%",
    "Increase center efficiency by 60%",
    "Enhance treatment outcomes tracking",
    "Streamline practitioner workflows",
    "Enable data-driven decision making"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-wellness overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Serene Panchakarma treatment environment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-card mb-6">
              Revolutionizing
              <span className="block bg-gradient-healing bg-clip-text text-transparent">
                Panchakarma Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-card/90 mb-8 leading-relaxed">
              The first comprehensive software solution designed specifically for Ayurveda centers, 
              combining traditional authenticity with modern efficiency for optimal patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="healing" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-card/10 border-card/20 text-card hover:bg-card/20">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-card/80">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">16B+</div>
                <div className="text-sm">Projected Ayurveda Market by 2026</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm">Reduction in Manual Scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm">Improvement in Patient Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Comprehensive Panchakarma Management Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your Ayurveda center operations with our intelligent software solution 
              designed for modern healthcare delivery while preserving traditional practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-healing transition-healing">
                  <div className="w-12 h-12 bg-gradient-healing rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-healing-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gradient-wellness">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Intelligent Dashboard for 
                <span className="text-healing"> Real-Time Management</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Monitor therapy progress, manage schedules, and track patient outcomes 
                with our intuitive dashboard designed for healthcare professionals.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-healing flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="healing" size="lg">
                Explore Dashboard
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-healing rounded-2xl blur-xl opacity-20 transform rotate-3"></div>
              <img 
                src={dashboardImage} 
                alt="Panchakarma management dashboard interface"
                className="relative z-10 w-full rounded-2xl shadow-healing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Ayurveda Center?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join forward-thinking practitioners who are modernizing their Panchakarma 
              treatments while maintaining traditional authenticity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="healing" className="text-lg px-8 py-4">
                Start 30-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • HIPAA compliant • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
