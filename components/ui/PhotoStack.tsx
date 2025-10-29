"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PhotoStackProps {
  photos?: string[]; // Array of photo URLs - optional for now
  className?: string;
}

const PhotoStack = ({ photos = [], className = "" }: PhotoStackProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // For now, create 3 placeholder slots if no photos are provided
  const photoSlots = photos.length > 0 ? photos : Array(3).fill(null);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % photoSlots.length);
  };

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      <div className="relative w-64 h-80 lg:w-80 lg:h-96 cursor-pointer group">
        {photoSlots.map((photo, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const zIndex = photoSlots.length - Math.abs(offset);
          const rotation = offset * 2; // Slight rotation for stacked effect
          const translateX = offset * 8; // Horizontal offset
          const translateY = offset * -4; // Vertical offset for depth
          const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.3);
          const scale = isActive ? 1 : Math.max(0.85, 1 - Math.abs(offset) * 0.1);

          return (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-primary-50 dark:bg-primary-900"
              style={{
                zIndex,
                rotate: rotation,
                x: translateX,
                y: translateY,
                scale,
              }}
              animate={{
                rotate: rotation,
                x: translateX,
                y: translateY,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              whileHover={isActive ? { scale: 1.02 } : {}}
            >
              {photo ? (
                <img
                  src={encodeURI(photo)}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${photo}`);
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Photo {index + 1}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Click indicator on active photo */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center"
                  initial={false}
                >
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 rounded-full px-4 py-2"
                  >
                    Click to view next
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        
        {/* Photo counter */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium">
          {currentIndex + 1} / {photoSlots.length}
        </div>
      </div>
    </div>
  );
};

export default PhotoStack;

