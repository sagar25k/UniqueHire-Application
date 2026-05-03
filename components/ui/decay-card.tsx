'use client';

import React, { useEffect, useRef, ReactNode, useId } from 'react';
import { gsap } from 'gsap';
import './DecayCard.css';

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children
}) => {
  const uid = useId();
  const filterId = `imgFilter-${uid.replace(/:/g, '')}`;
  const svgRef = useRef<HTMLDivElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  const cursor = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cachedCursor = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const winsize = useRef<{ width: number; height: number }>({ width: 1024, height: 768 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Initialize with actual window values on client
    cursor.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cachedCursor.current = { ...cursor.current };
    winsize.current = { width: window.innerWidth, height: window.innerHeight };

    const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;
    const map = (x: number, a: number, b: number, c: number, d: number): number =>
      ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1: number, x2: number, y1: number, y2: number): number =>
      Math.hypot(x1 - x2, y1 - y2);

    const handleResize = (): void => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0
    };

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1
      );
      let targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1
      );

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale }
        });
      }

      cachedCursor.current = { ...cursor.current };
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="content" style={{ width: `${width}px`, height: `${height}px` }} ref={svgRef}>
      <svg viewBox="-60 -75 720 900" preserveAspectRatio="xMidYMid slice" className="svg">
        <filter id={filterId}>
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter={`url(#${filterId})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="card-text">{children}</div>
    </div>
  );
};

export default DecayCard;
