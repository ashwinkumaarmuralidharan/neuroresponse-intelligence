import React from "react";
import Button from "@/components/ui/Button";

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {subtext}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg" className="hover-lift">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-navy hover-lift">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
