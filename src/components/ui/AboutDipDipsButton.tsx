import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutDipDipsButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-10 bg-transperent from-primary/5 to-secondary/5">
      <Button
        onClick={() => navigate("/about-dipdips")}
        className="bg-primary text-white px-6 py-3 text-lg rounded-xl hover:bg-primary/90 transition-all"
      >
        About DipDips
      </Button>
    </div>
  );
};

export default AboutDipDipsButton;
