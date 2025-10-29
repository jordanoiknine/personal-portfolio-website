"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import PhotoStack from "@/components/ui/PhotoStack";

const AlternatingProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900/50">
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
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </motion.div>
          <motion.p 
            className="mt-4 text-lg text-primary-600 dark:text-primary-400 font-medium"
            style={{ opacity: subheaderOpacity }}
          >
            The Future
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          const isExpanded = expandedId === project.slug;
          
          return (
            <motion.div
              key={project.slug}
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
                    <PhotoStack photos={project.images || []} />
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
                    onClick={() => setExpandedId(isExpanded ? null : project.slug)}
                    className="w-full text-left group"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 lg:p-12 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all shadow-xl hover:shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {project.links?.patent && (
                          <div className="mb-6">
                            <a
                              href={project.links.patent}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View the full provisional patent →
                            </a>
                          </div>
                        )}

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
                              <div
                                className="prose prose-lg dark:prose-invert max-w-none 
                                  prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-gray-900 dark:prose-h2:text-gray-100
                                  prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                                  prose-ul:text-gray-600 dark:prose-ul:text-gray-300 prose-ul:space-y-2
                                  prose-li:text-lg prose-li:leading-relaxed
                                  [&_ul]:list-none [&_ul]:space-y-3 [&_li]:flex [&_li]:items-start [&_li]:gap-3
                                  [&_li]:before:content-['→'] [&_li]:before:text-primary-600 dark:[&_li]:before:text-primary-400 [&_li]:before:text-xl [&_li]:before:mt-0.5 [&_li]:before:flex-shrink-0"
                                dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                              />

                              {project.links && (project.links.github || project.links.live) && (
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                                  {project.links.github && (
                                    <a
                                      href={project.links.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      View Code →
                                    </a>
                                  )}
                                  {project.links.live && (
                                    <a
                                      href={project.links.live}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      Live Demo →
                                    </a>
                                  )}
                                </div>
                              )}
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
                    <PhotoStack photos={project.images || []} />
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

export default AlternatingProjectsSection;

