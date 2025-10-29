"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingTopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 lg:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <motion.nav
            className={`pointer-events-auto transition-all duration-300 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-600 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-primary-700 dark:border-gray-800 rounded-full shadow-lg px-6 py-3">
              <div className="flex items-center gap-8">
                <button
                  onClick={() => scrollToSection("businesses")}
                  className="text-sm font-medium text-white dark:text-gray-200 hover:text-primary-100 dark:hover:text-primary-400 transition-colors"
                >
                  Businesses
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm font-medium text-white dark:text-gray-200 hover:text-primary-100 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("leadership")}
                  className="text-sm font-medium text-white dark:text-gray-200 hover:text-primary-100 dark:hover:text-primary-400 transition-colors"
                >
                  Leadership
                </button>
              </div>
            </div>
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default FloatingTopNav;

