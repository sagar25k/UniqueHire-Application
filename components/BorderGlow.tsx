"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BorderGlowProps {
  children: React.ReactNode;
  glowColor?: string;
  colors?: string[];
  backgroundColor?: string;
  borderRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  fillOpacity?: number;
  className?: string;
}

export default function BorderGlow({
  children,
  glowColor = "255 255 255",
  colors = ["#ffffff"],
  backgroundColor = "var(--card)",
  borderRadius = 16,
  glowIntensity = 1,
  coneSpread = 90,
  fillOpacity = 0.05,
  className = "",
}: BorderGlowProps) {
  // Safely construct the conic gradient with the provided colors
  const mainColor = colors[0] || "#ffffff";
  const endColor = colors[colors.length - 1] || mainColor;
  
  // A beautiful trailing tail effect
  const gradientStr = `conic-gradient(from 0deg, transparent 0deg, ${mainColor} ${coneSpread / 2}deg, ${endColor} ${coneSpread}deg, transparent ${coneSpread + 10}deg)`;

  return (
    <div
      className={`relative overflow-hidden p-[1px] ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Expanding background layer for the moving gradient */}
      <motion.div
        className="absolute -inset-[150%] z-0"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 3 + Math.random(), // slight variation for organic feel
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: gradientStr,
          opacity: glowIntensity,
        }}
      />
      
      {/* Inner container shielding the rest of the gradient */}
      <div
        className="relative z-10 h-full w-full overflow-hidden"
        style={{
          borderRadius: `${Math.max(0, borderRadius - 1)}px`,
          backgroundColor: backgroundColor,
        }}
      >
        {/* A subtle colored overlay for the interior */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundColor: `rgb(${glowColor.replace(/,/g, ' ')} / ${fillOpacity})`,
          }}
        />
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
