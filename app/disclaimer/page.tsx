import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | NeuroResponse Intelligence",
  description: "Important disclaimer regarding the use of NeuroResponse Intelligence products and website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Disclaimer"
            description="Important information about our products and services"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">
                    Product in Development
                  </h3>
                  <p className="text-yellow-800 text-sm">
                    NeuroResponse Intelligence products are currently in
                    development and are not yet cleared for clinical use. The
                    information on this website is for informational purposes
                    only and does not constitute medical advice or a medical
                    device.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="prose prose-lg max-w-none space-y-6 text-text-secondary">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    1. Not Medical Advice
                  </h2>
                  <p>
                    The information provided on this website is for informational
                    purposes only and is not intended as medical advice,
                    diagnosis, or treatment. Always seek the advice of your
                    physician or other qualified health provider with any
                    questions you may have regarding a medical condition.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    2. Product Status
                  </h2>
                  <p>
                    Our products are currently in the research and development
                    phase. They are not yet cleared or approved for clinical use
                    by any regulatory authority, including but not limited to the
                    U.S. Food and Drug Administration (FDA), the European
                    Medicines Agency (EMA), or other national regulatory
                    bodies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    3. No Regulatory Claims
                  </h2>
                  <p>
                    We do not make any claims regarding regulatory clearance,
                    approval, or certification of our products. Any references
                    to regulatory pathways, standards (such as ISO 13485), or
                    compliance are statements of our awareness and intentions,
                    not claims of current certification or approval.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    4. Research Use
                  </h2>
                  <p>
                    Our products are intended for research use and clinical
                    decision support only. They are designed to support, not
                    replace, clinical judgment. All medical decisions remain the
                    responsibility of treating clinicians.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    5. No Guarantees
                  </h2>
                  <p>
                    We do not guarantee the accuracy, completeness, or usefulness
                    of any information on this website or provided by our
                    products. Predictions and probability estimates are
                    probabilistic in nature and should not be interpreted as
                    guarantees of outcomes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    6. Clinical Validation
                  </h2>
                  <p>
                    Our models are in development and validation. Performance
                    metrics and validation results will be published as they
                    become available through appropriate clinical studies and
                    peer review.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p>
                    To the fullest extent permitted by law, NeuroResponse
                    Intelligence shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or
                    any loss of profits or revenues, whether incurred directly or
                    indirectly, or any loss of data, use, goodwill, or other
                    intangible losses resulting from your use of this website or
                    any information contained herein.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    8. Updates
                  </h2>
                  <p>
                    We may update this disclaimer from time to time. We will
                    notify you of any material changes by posting the new
                    disclaimer on this page.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    9. Contact
                  </h2>
                  <p>
                    If you have questions about this disclaimer, please contact
                    us at:
                  </p>
                  <p className="mt-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:contact@neuroresponse.ai"
                      className="text-teal-accent hover:underline"
                    >
                      contact@neuroresponse.ai
                    </a>
                  </p>
                  <p>
                    <strong>Location:</strong> Leuven, Belgium
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
