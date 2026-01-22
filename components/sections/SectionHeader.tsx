import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
}
