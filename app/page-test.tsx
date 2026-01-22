import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Home | NS-Predict.ai",
  description: "Test page",
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Test"
        subtext="Test subtext"
      />
    </>
  );
}
