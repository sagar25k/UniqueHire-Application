"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glow effect behind logo */}
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-r from-[#043b73] to-[#FF6B00] opacity-50" />
                </motion.div>
                <Image
                  src="/images/logo.png"
                  alt="UniqueHire"
                  width={240}
                  height={64}
                  className="relative h-16 w-auto"
                  priority
                  loading="eager"
                  style={{ width: "auto", height: "64px" }}
                />
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Empowering Digital Transformation
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-1 w-48 overflow-hidden rounded-full bg-muted"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#043b73] to-[#FF6B00]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Orbiting dots */}
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="relative h-40 w-40">
                <motion.div
                  className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#043b73]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FF6B00]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
