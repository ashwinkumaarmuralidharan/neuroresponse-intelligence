import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy | NeuroResponse Intelligence",
  description: "Privacy Policy for NeuroResponse Intelligence website. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Privacy Policy"
            description={`Last updated: ${new Date().toLocaleDateString()}`}
          />
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="prose prose-lg max-w-none space-y-6 text-text-secondary">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    1. Introduction
                  </h2>
                  <p>
                    NeuroResponse Intelligence ("we," "our," or "us") is
                    committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    2. Information We Collect
                  </h2>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    2.1 Information You Provide
                  </h3>
                  <p>
                    When you contact us through our website, you may provide:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Organization</li>
                    <li>Role</li>
                    <li>Message content</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-navy mb-2 mt-4">
                    2.2 Automatically Collected Information
                  </h3>
                  <p>
                    We do not currently use cookies or tracking technologies on
                    this website. If this changes in the future, we will update
                    this policy accordingly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p>We use the information you provide to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Respond to your inquiries and requests</li>
                    <li>Communicate with you about our products and services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    4. Data Sharing and Disclosure
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information only:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>With your consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    5. Your Rights (GDPR)
                  </h2>
                  <p>
                    If you are located in the European Economic Area (EEA), you
                    have certain rights under the General Data Protection
                    Regulation (GDPR):
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Right to access: You can request a copy of your personal
                      data
                    </li>
                    <li>
                      Right to rectification: You can request correction of
                      inaccurate data
                    </li>
                    <li>
                      Right to erasure: You can request deletion of your data
                    </li>
                    <li>
                      Right to restrict processing: You can request limitation of
                      data processing
                    </li>
                    <li>
                      Right to data portability: You can request your data in a
                      structured format
                    </li>
                    <li>
                      Right to object: You can object to processing of your data
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a
                      href="mailto:contact@neuroresponse.ai"
                      className="text-teal-accent hover:underline"
                    >
                      contact@neuroresponse.ai
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    6. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational measures
                    to protect your personal information. However, no method of
                    transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    7. Data Retention
                  </h2>
                  <p>
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this policy,
                    unless a longer retention period is required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    8. Children's Privacy
                  </h2>
                  <p>
                    Our website is not intended for children under 16. We do not
                    knowingly collect personal information from children.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    9. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">
                    10. Contact Us
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy, please
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
