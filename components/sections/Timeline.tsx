import React from "react";
import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  title: string;
  description: string;
  status?: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Icon/Indicator */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-teal-accent text-white flex-shrink-0 ml-0 md:ml-[calc(50%-1rem)]">
                {item.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white" />
                )}
              </div>
              
              {/* Content */}
              <div className="ml-6 md:ml-8 md:w-[calc(50%-3rem)] md:ml-auto">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
