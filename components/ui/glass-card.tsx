import * as React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: LucideIcon;
  themeColor?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon, themeColor = "#ffffff", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[320px] w-full max-w-[300px] [perspective:1000px] ${className}`}
        {...props}
      >
        <div className="relative h-full rounded-[40px] bg-card border border-white/20 shadow-xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.1)_30px_50px_25px_-40px,rgba(0,0,0,0.05)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,30deg)] overflow-hidden">
          {/* Subtle glossy overlay */}
          <div className="absolute inset-0 rounded-[40px] border-t-2 border-l-2 border-white/60 bg-gradient-to-tr from-transparent via-white/10 to-white/40 [transform-style:preserve-3d] [transform:translate3d(0,0,25px)] pointer-events-none z-10 mix-blend-overlay"></div>
          
          <div className="absolute [transform:translate3d(0,0,26px)] w-full z-20">
            <div className="px-7 pt-[80px] pb-0">
              <span className="block text-2xl font-black text-foreground drop-shadow-sm">
                {title}
              </span>
              <span className="mt-4 block text-[15px] text-muted-foreground leading-relaxed font-medium">
                {description}
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)] z-20">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              <button
                className="group/social grid h-[40px] w-[40px] place-content-center rounded-full border border-border bg-background shadow-sm transition-all duration-200 ease-in-out group-hover:shadow-md group-hover:[transform:translate3d(0,0,50px)] hover:bg-primary"
                style={{ transitionDelay: "100ms" }}
              >
                {Icon && <Icon className="h-5 w-5 stroke-foreground transition-colors group-hover/social:stroke-primary-foreground" />}
              </button>
            </div>
            
            <div className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)] group/link">
              <span className="text-xs font-bold text-foreground transition-colors group-hover/link:text-primary uppercase tracking-wider">
                Explore
              </span>
              <ChevronDown className="h-4 w-4 stroke-foreground ml-1 transition-colors group-hover/link:stroke-primary" strokeWidth={3} />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none z-0">
            {[
              { size: "170px", pos: "-20px", z: "20px", delay: "0s" },
              { size: "140px", pos: "-5px", z: "40px", delay: "0.2s" },
              { size: "110px", pos: "10px", z: "60px", delay: "0.4s" },
              { size: "80px", pos: "25px", z: "80px", delay: "0.6s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                  backgroundColor: `${themeColor}08`,
                  border: `1px solid ${themeColor}20`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
