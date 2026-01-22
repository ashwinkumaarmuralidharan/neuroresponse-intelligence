import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-border p-6 shadow-sm",
        hover && "transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
