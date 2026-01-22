"use client";

import { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Mail, Copy, Check, Linkedin } from "lucide-react";

const CONTACT_EMAIL = "ashwinkumaarmuralidharan@gmail.com";

// Note: Metadata should be in a layout.tsx or handled via next/head in client components

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(
      formData.name
        ? `Contact from ${formData.name} - ${formData.organization || "Website"}`
        : "Contact from NS-Predict.ai Website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Organization: ${formData.organization || "Not provided"}\n` +
        `Role: ${formData.role || "Not provided"}\n\n` +
        `Message:\n${formData.message || "No message provided"}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Interested in collaboration, early access, or learning more? We'd
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Contact us"
            description="Choose your preferred method"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Contact */}
              <Card>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-teal-accent" />
                  <h3 className="text-xl font-semibold text-navy">Email</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Send us an email directly or use the form below to pre-fill
                  your message.
                </p>
                <div className="flex items-center space-x-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <code className="text-sm text-navy flex-1">
                    {CONTACT_EMAIL}
                  </code>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-accent"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5 text-text-secondary" />
                    )}
                  </button>
                </div>
                <Button
                  onClick={handleMailto}
                  variant="primary"
                  className="w-full"
                >
                  Open Email Client
                </Button>
              </Card>

              {/* LinkedIn */}
              <Card>
                <div className="flex items-center space-x-3 mb-4">
                  <Linkedin className="w-6 h-6 text-teal-accent" />
                  <h3 className="text-xl font-semibold text-navy">LinkedIn</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Connect with us on LinkedIn for updates and professional
                  networking.
                </p>
                <Button
                  href="https://linkedin.com/company/neuroresponse"
                  variant="outline"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit LinkedIn
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            title="Send us a message"
            description="Fill out the form below and we'll open your email client with a pre-filled message"
          />
          <div className="max-w-2xl mx-auto">
            <Card>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleMailto();
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-accent"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message via Email
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
