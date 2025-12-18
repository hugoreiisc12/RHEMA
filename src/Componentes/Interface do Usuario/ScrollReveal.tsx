import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  direction?: "up" | "left" | "right";
}

export const ScrollReveal = ({ 
  children, 
  width = "100%", 
  className = "",
  direction = "up" 
}: ScrollRevealProps) => {
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }} // Triggers every time element is 50px into the viewport
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
