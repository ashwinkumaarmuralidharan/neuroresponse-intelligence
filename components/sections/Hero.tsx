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
    <section 
      className="section-padding text-white relative overflow-hidden bg-gradient-hero"
      style={{
        background: 'linear-gradient(135deg, #0A1929 0%, #14B8A6 50%, #0A1929 100%)',
        backgroundSize: '200% 200%',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-light rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
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
