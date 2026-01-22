import React from "react";
import Button from "@/components/ui/Button";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: "default" | "navy" | "teal";
}

export default function CTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTAProps) {
  const variants = {
    default: "bg-gradient-to-r from-teal-accent to-teal-light text-white",
    navy: "bg-navy text-white",
    teal: "bg-teal-accent text-white",
  };

  return (
    <section className={`section-padding ${variants[variant]}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg mb-8 opacity-90">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryCTA.href}
              variant={variant === "default" ? "secondary" : "primary"}
              size="lg"
              className={variant === "default" ? "bg-white text-teal-accent hover:bg-gray-100" : ""}
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className={variant === "default" ? "border-white text-white hover:bg-white hover:text-teal-accent" : "border-white text-white hover:bg-white hover:text-navy"}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
