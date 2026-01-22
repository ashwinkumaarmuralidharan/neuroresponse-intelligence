import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "navy";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-text-secondary",
    teal: "bg-teal-light text-teal-accent",
    navy: "bg-navy/10 text-navy",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
