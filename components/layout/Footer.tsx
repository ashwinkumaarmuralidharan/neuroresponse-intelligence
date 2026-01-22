import React from "react";
import Link from "next/link";
import WaveformIcon from "@/components/icons/WaveformIcon";

const footerLinks = {
  Product: [
    { href: "/product", label: "Product" },
    { href: "/vns-epilepsy", label: "Use Case" },
    { href: "/approach", label: "Approach" },
  ],
  Company: [
    { href: "/team", label: "Team" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="NeuroResponse Intelligence Home">
              <WaveformIcon className="w-6 h-6 text-teal-light" />
              <span className="font-bold text-xl">NeuroResponse</span>
            </Link>
            <p className="text-gray-300 text-sm mb-2">
              Predicting neurostimulation responders before surgery.
            </p>
            <p className="text-gray-400 text-xs">
              Leuven, Belgium
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} NeuroResponse Intelligence. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            This product is in development and is not yet cleared for clinical use.
          </p>
        </div>
      </div>
    </footer>
  );
}
