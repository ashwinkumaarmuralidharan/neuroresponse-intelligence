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
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
