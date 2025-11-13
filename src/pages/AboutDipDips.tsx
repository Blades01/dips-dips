// src/pages/AboutDipDips.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type ContentItem = {
  key: string;
  title: string;
  description: string;
};

const contentMap: Record<string, ContentItem> = {
  mission: {
    key: "mission",
    title: "Our Mission",
    description: `Redefining Quick, Affordable, Healthy Vegetarian Dining in Under 10 Minutes.

In today’s fast-paced urban environment, individuals increasingly face time constraints that limit their ability to opt for nutritious meals. The current food landscape is dominated by fast food and convenience-based offerings that sometimes prioritize speed over nutrition. This imbalance has created a growing demand for quick, healthy, and affordable ready-to-eat options.`,
  },
  values: {
    key: "values",
    title: "Our Values",
    description: `DipDips emerges as a smart, health-first alternate solution designed to combine the speed of fast food with nutrition — all ready in under 10 minutes.

It aims to revolutionize the ready-to-eat (RTE) and quick-service industry by making wholesome eating effortless and accessible for everyone.`,
  },
  promise: {
    key: "promise",
    title: "Our Promise",
    description: `DipDips is a next-generation ready-to-eat (RTE) food startup focused on serving instant, nutritious meals within 10 minutes.

The brand stands at the intersection of health, convenience, and innovation, catering to individuals seeking a balance between busy lifestyles and mindful eating.

DipDips offers a curated menu of instant ready to eat meals packed with essential nutrients and freshness — all designed for quick preparation, portability, and taste satisfaction.`,
  },
};

const AboutDipDips: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const data = (type && contentMap[type]) || contentMap["mission"];

  return (
    <section className="py-20 bg-white min-h-screen">
      <Header/>
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-primary hover:text-primary/70 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-lg">Back</span>
        </button>

        <h1 className="text-3xl font-bold mb-6 text-foreground">{data.title}</h1>

        <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
          {data.description.split("\n").map((line, idx) => (
            <p key={idx}>{line.trim()}</p>
          ))}
        </div>
      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default AboutDipDips;
