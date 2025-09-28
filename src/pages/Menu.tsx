import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      name: "Healthy Bowls",
      description: "Nutritious and filling bowl meals",
      items: [
        {
          name: "Mediterranean Quinoa Bowl",
          description: "Quinoa, grilled vegetables, feta cheese, olives, and herb dressing",
          price: "₹295",
          rating: 4.8,
          prepTime: "15 mins",
          calories: "450 cal",
          isVegetarian: true
        },
        {
          name: "Protein Power Bowl",
          description: "Grilled chicken, brown rice, avocado, and mixed greens",
          price: "₹345",
          rating: 4.9,
          prepTime: "18 mins",
          calories: "520 cal",
          isVegetarian: false
        },
        {
          name: "Asian Fusion Bowl",
          description: "Teriyaki tofu, jasmine rice, edamame, and sesame dressing",
          price: "₹275",
          rating: 4.7,
          prepTime: "12 mins",
          calories: "380 cal",
          isVegetarian: true
        }
      ]
    },
    {
      name: "Fresh Salads",
      description: "Crisp and refreshing salad combinations",
      items: [
        {
          name: "Garden Fresh Salad",
          description: "Mixed greens, cherry tomatoes, cucumber, and balsamic dressing",
          price: "₹195",
          rating: 4.6,
          prepTime: "8 mins",
          calories: "180 cal",
          isVegetarian: true
        },
        {
          name: "Grilled Chicken Caesar",
          description: "Romaine lettuce, grilled chicken, parmesan, and caesar dressing",
          price: "₹285",
          rating: 4.8,
          prepTime: "15 mins",
          calories: "320 cal",
          isVegetarian: false
        }
      ]
    },
    {
      name: "Smoothies & Juices",
      description: "Fresh and natural beverages",
      items: [
        {
          name: "Green Detox Smoothie",
          description: "Spinach, apple, cucumber, celery, and ginger",
          price: "₹145",
          rating: 4.5,
          prepTime: "5 mins",
          calories: "120 cal",
          isVegetarian: true
        },
        {
          name: "Berry Protein Shake",
          description: "Mixed berries, protein powder, almond milk, and honey",
          price: "₹165",
          rating: 4.7,
          prepTime: "5 mins",
          calories: "180 cal",
          isVegetarian: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Menu</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover our carefully curated selection of healthy, delicious meals 
                prepared fresh daily with the finest ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="shadow-medium hover:shadow-strong transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {item.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              {item.isVegetarian && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  Vegetarian
                                </Badge>
                              )}
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                {item.rating}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{item.price}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.prepTime}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {item.calories}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          Order Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always happy to customize meals according to your dietary preferences and nutritional needs.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg">
              Contact Us for Custom Orders
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;