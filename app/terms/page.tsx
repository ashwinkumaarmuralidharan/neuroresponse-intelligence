import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Terms of Use | NS-Predict.ai",
  description: "Terms of Use for NS-Predict.ai website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Terms of Use"
            description={`Last updated: ${new Date().toLocaleDateString()}`}
          />
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="prose prose-lg max-w-none space-y-6 text-text-secondary">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    2. Use License
                  </h2>
                  <p>
                    Permission is granted to temporarily access the materials on
                    NS-Predict.ai's website for personal,
                    non-commercial transitory viewing only. This is the grant of
                    a license, not a transfer of title, and under this license
                    you may not:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software</li>
                    <li>Remove any copyright or other proprietary notations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    3. Disclaimer
                  </h2>
                  <p>
                    The materials on NS-Predict.ai's website are
                    provided on an 'as is' basis. NS-Predict.ai
                    makes no warranties, expressed or implied, and hereby
                    disclaims and negates all other warranties including, without
                    limitation, implied warranties or conditions of
                    merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation
                    of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    4. Limitations
                  </h2>
                  <p>
                    In no event shall NS-Predict.ai or its suppliers
                    be liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business
                    interruption) arising out of the use or inability to use the
                    materials on NS-Predict.ai's website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    5. Accuracy of Materials
                  </h2>
                  <p>
                    The materials appearing on NS-Predict.ai's
                    website could include technical, typographical, or
                    photographic errors. NS-Predict.ai does not
                    warrant that any of the materials on its website are
                    accurate, complete, or current.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    6. Links
                  </h2>
                  <p>
                    NS-Predict.ai has not reviewed all of the sites
                    linked to its website and is not responsible for the contents
                    of any such linked site. The inclusion of any link does not
                    imply endorsement by NS-Predict.ai of the site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    7. Modifications
                  </h2>
                  <p>
                    NS-Predict.ai may revise these terms of service
                    for its website at any time without notice. By using this
                    website you are agreeing to be bound by the then current
                    version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    8. Governing Law
                  </h2>
                  <p>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of Belgium and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    9. Contact Information
                  </h2>
                  <p>
                    If you have any questions about these Terms of Use, please
                    contact us at:
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
