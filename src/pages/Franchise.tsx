import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FranchiseSection } from "@/components/FranchiseSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Award, Briefcase } from "lucide-react";

const Franchise = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Our franchise partners enjoy an average ROI of 35% within the first year"
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Comprehensive training and continuous business support from our expert team"
    },
    {
      icon: Award,
      title: "Established Brand",
      description: "Join a trusted brand with 8+ years of market presence and customer loyalty"
    },
    {
      icon: Briefcase,
      title: "Business Tools",
      description: "Advanced POS system, inventory management, and pickup management platform"
    }
  ];

  const requirements = [
    "Minimum 500 sq ft space in high-footfall area",
    "Investment capacity as per chosen franchise model",
    "Commitment to maintain FreshBites quality standards",
    "Willingness to undergo comprehensive training program",
    "Local market knowledge and community connections",
    "Passion for healthy food and customer service"
  ];

  const process = [
    {
      step: "01",
      title: "Application",
      description: "Submit your franchise application with required details"
    },
    {
      step: "02", 
      title: "Evaluation",
      description: "Our team evaluates your application and location"
    },
    {
      step: "03",
      title: "Agreement",
      description: "Sign franchise agreement and complete documentation"
    },
    {
      step: "04",
      title: "Setup",
      description: "Store setup, equipment installation, and staff training"
    },
    {
      step: "05",
      title: "Launch",
      description: "Grand opening with full marketing and operational support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Business Partnership
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Franchise <span className="text-primary">Opportunities</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join India's fastest-growing healthy food pickup network. Build a profitable 
                business with our proven franchise model and comprehensive support system.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">FreshBites Franchise?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with us and enjoy the benefits of a well-established business model 
                in the rapidly growing healthy food industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Franchise <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple and straightforward process to become a FreshBites franchise partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Franchise <span className="text-primary">Requirements</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  To ensure the success of your franchise, we have established certain 
                  requirements that help maintain our brand standards and quality.
                </p>

                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Investment Models</CardTitle>
                  <p className="text-muted-foreground">
                    Choose from our flexible investment options based on your budget and location.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Compact Model</h4>
                    <p className="text-sm text-muted-foreground mb-2">Perfect for smaller locations</p>
                    <p className="text-2xl font-bold text-primary">₹8-10 Lacs</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Standard Model</h4>
                    <p className="text-sm text-muted-foreground mb-2">Ideal for medium-sized locations</p>
                    <p className="text-2xl font-bold text-primary">₹12-15 Lacs</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Premium Model</h4>
                    <p className="text-sm text-muted-foreground mb-2">For high-traffic prime locations</p>
                    <p className="text-2xl font-bold text-primary">₹15+ Lacs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Franchise Enquiry Section */}
        <FranchiseSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Franchise;