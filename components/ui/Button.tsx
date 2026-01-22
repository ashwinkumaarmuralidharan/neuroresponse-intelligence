import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-accent";
  
  const variants = {
    primary:
      "bg-teal-accent text-white hover:bg-teal-accent/90 focus:ring-teal-accent",
    secondary:
      "bg-navy text-white hover:bg-navy-dark focus:ring-navy",
    outline:
      "border-2 border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-white focus:ring-teal-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
