import React from "react";

interface WaveformIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function WaveformIcon({
  className = "",
  width = 24,
  height = 24,
}: WaveformIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Neural signal waveform */}
      <path
        d="M5 30 Q15 10, 25 30 T45 30 T65 30 T85 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Nodes */}
      <circle cx="15" cy="20" r="2" fill="currentColor" />
      <circle cx="25" cy="30" r="2" fill="currentColor" />
      <circle cx="35" cy="40" r="2" fill="currentColor" />
      <circle cx="45" cy="30" r="2" fill="currentColor" />
      <circle cx="55" cy="20" r="2" fill="currentColor" />
      <circle cx="65" cy="30" r="2" fill="currentColor" />
      <circle cx="75" cy="40" r="2" fill="currentColor" />
      <circle cx="85" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}
