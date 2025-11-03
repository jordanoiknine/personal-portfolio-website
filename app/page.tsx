"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingTopNav from "@/components/FloatingTopNav";
import JourneyTimeline from "@/components/JourneyTimeline";
import AlternatingBusinessSection from "@/components/sections/AlternatingBusinessSection";
import AlternatingProjectsSection from "@/components/sections/AlternatingProjectsSection";
import AlternatingLeadershipSection from "@/components/sections/AlternatingLeadershipSection";

export default function Home() {
  return (
    <div className="relative">
      <FloatingTopNav />

      {/* Hero Section with Timeline */}
      <section className="relative min-h-screen pt-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Portrait */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[50%] pointer-events-none">
          <div className="relative w-full h-full opacity-15 dark:opacity-8">
            <Image
              src="/images/jordan-portrait.png"
              alt=""
              fill
              className="object-contain object-right"
              style={{ objectPosition: 'right center' }}
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left - Name & Intro */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-wide">
                  Jordan{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Oiknine
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light mb-8">
                  What&apos;s up, everyone! I&apos;m a senior at Ladue High School who loves 
                  building and creating. This is my space to share some of the projects I&apos;ve 
                  been working on and the things I&apos;ve been learning along the way. No fancy 
                  portfolio—just a window into what I care about and the journey so far.
                </p>

                {/* Social Links */}
                <motion.div
                  className="flex flex-wrap items-center gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <a
                    href="https://www.linkedin.com/in/jordan-oiknine-1a868a310/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href="https://github.com/jordanoiknine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://www.instagram.com/jordanoiknine_/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Instagram →
                  </a>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Resume →
                  </a>
                </motion.div>

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-block px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white rounded-full font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    If we share interests, please please reach out!!
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Journey Timeline */}
            <div className="lg:col-span-6">
              <JourneyTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Alternating Layouts */}
      <div className="relative mt-24">
        <AlternatingBusinessSection />
        <AlternatingProjectsSection />
        <AlternatingLeadershipSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Always down to chat about biotech, building things, or just hear what you&apos;re working on. Shoot me a message if any of this resonates with you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:jordanoik123@gmail.com"
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/jordan-oiknine-1a868a310/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Seriously, reach out. I&apos;d love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-600 dark:bg-primary-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 pb-8 border-b border-primary-500 dark:border-primary-800">
            <a
              href="#businesses"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("businesses")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-primary-100 dark:hover:text-primary-300 transition-colors font-medium"
            >
              Businesses
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-primary-100 dark:hover:text-primary-300 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#leadership"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-primary-100 dark:hover:text-primary-300 transition-colors font-medium"
            >
              Leadership
            </a>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium">
                © {new Date().getFullYear()} A Jordan Oiknine Production
              </div>
              <div className="text-sm text-primary-100 dark:text-primary-300">
                Made with the help of caffeine, cursor, and chatGPT
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
