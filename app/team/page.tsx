import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Team | NeuroResponse Intelligence",
  description: "Meet the team behind NeuroResponse Intelligence: combining expertise in business, regulatory affairs, and biomedical engineering.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-200">
              Combining expertise in business, regulatory affairs, and deep
              learning development
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Meet the founders"
            description="Building NeuroResponse Intelligence"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder & CEO */}
              <Card className="text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-teal-light flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-teal-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Ashwin Kumaar Murali Dharan
                </h3>
                <p className="text-teal-accent font-semibold mb-4">
                  Founder & CEO
                </p>
                <div className="space-y-3 text-text-secondary text-left">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-teal-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Background in business, quality, regulatory affairs, and
                      clinical affairs
                    </p>
                  </div>
                  <p className="text-sm">
                    Ashwin brings extensive experience in navigating regulatory
                    pathways, quality management, and clinical affairs. His
                    background ensures that NeuroResponse Intelligence is built
                    with regulatory awareness and quality principles from the
                    ground up.
                  </p>
                </div>
              </Card>

              {/* CTO */}
              <Card className="text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-teal-light flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-teal-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Mehran Khodadadzade
                </h3>
                <p className="text-teal-accent font-semibold mb-4">CTO</p>
                <div className="space-y-3 text-text-secondary text-left">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-teal-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Background in biomedical engineering and end-to-end deep
                      learning development
                    </p>
                  </div>
                  <p className="text-sm">
                    Mehran leads the technical development of our machine
                    learning models and platform. His expertise in biomedical
                    engineering and deep learning enables us to build robust,
                    clinically-relevant predictive models.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-teal-accent" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Based in Leuven, Belgium
            </h2>
            <p className="text-lg text-text-secondary">
              We are building NeuroResponse Intelligence from Leuven, a hub of
              innovation in healthcare and technology. Our location in the heart
              of Europe positions us well to collaborate with clinical partners
              and researchers across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <CTA
        title="We're building with clinicians and partners"
        description="Interested in collaboration, early access, or learning more? Get in touch."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        variant="teal"
      />
    </>
  );
}
