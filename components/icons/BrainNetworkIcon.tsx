import React from "react";

interface BrainNetworkIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function BrainNetworkIcon({
  className = "",
  width = 24,
  height = 24,
}: BrainNetworkIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Abstract brain network - connected nodes */}
      {/* Central nodes */}
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <circle cx="30" cy="35" r="6" fill="currentColor" />
      <circle cx="70" cy="35" r="6" fill="currentColor" />
      <circle cx="30" cy="65" r="6" fill="currentColor" />
      <circle cx="70" cy="65" r="6" fill="currentColor" />
      <circle cx="20" cy="50" r="5" fill="currentColor" />
      <circle cx="80" cy="50" r="5" fill="currentColor" />
      
      {/* Connections */}
      <line x1="50" y1="50" x2="30" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="70" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="30" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="70" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
