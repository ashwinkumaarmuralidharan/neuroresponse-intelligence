import type { Metadata } from "next";
import "./../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NS-Predict.ai | Predicting Neurostimulation Responders",
  description: "Predicting neurostimulation responders before surgery. Supporting clinical decision-making for invasive vagus nerve stimulation (VNS) in drug-resistant epilepsy.",
  keywords: ["neurostimulation", "VNS", "epilepsy", "predictive analytics", "clinical decision support"],
  authors: [{ name: "NS-Predict.ai" }],
  openGraph: {
    title: "NS-Predict.ai | Predicting Neurostimulation Responders",
    description: "Predicting neurostimulation responders before surgery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NS-Predict.ai",
    description: "Predicting neurostimulation responders before surgery.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
