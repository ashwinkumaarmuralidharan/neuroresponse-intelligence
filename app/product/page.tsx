import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/sections/FeatureCard";
import Card from "@/components/ui/Card";
import WaveformIcon from "@/components/icons/WaveformIcon";
import BrainNetworkIcon from "@/components/icons/BrainNetworkIcon";
import { Database, Brain, FileText, Shield, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Product | NS-Predict.ai",
  description: "Learn how NS-Predict.ai works: from data inputs through ML modeling to actionable reports that support clinical decision-making.",
};

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="section-padding bg-gradient-hero text-white"
        style={{
          background: 'linear-gradient(135deg, #0A1929 0%, #051422 50%, #0A1929 100%)',
          backgroundSize: '200% 200%',
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How it works
            </h1>
            <p className="text-xl text-gray-200">
              Our platform aims to predict neurostimulation responder probability
              using machine learning models trained on clinical and device data.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="What we do"
            description="Supporting clinical decision-making with AI-powered prediction"
          />
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              NS-Predict.ai is designed to provide responder
              probability estimates before neurostimulation device implantation.
              Our models analyze clinical data, device parameters, and optional
              biomarkers to generate risk stratification and responder likelihood
              assessments.
            </p>
            <p className="text-lg">
              The output is designed to support—not replace—clinical judgment,
              providing additional information to help clinicians make more
              informed patient selection decisions.
            </p>
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="What we don't do"
            description="Important limitations and boundaries"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Replace clinical judgment
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Our predictions are designed to support, not replace,
                      clinician decision-making.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Guarantee outcomes
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We provide probability estimates, not guarantees. All
                      medical decisions remain the responsibility of treating
                      clinicians.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Make regulatory claims
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Our product is in development and is not yet cleared for
                      clinical use. We are working toward appropriate regulatory
                      pathways.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Provide medical advice
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Our platform is for research and clinical decision support
                      only. It does not constitute medical advice.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our process"
            description="From data to actionable insights"
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-light flex items-center justify-center">
                  <Database className="w-10 h-10 text-teal-accent" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-accent text-white text-sm font-semibold">
                    Step 1
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  Data Inputs
                </h3>
                <p className="text-text-secondary">
                  Clinical data, device parameters, and optional biomarkers are
                  collected and prepared for analysis. Data handling follows
                  strict privacy and security principles.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-light flex items-center justify-center">
                  <Brain className="w-10 h-10 text-teal-accent" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-accent text-white text-sm font-semibold">
                    Step 2
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  ML Modeling
                </h3>
                <p className="text-text-secondary">
                  Machine learning models analyze the data to generate risk
                  stratification and responder likelihood assessments. Models
                  are trained and validated using appropriate clinical datasets.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-light flex items-center justify-center">
                  <FileText className="w-10 h-10 text-teal-accent" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-accent text-white text-sm font-semibold">
                    Step 3
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  Output Report
                </h3>
                <p className="text-text-secondary">
                  The system generates a report with responder probability,
                  confidence intervals, and interpretable features to support
                  clinical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Security & privacy principles"
            description="Protecting patient data and ensuring compliance"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Data Security
                    </h3>
                    <p className="text-text-secondary text-sm">
                      All data is encrypted in transit and at rest. Access
                      controls and audit logs ensure data integrity and
                      traceability.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Privacy First</h3>
                    <p className="text-text-secondary text-sm">
                      We follow GDPR and other applicable privacy regulations.
                      Data minimization and purpose limitation principles guide
                      our approach.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Site-Specific Configuration
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Our platform can be configured to meet site-specific
                      requirements, including data residency and processing
                      location preferences.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Compliance Ready
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We are designed with regulatory compliance in mind,
                      including ISO 13485 awareness and risk management
                      principles.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Integration possibilities"
            description="Planned capabilities for clinical workflow integration"
          />
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              We are exploring integration options to fit into existing clinical
              workflows. Potential integration points include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Electronic Health Record (EHR) systems</li>
              <li>Research data export formats</li>
              <li>Clinical decision support platforms</li>
              <li>Secure data exchange protocols</li>
            </ul>
            <p className="text-lg">
              <strong>Note:</strong> Integration capabilities are in planning and
              development. Specific integration options will depend on
              partnership agreements and technical feasibility assessments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
