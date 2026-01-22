import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Timeline from "@/components/sections/Timeline";
import Card from "@/components/ui/Card";
import { Database, Brain, Shield, CheckCircle2, FileSearch, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach | NS-Predict.ai",
  description: "Learn about our model development lifecycle, clinical validation roadmap, and regulatory and quality mindset.",
};

export default function ApproachPage() {
  const modelLifecycle = [
    {
      title: "Data Governance",
      description:
        "We follow strict data governance principles, including data quality assessment, privacy protection, and ethical use guidelines. All data handling complies with applicable regulations.",
      status: "completed" as const,
    },
    {
      title: "Model Training & Validation",
      description:
        "Models are trained using appropriate clinical datasets with rigorous validation procedures. We use cross-validation, holdout sets, and external validation when possible.",
      status: "completed" as const,
    },
    {
      title: "Bias & Generalization",
      description:
        "We actively assess and mitigate potential biases in our models, including demographic, geographic, and clinical population biases. Generalization across different patient populations is a key focus.",
      status: "current" as const,
    },
    {
      title: "Explainability",
      description:
        "Where possible, we incorporate explainability techniques (such as SHAP-like approaches) to help clinicians understand model predictions. However, we acknowledge that full explainability may not always be achievable.",
      status: "current" as const,
    },
  ];

  const validationRoadmap = [
    {
      title: "Retrospective Validation",
      description:
        "Initial model development and validation using retrospective clinical data. This phase establishes baseline performance and identifies key predictive features.",
      status: "completed" as const,
    },
    {
      title: "Prospective Observational Studies",
      description:
        "Validation of model performance in prospective, real-world settings. This phase assesses how well predictions hold up when applied to new patients in clinical practice.",
      status: "current" as const,
    },
    {
      title: "Interventional Support (Potential)",
      description:
        "Future exploration of how predictions might support interventional studies or clinical decision-making. This would require appropriate regulatory clearance and clinical validation.",
      status: "upcoming" as const,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h1>
            <p className="text-xl text-gray-200">
              Rigorous model development, validation, and regulatory awareness
            </p>
          </div>
        </div>
      </section>

      {/* Model Development Lifecycle */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Model development lifecycle"
            description="From data to deployment-ready models"
          />
          <div className="max-w-4xl mx-auto mb-12">
            <Timeline items={modelLifecycle} />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Data Governance
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We follow strict data governance principles, including
                      data quality assessment, privacy protection, and ethical
                      use guidelines. All data handling complies with applicable
                      regulations including GDPR.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Training & Validation
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Models are trained using appropriate clinical datasets
                      with rigorous validation procedures. We use
                      cross-validation, holdout sets, and external validation
                      when possible.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Bias & Generalization
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We actively assess and mitigate potential biases in our
                      models, including demographic, geographic, and clinical
                      population biases. Generalization across different patient
                      populations is a key focus.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <FileSearch className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Explainability
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Where possible, we incorporate explainability techniques
                      to help clinicians understand model predictions. However,
                      we acknowledge that full explainability may not always be
                      achievable.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Validation Roadmap */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Clinical validation roadmap"
            description="Phased approach to clinical validation"
          />
          <div className="max-w-4xl mx-auto mb-12">
            <Timeline items={validationRoadmap} />
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              Our validation approach follows a phased model, starting with
              retrospective validation and progressing toward prospective
              observational studies. Future phases may explore interventional
              support, but this would require appropriate regulatory clearance
              and extensive clinical validation.
            </p>
            <p className="text-lg">
              We are actively seeking partnerships with clinical sites and
              researchers who are interested in participating in validation
              studies. If you are interested in collaboration, please{" "}
              <a
                href="/contact"
                className="text-teal-accent hover:underline font-medium"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory and Quality */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Regulatory and quality mindset"
            description="Building with regulatory awareness from the start"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-text-secondary mb-8">
              <p className="text-lg">
                Our team includes expertise in business, quality, regulatory
                affairs, and clinical affairs. This background informs our
                approach to product development from the earliest stages.
              </p>
              <p className="text-lg">
                We are aware of relevant regulatory frameworks, including:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      ISO 13485 Awareness
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We are building our quality management system with ISO
                      13485 principles in mind, though we do not yet claim
                      certification.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Risk Management
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Risk management principles guide our development process,
                      including identification, assessment, and mitigation of
                      potential risks.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Clinical Evaluation
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We follow clinical evaluation principles to ensure that
                      our products are supported by appropriate clinical
                      evidence and validation.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-3">
                  <FileSearch className="w-6 h-6 text-teal-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">
                      Regulatory Pathways
                    </h3>
                    <p className="text-text-secondary text-sm">
                      We are exploring appropriate regulatory pathways for our
                      product, including medical device regulations in relevant
                      jurisdictions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-text-secondary">
                <strong>Important:</strong> We do not yet claim regulatory
                clearance or certification. Our product is in development, and
                we are working toward appropriate regulatory pathways. Any
                claims about regulatory status will be updated as we progress
                through the regulatory process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
