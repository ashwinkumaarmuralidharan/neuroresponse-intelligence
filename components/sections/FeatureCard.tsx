import React from "react";
import Card from "@/components/ui/Card";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={`${className} hover-lift`} hover>
      {icon && (
        <div className="mb-4 text-teal-accent transform transition-transform duration-300 hover:scale-110" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </Card>
  );
}
