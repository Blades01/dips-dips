import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Utensils } from "lucide-react";
import turmericMilkImg from "@/assets/turmeric-milk.jpg";
import freshLimeWaterImg from "@/assets/fresh-lime-water.jpg";

const Menu = () => {
  const menuCategories = [
    {
      name: "Healthy Bowls",
      description: "Nutritious and filling bowl meals",
      items: [
        {
          name: "Masala Dosa Bowl",
          description: "Crispy dosa served with sambar, coconut chutney, and potato filling",
          rating: 4.8,
          prepTime: "15 mins",
          calories: "420 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop"
        },
        {
          name: "Idli Sambar Bowl",
          description: "Steamed rice cakes with lentil sambar and coconut chutney",
          rating: 4.9,
          prepTime: "10 mins",
          calories: "280 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop"
        },
        {
          name: "Upma Bowl",
          description: "Savory semolina porridge with vegetables and spices",
          rating: 4.7,
          prepTime: "12 mins",
          calories: "320 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      name: "Fresh Salads",
      description: "Crisp and refreshing salad combinations",
      items: [
        {
          name: "Kachumber Salad",
          description: "Fresh cucumber, tomato, onion with lemon and spices",
          rating: 4.6,
          prepTime: "8 mins",
          calories: "150 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
          name: "Sprouts Salad",
          description: "Mixed sprouts with vegetables, lime, and chaat masala",
          rating: 4.8,
          prepTime: "10 mins",
          calories: "180 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      name: "Traditional Thalis",
      description: "Complete balanced meals",
      items: [
        {
          name: "South Indian Thali",
          description: "Rice, sambar, rasam, vegetable curry, curd, and papad",
          rating: 4.9,
          prepTime: "20 mins",
          calories: "550 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
        },
        {
          name: "Mini Thali",
          description: "Roti, dal, sabzi, rice, and pickle",
          rating: 4.7,
          prepTime: "18 mins",
          calories: "480 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      name: "Healthy Drinks",
      description: "Fresh and natural beverages",
      items: [
        {
          name: "Buttermilk (Chaas)",
          description: "Spiced yogurt drink with curry leaves and ginger",
          rating: 4.5,
          prepTime: "5 mins",
          calories: "80 cal",
          isVegetarian: true,
          image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&h=300&fit=crop"
        },
        {
          name: "Fresh Lime Water",
          description: "Refreshing lime juice with mint and rock salt",
          rating: 4.6,
          prepTime: "5 mins",
          calories: "40 cal",
          isVegetarian: true,
          image: freshLimeWaterImg
        },
        {
          name: "Turmeric Milk",
          description: "Golden milk with turmeric, black pepper, and honey",
          rating: 4.8,
          prepTime: "8 mins",
          calories: "120 cal",
          isVegetarian: true,
          image: turmericMilkImg
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
                Discover our carefully curated selection of healthy, delicious Indian meals 
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
                    <Card key={itemIndex} className="shadow-medium hover:shadow-strong transition-all duration-300 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {item.isVegetarian && (
                          <Badge className="absolute top-4 right-4 bg-green-100 text-green-800 border-green-200">
                            Vegetarian
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                            {item.rating}
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
                            <Utensils className="w-4 h-4 mr-1" />
                            {item.calories}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          Order for Pickup
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
