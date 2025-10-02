import { ShoppingCart, ShoppingBag, UtensilsCrossed } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose Your Favorite",
      description: "Choose your favorite meals and order online or by phone. It's easy to customize your order.",
      step: "01"
    },
    {
      icon: UtensilsCrossed,
      title: "We Prepare Fresh",
      description: "Our expert chefs prepare your meals with the freshest ingredients and authentic recipes.",
      step: "02"
    },
    {
      icon: ShoppingBag,
      title: "Ready for Pickup",
      description: "Your prepared meals are ready for pickup fresh and delicious when you arrive.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From selection to pickup, we've made it simple for you to enjoy healthy, 
            delicious meals without the hassle.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center p-8 bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-medium mb-4">
            ✨ Ready to get started?
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Order your first healthy meal today
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join thousands of happy customers who trust us for their daily nutrition needs.
          </p>
        </div>
      </div>
    </section>
  );
};