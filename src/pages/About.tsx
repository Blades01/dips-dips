import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AboutDipDipsButton from "@/components/ui/AboutDipDipsButton";


import { Heart, Leaf, Users, Award, Target, Utensils } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "We prioritize your health and wellbeing in every meal we prepare"
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "Only the freshest, locally sourced organic ingredients make it to your plate"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building healthier communities one meal at a time"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality standards ensure every meal meets our high expectations"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "25+", label: "Cities Served" },
    { number: "100+", label: "Healthy Dishes" },
    { number: "8+", label: "Years of Excellence" }
  ];

  const team = [
    {
      name: "Chef Priya Sharma",
      role: "Head Chef & Nutrition Expert",
      description: "15+ years of experience in creating healthy, delicious recipes"
    },
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "Passionate about bringing healthy food to every Indian household"
    },
    {
      name: "Dr. Anita Patel",
      role: "Nutritionist",
      description: "Ensures every meal meets optimal nutritional standards"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"> <div className="container mx-auto px-4"> <div className="text-center max-w-4xl mx-auto"> <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"> About DipDips </Badge> <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6"> Hygienic Food for <span className="text-primary">Everyone</span> </h1> <p className="text-lg text-muted-foreground"> Founded with a mission to make healthy, hygienic food accessible to all, DipDips has been serving nutritious meals prepared with love and care since 2016. </p>
        <AboutDipDipsButton />
         </div> 
        </div> </section>
    


        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    DipDips was born from a simple belief: everyone deserves access to healthy, 
                    hygienic food that doesn't compromise on taste. What started as a small kitchen 
                    in Mumbai has grown into a trusted name across 25+ cities in India.
                  </p>
                  <p>
                    Our journey began when our founder, Rajesh Kumar, noticed the lack of truly 
                    healthy food options that were both affordable and delicious. Partnering with 
                    experienced chefs and nutritionists, we created a menu that balances nutrition 
                    with flavor.
                  </p>
                  <p>
                    Today, we're proud to serve over 50,000 satisfied customers who trust us 
                    for their daily nutrition needs. Every meal is prepared with the same care 
                    and attention to hygiene that we started with.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Utensils className="w-24 h-24 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do, from sourcing ingredients 
                to preparing and serving your meals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Impact</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate experts behind every healthy meal at DipDips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-medium">
                  <CardContent className="pt-8">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Mission, Vision & <span className="text-primary">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize the way India eats by making healthy, hygienic food accessible, 
                    affordable, and absolutely delicious. We believe that good health starts with good food.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted healthy food brand, inspiring millions to embrace 
                    nutritious eating habits and lead healthier, happier lives through our fresh meals.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Values
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health first, quality assured, fresh ingredients, community focus, and hygiene excellence. 
                    These principles guide every decision we make and every meal we prepare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;