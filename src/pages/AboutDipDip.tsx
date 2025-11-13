import { useLocation } from "react-router-dom";

export const AboutDipDips = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selected = params.get("section");

  const data = [
    {
      key: "mission",
      title: "Our Mission",
      content: `Redefining Quick, Affordable, Healthy Vegetarian Dining in Under 10 Minutes.
      In today’s fast-paced urban environment, individuals increasingly face time constraints that limit their ability to opt for nutritious meals. The current food landscape is dominated by fast food and convenience-based offerings that sometimes prioritize speed over nutrition. This imbalance has created a growing demand for quick, healthy, and affordable ready-to-eat options.`,
    },
    {
      key: "values",
      title: "Our Values",
      content: `DipDips emerges as a smart, health-first alternate solution designed to combine the speed of fast food with nutrition — all ready in under 10 minutes. It aims to revolutionize the ready-to-eat (RTE) and quick-service industry by making wholesome eating effortless and accessible for everyone.`,
    },
    {
      key: "promise",
      title: "Our Promise",
      content: `DipDips is a next-generation ready-to-eat (RTE) food startup focused on serving instant, nutritious meals within 10 minutes. The brand stands at the intersection of health, convenience, and innovation, catering to individuals seeking a balance between busy lifestyles and mindful eating.
      DipDips offers a curated menu of instant ready-to-eat meals packed with essential nutrients and freshness — all designed for quick preparation, portability, and taste satisfaction.`,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-12">
          About DipDips – A Smarter Way to Eat Healthy
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.key}
              className={`border rounded-2xl p-6 shadow-md transition-all ${
                selected === item.key
                  ? "bg-primary/10 shadow-lg"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              {selected === item.key && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
