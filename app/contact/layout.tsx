import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NeuroResponse Intelligence",
  description: "Get in touch with NeuroResponse Intelligence. Interested in collaboration, early access, or learning more?",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
