"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Home, Info, Briefcase, GraduationCap, Mail, User, Globe, Building2, TestTube, ShoppingCart, Server, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type IconComponentType = React.ElementType<{ className?: string }>;
export interface InteractiveMenuSubItem {
  label: string;
  href: string;
  icon: IconComponentType;
}

export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  href: string;
  subItems?: InteractiveMenuSubItem[];
}

// Mapped the exact routes for the UniqueHire website instead of the placeholders
const defaultItems: InteractiveMenuItem[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About", icon: Info, href: "/about" },
  { 
    label: "Services", 
    icon: Briefcase, 
    href: "/services",
    subItems: [
      { label: "GCCs", href: "/services/gccs", icon: Globe },
      { label: "HTD", href: "/services/htd", icon: GraduationCap },
      { label: "Professional Consulting", href: "/services/consulting", icon: Briefcase },
      { label: "Banking & Financial", href: "/services/banking", icon: Building2 },
      { label: "Testing Services", href: "/services/testing", icon: TestTube },
      { label: "Retail & e-Commerce", href: "/services/retail", icon: ShoppingCart },
      { label: "Infrastructure", href: "/services/infrastructure", icon: Server },
    ]
  },
  { label: "Careers", icon: GraduationCap, href: "/careers" },
  { label: "Contact", icon: Mail, href: "/contact" },
  { 
    label: "Profile", 
    icon: User, 
    href: "/team",
    subItems: [
      { label: "Team", href: "/team", icon: Users },
    ]
  },
];

const defaultAccentColor = "#FF6B00";

export const InteractiveMenu: React.FC = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const displayIndex = openDropdownIndex !== null 
    ? openDropdownIndex 
    : (hoveredIndex !== null ? hoveredIndex : activeIndex);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
    if (defaultItems[index]?.subItems) {
      setOpenDropdownIndex(index);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setOpenDropdownIndex(null);
    }, 150);
  };

  // Clear any pending hover timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    // Automatically bind the active indicator to the current route layout
    const currentIndex = defaultItems.findIndex((item) => 
      pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    } else {
      setActiveIndex(0);
    }
  }, [pathname]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[displayIndex];
      const activeTextElement = textRefs.current[displayIndex];

      if (activeItemElement && activeTextElement) {
        // Core Animation: Compute raw width of the text DOM element to expand the pill precisely
        const textWidth = activeTextElement.scrollWidth;
        activeItemElement.style.setProperty("--lineWidth", `${textWidth}px`);
      }
    };

    // Use a small delay to ensure webfonts have rendered text accurately before measuring width
    const measureTimeout = setTimeout(setLineWidth, 50);

    window.addEventListener("resize", setLineWidth);
    return () => {
      clearTimeout(measureTimeout);
      window.removeEventListener("resize", setLineWidth);
    };
  }, [displayIndex, pathname]);

  const navStyle = useMemo(() => {
    return { "--component-active-color": defaultAccentColor } as React.CSSProperties;
  }, []);

  return (
    <div className="flex mx-auto w-max max-w-[calc(100vw-2rem)] items-center gap-1 sm:gap-2 md:gap-8 lg:gap-14 rounded-full bg-background/80 backdrop-blur-xl border border-white/10 px-2 py-2 md:px-4 shadow-2xl dark:shadow-[0_8px_30px_rgba(11,94,215,0.15)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(11,94,215,0.2)]">
      {/* Primary Floating Logo integration as requested */}
      <Link href="/" className="ml-1 mr-1 md:ml-4 md:mr-4 transition-transform hover:scale-[1.02] duration-300 flex-shrink-0">
        {/* Desktop Logo */}
        <Image src="/images/logo.png" alt="UniqueHire" width={150} height={36} className="hidden md:block h-9 w-auto object-contain drop-shadow-sm" priority loading="eager" style={{ width: "auto", height: "36px" }} />
        {/* Mobile Logo */}
        <Image src="/images/uh-logo.png" alt="UniqueHire Mobile" width={32} height={32} className="block md:hidden h-7 w-7 object-contain drop-shadow-sm" priority style={{ width: "28px", height: "28px" }} />
      </Link>

      <nav className="menu gap-0.5 sm:gap-1 md:gap-4 lg:gap-6" role="navigation" style={navStyle} onMouseLeave={handleMouseLeave}>
        {defaultItems.map((item, index) => {
          const isActive = index === displayIndex;
          const IconComponent = item.icon;

          const linkContent = (
            <>
              <div className="menu__icon">
                <IconComponent className="icon" />
              </div>
              <strong
                className={`menu__text ${isActive ? "active" : ""}`}
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
              >
                {item.label}
              </strong>
            </>
          );

          if (item.subItems) {
            return (
              <DropdownMenu key={item.label} open={openDropdownIndex === index} onOpenChange={(open) => setOpenDropdownIndex(open ? index : null)}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`menu__item menu__item--mobile outline-none ${isActive ? "active shadow-inner" : ""}`}
                    onClick={() => { setActiveIndex(index); setOpenDropdownIndex(index); }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    ref={(el: any) => {
                        itemRefs.current[index] = el;
                    }}
                    style={{ "--lineWidth": "0px" } as React.CSSProperties}
                  >
                    {linkContent}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="center" 
                  className="w-48 sm:w-56 mt-4 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 p-2"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.subItems.map((subItem) => {
                    const SubIcon = subItem.icon;
                    return (
                      <DropdownMenuItem key={subItem.label} asChild className="p-3 cursor-pointer rounded-lg hover:bg-[#043b73]/10 transition-colors">
                        <Link href={subItem.href} className="flex items-center gap-3">
                          <SubIcon className="h-4 w-4 text-[#043b73]" />
                          <span className="font-medium text-foreground/80">{subItem.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`menu__item menu__item--mobile ${isActive ? "active shadow-inner" : ""}`}
              onClick={() => { setActiveIndex(index); handleMouseLeave(); }}
              onMouseEnter={() => handleMouseEnter(index)}
              ref={(el: any) => {
                  itemRefs.current[index] = el;
              }}
              style={{ "--lineWidth": "0px" } as React.CSSProperties}
            >
              {linkContent}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
