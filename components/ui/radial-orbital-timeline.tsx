"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ size?: number | string }>;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 16);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  useEffect(() => {
    if (!autoRotate) return;

    let closestId: number | null = null;
    let minDiff = 360;

    timelineData.forEach((item, index) => {
      const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
      let diff = Math.abs(angle - 270);
      if (diff > 180) diff = 360 - diff;

      if (diff < minDiff) {
        minDiff = diff;
        closestId = item.id;
      }
    });

    const targetExpandedId = minDiff <= 15 ? closestId : null;

    setExpandedItems((prev) => {
      const currentlyExpandedId = Object.keys(prev).find((key) => prev[Number(key)]);

      if (targetExpandedId && currentlyExpandedId !== String(targetExpandedId)) {
        return { [targetExpandedId]: true };
      } else if (!targetExpandedId && currentlyExpandedId) {
        return {};
      }
      return prev;
    });
  }, [rotationAngle, autoRotate, timelineData]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  // Removed getStatusStyles since generic styling is applied instead

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#043b73] to-[#FF6B00] animate-pulse flex items-center justify-center z-10 shadow-lg shadow-[#043b73]/20">
            <div className="absolute w-20 h-20 rounded-full border border-[#043b73]/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-[#FF6B00]/30 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-background backdrop-blur-md shadow-sm"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-border/60"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className={`absolute cursor-pointer ${
                  !autoRotate ? "transition-all duration-700 ease-in-out" : "transition-none"
                }`}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                    }`}
                  style={{
                    background: `radial-gradient(circle, rgba(11,94,215,0.15) 0%, rgba(11,94,215,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isExpanded
                      ? "bg-[#043b73] text-white"
                      : isRelated
                        ? "bg-[#043b73]/10 text-[#043b73]"
                        : "bg-card text-foreground"
                    }
                  border-2 
                  ${isExpanded
                      ? "border-[#043b73] shadow-lg shadow-[#043b73]/20"
                      : isRelated
                        ? "border-[#FF6B00] animate-pulse"
                        : "border-border hover:border-[#043b73]/50"
                    }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`
                  absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider text-center
                  transition-all duration-300
                  ${isExpanded ? "text-[#043b73] scale-125" : "text-muted-foreground"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-72 bg-card/95 backdrop-blur-lg border border-[#043b73]/20 shadow-xl shadow-black/5 overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#043b73]/50"></div>
                    <CardHeader className="pb-2 text-center">
                      <CardTitle className="text-lg mt-2 text-[#043b73]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground text-center leading-relaxed">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
