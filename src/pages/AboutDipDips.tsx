import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutDipDips: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
          About DipDips
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          DipDips is a brand dedicated to providing hygienic, healthy, and delicious meals
          made from fresh ingredients. Our mission is to make healthy eating simple and
          accessible to everyone across India. Every dish we serve reflects our core
          value — <strong>“Hygienic Food for Everyone.”</strong>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutDipDips;
