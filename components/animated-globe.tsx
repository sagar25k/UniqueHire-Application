"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Node {
  x: number
  y: number
  z: number
  connections: number[]
}

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let rotation = 0

    // Set canvas size
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    // Generate nodes on a sphere
    const nodeCount = 50
    const nodes: Node[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount)
      const theta = Math.sqrt(nodeCount * Math.PI) * phi
      
      nodes.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        connections: [],
      })
    }

    // Create connections
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dist = Math.sqrt(
            Math.pow(node.x - other.x, 2) +
            Math.pow(node.y - other.y, 2) +
            Math.pow(node.z - other.z, 2)
          )
          if (dist < 0.6 && node.connections.length < 3) {
            node.connections.push(j)
          }
        }
      })
    })

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radius = Math.min(rect.width, rect.height) * 0.35

      rotation += 0.003

      // Transform and project nodes
      const projectedNodes = nodes.map((node) => {
        // Rotate around Y axis
        const cosR = Math.cos(rotation)
        const sinR = Math.sin(rotation)
        const x = node.x * cosR - node.z * sinR
        const z = node.x * sinR + node.z * cosR
        const y = node.y

        // Project to 2D with perspective
        const scale = 1 / (1 - z * 0.3)
        return {
          x: centerX + x * radius * scale,
          y: centerY + y * radius * scale,
          z: z,
          scale: scale,
        }
      })

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const p1 = projectedNodes[i]
          const p2 = projectedNodes[j]
          
          // Only draw if both nodes are in front
          if (p1.z > -0.5 && p2.z > -0.5) {
            const opacity = Math.min(p1.z + 1, p2.z + 1) * 0.3
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(11, 94, 215, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      projectedNodes.forEach((node, i) => {
        if (node.z > -0.5) {
          const opacity = (node.z + 1) * 0.5
          const size = 3 + node.scale * 2
          
          ctx.beginPath()
          ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
          
          // Alternate colors
          if (i % 5 === 0) {
            ctx.fillStyle = `rgba(255, 107, 0, ${opacity})`
          } else {
            ctx.fillStyle = `rgba(11, 94, 215, ${opacity})`
          }
          ctx.fill()
        }
      })

      // Draw globe outline
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(11, 94, 215, 0.1)"
      ctx.lineWidth = 2
      ctx.stroke()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative h-full w-full"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl -z-10">
        <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-[#043b73]/20" />
        <div className="absolute right-1/4 bottom-1/4 h-1/3 w-1/3 rounded-full bg-[#FF6B00]/20" />
      </div>

      {/* Central Logo Background - 3D Holographic View */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none" style={{ perspective: "1000px" }}>
        <motion.div 
          className="relative w-[45%] h-[45%] max-w-[180px] max-h-[180px] opacity-60 drop-shadow-[0_0_25px_rgba(11,94,215,0.8)]"
          animate={{
            rotateY: [15, -15],
            rotateX: [-5, 5],
            scale: [0.95, 1.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/images/uh-logo.png"
            alt="UniqueHire"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
      
      <canvas
        ref={canvasRef}
        className="relative h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Floating particles - using fixed positions to avoid hydration mismatch */}
      {[
        { left: 25, top: 30, color: "#043b73", duration: 3.5 },
        { left: 70, top: 25, color: "#FF6B00", duration: 4.2 },
        { left: 45, top: 65, color: "#043b73", duration: 3.8 },
        { left: 75, top: 55, color: "#FF6B00", duration: 4.5 },
        { left: 30, top: 70, color: "#043b73", duration: 3.2 },
        { left: 60, top: 40, color: "#FF6B00", duration: 4.0 },
        { left: 35, top: 45, color: "#043b73", duration: 3.6 },
        { left: 55, top: 75, color: "#FF6B00", duration: 4.3 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}
