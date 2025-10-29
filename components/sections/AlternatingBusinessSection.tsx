"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { businesses } from "@/data/businesses";
import PhotoStack from "@/components/ui/PhotoStack";

const AlternatingBusinessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerX = useTransform(scrollYProgress, [0, 0.1], ["0%", "-25%"]);
  const subheaderOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  return (
    <section id="businesses" ref={sectionRef} className="relative py-32 px-6 lg:px-12">
      {/* Floating Section Header */}
      <motion.div
        className="sticky top-24 z-40 mb-12"
        style={{ y: headerY }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="inline-block bg-primary-600 dark:bg-primary-500 backdrop-blur-xl border-2 border-primary-700 dark:border-primary-600 rounded-full shadow-lg px-8 py-4"
            style={{ x: headerX }}
          >
            <h2 className="text-3xl font-bold text-white">My Businesses</h2>
          </motion.div>
          <motion.p 
            className="mt-4 text-lg text-primary-600 dark:text-primary-400 font-medium"
            style={{ opacity: subheaderOpacity }}
          >
            I&apos;ve started and fully operated two businesses, you could say I dabble…
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {businesses.map((business, index) => {
          const isLeft = index % 2 === 0;
          const isExpanded = expandedId === business.id;
          
          return (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className={`flex ${
                  isLeft ? "justify-start" : "justify-end"
                } items-start gap-8 lg:gap-12`}
              >
                {/* Photo Stack */}
                {isLeft && (
                  <div className="hidden lg:block flex-shrink-0">
                    <PhotoStack photos={business.images || []} />
                  </div>
                )}
                
                <motion.div
                  className={`w-full flex-1 ${
                    isLeft ? "lg:pr-20" : "lg:pl-20"
                  }`}
                  animate={{
                    maxWidth: isExpanded ? "100%" : "70%",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : business.id)}
                    className="w-full text-left group"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 lg:p-12 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-xl hover:shadow-2xl">
                      <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                        {business.tagline}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {business.name}
                      </h3>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {business.description}
                      </p>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="border-t-2 border-gray-200 dark:border-gray-800 pt-8 mt-8"
                          >
                            <div className="mb-8">
                              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                Key Achievements
                              </div>
                              <ul className="space-y-3">
                                {business.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                    <span className="text-primary-600 dark:text-primary-400 text-xl mt-0.5 flex-shrink-0">→</span>
                                    <span className="text-lg leading-relaxed">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                Impact
                              </div>
                              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                {business.impact}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-6 flex items-center gap-3 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-5 transition-all">
                        {isExpanded ? "Click to collapse" : "Click to learn more"}
                        <span className="text-xl">{isExpanded ? "↑" : "↓"}</span>
                      </div>
                    </div>
                  </button>
                </motion.div>
                
                {/* Photo Stack for right-aligned cards */}
                {!isLeft && (
                  <div className="hidden lg:block flex-shrink-0">
                    <PhotoStack photos={business.images || []} />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AlternatingBusinessSection;

