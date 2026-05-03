"use client";

import { ReactLenis } from "lenis/react";
import React, { useRef, forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export interface ScrollCardData {
  title: string;
  description: string;
  color: string;
  rotation: string;
  value?: string | number;
  suffix?: string;
  isYear?: boolean;
  icon?: LucideIcon;
}

export interface ScrollCardLayoutProps {
  cards: ScrollCardData[];
}

const ScrollCardLayout = forwardRef<HTMLElement, ScrollCardLayoutProps>(   
  ({ cards }, ref) => {
    return (
      <ReactLenis root>
        <section className="text-foreground w-full py-16" ref={ref}>
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-12">
            {/* The sticky Cards */}
            <div className="grid gap-4 w-full lg:w-1/2">
              {cards.map((card, i) => (
                <figure key={i} className="sticky top-10 lg:top-[20vh] h-[80vh] lg:h-screen grid place-content-start lg:place-content-center">
                  <article
                    className={`h-[400px] w-full max-w-[30rem] rounded-3xl ${card.rotation} p-8 lg:p-12 border shadow-2xl relative overflow-hidden backdrop-blur-md`}
                    style={{ backgroundColor: card.color }}
                  >
                    {card.icon && (
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-6 drop-shadow-sm">
                        <card.icon className="h-8 w-8 text-white/90" />
                      </div>
                    )}

                    <div className="text-center mt-4">
                      {card.value && (
                        <p className="text-6xl font-bold text-white drop-shadow-sm">
                          {card.value}{card.suffix}
                        </p>
                      )}
                      <h1 className="text-3xl font-bold text-white mt-4 drop-shadow-sm">{card.title}</h1>
                      <p className="mt-3 text-lg text-white/90 font-medium leading-relaxed drop-shadow-sm bg-white/20 p-4 rounded-xl">
                        {card.description}
                      </p>
                    </div>

                    {/* Glossy overlay */}
                    <div className="absolute top-0 right-0 left-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-3xl" />
                  </article>
                </figure>
              ))}
            </div>

            {/* The sticky right side context */}
            <div className="sticky top-[20vh] h-[30vh] lg:h-screen grid place-content-start lg:place-content-center w-full lg:w-1/2 lg:pl-16">
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00] mb-4">
                Our Impact
              </span>
              <h1 className="text-4xl lg:text-5xl lg:px-0 font-bold tracking-tight leading-[1.2] text-foreground text-balance">
                Numbers That Speak <br />
                <span className="text-muted-foreground mt-4 block text-3xl font-medium tracking-normal text-balance">
                  A decade of excellence in digital transformation.
                </span>
              </h1>
            </div>
          </div>
        </section>
      </ReactLenis>
    );
  }
);

ScrollCardLayout.displayName = "ScrollCardLayout";

export default ScrollCardLayout;
