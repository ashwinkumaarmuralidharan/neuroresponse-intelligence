import React from "react";

interface VNSDeviceIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function VNSDeviceIcon({
  className = "",
  width = 24,
  height = 24,
}: VNSDeviceIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Generic implantable device outline */}
      {/* Main device body */}
      <rect x="20" y="20" width="40" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Device details */}
      <rect x="25" y="30" width="30" height="8" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="25" y="45" width="20" height="4" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="25" y="55" width="25" height="4" rx="1" fill="currentColor" opacity="0.2" />
      
      {/* Lead/electrode connection point */}
      <circle cx="40" cy="85" r="3" fill="currentColor" />
      <line x1="40" y1="88" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="100" x2="45" y2="100" stroke="currentColor" strokeWidth="2" />
      
      {/* Small indicator */}
      <circle cx="55" cy="35" r="2" fill="currentColor" />
    </svg>
  );
}
