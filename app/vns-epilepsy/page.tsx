import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import VNSDeviceIcon from "@/components/icons/VNSDeviceIcon";
import { Brain, Target, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "VNS for Drug-Resistant Epilepsy | NeuroResponse Intelligence",
  description: "Learn about our initial focus: predicting responder status for vagus nerve stimulation (VNS) in patients with drug-resistant epilepsy.",
};

export default function VNSEpilepsyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              VNS for Drug-Resistant Epilepsy
            </h1>
            <p className="text-xl text-gray-200">
              Our initial focus: predicting responder status for vagus nerve
              stimulation therapy
            </p>
          </div>
        </div>
      </section>

      {/* What is DRE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Understanding drug-resistant epilepsy"
            description="When medications are not enough"
          />
          <div className="max-w-4xl mx-auto space-y-6 text-text-secondary">
            <p className="text-lg">
              Drug-resistant epilepsy (DRE) affects approximately one-third of
              patients with epilepsy. Despite trying multiple anti-seizure
              medications, these patients continue to experience seizures that
              significantly impact their quality of life.
            </p>
            <p className="text-lg">
              For these patients, neurostimulation therapies, such as vagus nerve
              stimulation (VNS), offer an alternative treatment option. VNS
              involves implanting a device that delivers electrical stimulation
              to the vagus nerve, which can help reduce seizure frequency and
              severity in some patients.
            </p>
          </div>
        </div>
      </section>

      {/* VNS Device */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="How VNS works"
            description="Device placement and mechanism"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex justify-center mb-6">
                  <VNSDeviceIcon className="w-48 h-72 text-teal-accent" />
                </div>
              </div>
              <div className="space-y-4 text-text-secondary">
                <p>
                  The VNS device consists of a pulse generator (typically
                  implanted in the chest) and a lead that wraps around the vagus
                  nerve in the neck. The device delivers regular electrical
                  stimulation to the nerve, which modulates brain activity and
                  can reduce seizure frequency.
                </p>
                <p>
                  The device is programmable, allowing clinicians to adjust
                  stimulation parameters based on patient response. However,
                  response can vary significantly between patients, and not all
                  patients benefit from the therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prediction Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why prediction matters"
            description="Improving patient selection and outcomes"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-light flex items-center justify-center">
                    <Target className="w-8 h-8 text-teal-accent" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">
                    Better Selection
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Identify patients more likely to respond before implantation
                  </p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-light flex items-center justify-center">
                    <Brain className="w-8 h-8 text-teal-accent" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">
                    Improved Outcomes
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Reduce unnecessary procedures and focus resources on those
                    who will benefit
                  </p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-light flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-teal-accent" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">
                    Reduced Burden
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Minimize patient disappointment and healthcare costs
                    associated with non-response
                  </p>
                </div>
              </Card>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p className="text-lg">
                Current selection criteria for VNS are limited, primarily based
                on clinical factors such as seizure type, medication history, and
                patient age. While these factors are important, they do not
                reliably predict responder status.
              </p>
              <p className="text-lg">
                By incorporating machine learning models that analyze a broader
                range of clinical and device data, we aim to provide more
                accurate responder probability estimates. This could help
                clinicians make more informed decisions about which patients are
                most likely to benefit from VNS therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Current status"
            description="Research and development phase"
          />
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="space-y-4 text-text-secondary">
                <p className="text-lg">
                  Our work on VNS responder prediction is currently in the
                  research and development phase. We are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Developing and validating machine learning models using
                    retrospective clinical data
                  </li>
                  <li>
                    Working with clinical partners to understand workflow
                    requirements and data availability
                  </li>
                  <li>
                    Exploring prospective validation opportunities to assess
                    model performance in real-world settings
                  </li>
                  <li>
                    Building toward appropriate regulatory pathways for clinical
                    use
                  </li>
                </ul>
                <p className="text-lg mt-6">
                  <strong>Important:</strong> Our product is not yet available
                  for clinical use. We are actively seeking partnerships with
                  clinicians, hospitals, and researchers who are interested in
                  collaborating on validation studies or early access programs.
                </p>
                <p className="text-lg">
                  If you are interested in learning more or exploring
                  collaboration opportunities, please{" "}
                  <a
                    href="/contact"
                    className="text-teal-accent hover:underline font-medium"
                  >
                    contact us
                  </a>
                  .
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
