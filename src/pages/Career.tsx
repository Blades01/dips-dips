import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, TrendingUp, Award } from "lucide-react";

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-primary/90 to-primary-glow/80 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Career
            </h1>
          </div>
        </section>

        {/* Work With Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Work With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                As India's fastest growing healthy food brand, we're always on the lookout for great talent 
                for our operating and upcoming branches.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                To find suitable opportunities, please email your resume at{" "}
                <a 
                  href="mailto:hr@freshbites.com" 
                  className="text-primary hover:text-primary-glow font-medium transition-colors"
                >
                  hr@freshbites.com
                </a>
              </p>
              <p className="text-muted-foreground">
                We will contact you as and when a suitable opportunity arises.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Join <span className="text-primary">FreshBites?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of a team that's revolutionizing healthy eating in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Rapid Growth",
                  description: "Join a fast-growing brand with expansion opportunities"
                },
                {
                  icon: Users,
                  title: "Great Team",
                  description: "Work with passionate professionals who care about health"
                },
                {
                  icon: Award,
                  title: "Recognition",
                  description: "Your contributions are valued and rewarded"
                },
                {
                  icon: Mail,
                  title: "Open Culture",
                  description: "Collaborative environment with open communication"
                }
              ].map((benefit, index) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Are you ready to order the best healthy food?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit us today and experience the freshness!
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg">
              Order Now for Pickup
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;
