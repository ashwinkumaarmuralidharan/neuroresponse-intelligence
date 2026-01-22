import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/sections/FeatureCard";
import CTA from "@/components/sections/CTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import WaveformIcon from "@/components/icons/WaveformIcon";
import BrainNetworkIcon from "@/components/icons/BrainNetworkIcon";
import { Target, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Home | NS-Predict.ai",
  description: "Predict neurostimulation responders before surgery. Reduce non-responder implants and improve patient selection for VNS therapy in drug-resistant epilepsy.",
};

const faqItems = [
  {
    question: "Is this a medical device?",
    answer:
      "Our product is currently in development and is intended to support research and clinical decision-making. It is not a substitute for clinician judgment and is not yet cleared for clinical use. We are working toward appropriate regulatory pathways.",
  },
  {
    question: "What data do you use?",
    answer:
      "Our models are designed to work with clinical data, device data, and optional biomarkers. All data handling follows strict privacy and security principles, with site-specific configuration to ensure compliance with local regulations.",
  },
  {
    question: "How accurate is the prediction?",
    answer:
      "Our models are in development and validation. We aim to provide responder probability estimates with confidence intervals to support clinical decision-making. Performance metrics will be validated through appropriate clinical studies.",
  },
  {
    question: "When will this be available?",
    answer:
      "We are currently in the research and development phase, working with clinical partners to validate our approach. Please contact us if you are interested in collaboration or early access.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Predict neurostimulation responders before surgery."
        subtext="Reduce non-responder implants, improve patient selection, and support clinical decision-making with AI-powered prediction."
        primaryCTA={{ label: "Request a demo", href: "/contact" }}
        secondaryCTA={{ label: "How it works", href: "/product" }}
      />

      {/* Trust Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <p className="text-xl text-text-secondary">
              Designed for collaboration with clinicians, hospitals, and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="The non-responder problem"
            description="Not all patients respond to neurostimulation therapy, creating significant challenges for patients, clinicians, and healthcare systems."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              Neurostimulation devices, such as vagus nerve stimulation (VNS) for
              drug-resistant epilepsy, offer hope for patients who have exhausted
              other treatment options. However, a significant portion of patients
              do not respond to therapy, leading to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Unnecessary surgical procedures and associated risks</li>
              <li>Delayed access to effective treatments</li>
              <li>Patient burden and disappointment</li>
              <li>Increased healthcare costs</li>
              <li>Extended time-to-therapy for those who would benefit</li>
            </ul>
            <p className="text-lg">
              Current selection criteria are limited, and there is a clear need
              for better tools to predict responder likelihood before
              implantation.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Our solution"
            description="AI-powered prediction to support clinical decision-making"
          />
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              NS-Predict.ai aims to predict responder probability
              before surgery using machine learning models trained on clinical
              and device data. Our approach:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center transform transition-all duration-300 hover:scale-105 hover-lift p-6 rounded-xl bg-white border border-border shadow-sm">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-accent to-teal-light flex items-center justify-center animate-pulse-slow"
                  style={{
                    background: 'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
                  }}
                >
                  <WaveformIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Data Input</h3>
                <p className="text-sm text-text-secondary">
                  Clinical data, device parameters, and optional biomarkers
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-105 hover-lift p-6 rounded-xl bg-white border border-border shadow-sm" style={{ animationDelay: '0.2s' }}>
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-accent to-teal-light flex items-center justify-center animate-pulse-slow" 
                  style={{ 
                    animationDelay: '0.3s',
                    background: 'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
                  }}
                >
                  <BrainNetworkIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-navy mb-2">ML Modeling</h3>
                <p className="text-sm text-text-secondary">
                  Risk stratification and responder likelihood assessment
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-105 hover-lift p-6 rounded-xl bg-white border border-border shadow-sm" style={{ animationDelay: '0.4s' }}>
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-accent to-teal-light flex items-center justify-center animate-pulse-slow" 
                  style={{ 
                    animationDelay: '0.6s',
                    background: 'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
                  }}
                >
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Output Report</h3>
                <p className="text-sm text-text-secondary">
                  Probability scores, confidence intervals, and interpretable
                  insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Focus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="mb-4">
              <Badge variant="teal">Initial Focus</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              First application: VNS for drug-resistant epilepsy
            </h2>
            <p className="text-lg text-text-secondary">
              We are initially focusing on vagus nerve stimulation (VNS) for
              patients with drug-resistant epilepsy, where prediction of
              responder status before implantation could significantly improve
              patient selection and outcomes.
            </p>
            <div className="mt-8">
              <Button href="/vns-epilepsy" variant="outline" className="hover-lift">
                Learn more about our use case
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <SectionHeader
            title="Key features"
            description="Designed to support clinical workflows"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Pre-surgical responder probability"
              description="Get probability estimates before implantation to support patient selection decisions."
            />
            <FeatureCard
              icon={<BrainNetworkIcon className="w-8 h-8" />}
              title="Explainable insights"
              description="Where possible, we provide interpretable features to help clinicians understand predictions."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Cohort benchmarking"
              description="Compare individual patient predictions against relevant cohort data."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Clinical workflow fit"
              description="Designed to integrate with existing clinical decision-making processes."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Frequently asked questions"
            description="Common questions about our approach"
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Ready to learn more?"
        description="Contact us to discuss how NS-Predict.ai can support your clinical practice."
        primaryCTA={{ label: "Get in touch", href: "/contact" }}
        secondaryCTA={{ label: "View our approach", href: "/approach" }}
      />
    </>
  );
}
