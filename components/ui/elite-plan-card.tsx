"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ElitePlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  themeColor?: "blue" | "orange";
  highlights?: string[];
  imageClassName?: string;
  onAction?: () => void;
}

export const ElitePlanCard = React.forwardRef<
  HTMLDivElement,
  ElitePlanCardProps
>(
  (
    {
      className,
      imageUrl,
      title,
      subtitle,
      description,
      themeColor = "blue",
      highlights = [],
      imageClassName,
      onAction,
      ...props
    },
    ref
  ) => {
    // Light theme mappings matching UniqueHire
    const isBlue = themeColor === "blue";
    const primaryColorClass = isBlue ? "text-[#043b73]" : "text-[#FF6B00]";
    const bgPrimaryClass = isBlue ? "bg-[#043b73]" : "bg-[#FF6B00]";
    const bgPrimaryHoverClass = isBlue ? "hover:bg-[#043b73]/90" : "hover:bg-[#FF6B00]/90";
    const ringColorClass = isBlue ? "group-hover:ring-[#043b73]/30" : "group-hover:ring-[#FF6B00]/30";
    const highlightBgClass = isBlue ? "bg-[#043b73]/10 text-slate-700 hover:bg-[#043b73]/20 transition-colors" : "bg-[#FF6B00]/10 text-slate-700 hover:bg-[#FF6B00]/20 transition-colors";
    
    // To cleanly blend a black-background image onto a white background, we invert it (makes black -> white),
    // hue-rotate it back to its intended color, and use mix-blend-multiply (which drops the white).
    const filterClass = isBlue 
      ? "invert hue-rotate-180 contrast-125" // Inverts black to white, yellow to blue
      : "invert -hue-rotate-15 saturate-200 contrast-125"; // Inverts black to white, yellow to orange
    
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 ring-1 ring-slate-200",
          ringColorClass,
          className
        )}
        {...props}
      >
        {/* Top image with parallax */}
        <motion.div
          className="relative h-48 w-full overflow-hidden bg-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className={cn("h-full w-full object-cover mix-blend-multiply opacity-90 transition-all duration-500", filterClass, imageClassName)}
          />
          {/* Fade connection between image and white background */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        </motion.div>

        {/* Bottom content */}
        <div className="relative z-10 p-8 h-full flex flex-col bg-white text-slate-900 border-t border-slate-50">
          <p className={cn("text-xs font-extrabold uppercase tracking-[0.2em]", primaryColorClass)}>
            {subtitle}
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 flex-1 font-medium">
            {description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  className={cn("flex items-center gap-3 rounded-xl px-4 py-3", highlightBgClass)}
                >
                  <span className={cn("h-2.5 w-2.5 rounded-full shadow-sm flex-shrink-0", bgPrimaryClass)} />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          {onAction && (
            <div className="mt-8">
              <Button
                variant="default"
                onClick={onAction}
                className={cn(
                  "w-full text-white font-bold shadow-md transition-all py-6 text-base",
                  bgPrimaryClass,
                  bgPrimaryHoverClass
                )}
              >
                Learn More
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

ElitePlanCard.displayName = "ElitePlanCard";
