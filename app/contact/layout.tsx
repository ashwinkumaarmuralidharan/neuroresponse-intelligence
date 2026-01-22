import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NS-Predict.ai",
  description: "Get in touch with NS-Predict.ai. Interested in collaboration, early access, or learning more?",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
