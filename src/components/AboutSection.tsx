import { ShoppingCart, ShoppingBag, UtensilsCrossed, HeartHandshake, Leaf, Smile } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: HeartHandshake,
      title: "Our Mission",
      description:
        "To serve hygienic, fresh, and delicious meals that bring joy and health to every customer."
    },
    {
      icon: Leaf,
      title: "Our Values",
      description:
        "We believe in freshness, sustainability, and a customer-first approach in everything we do."
    },
    {
      icon: Smile,
      title: "Our Promise",
      description:
        "Quality ingredients, authentic taste, and friendly service — every single time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">DipDips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At DipDips, we bring together taste, hygiene, and happiness. From our
            kitchens to your table, we make sure every bite reflects our passion
            for quality and freshness.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
