"use client";

import { motion } from "framer-motion";

const journeyItems = [
  {
    id: 1,
    title: "SLSG MLSNEXT Academy Player",
    period: "2019 - Present",
    description: "Club soccer team captain and starting midfielder",
  },
  {
    id: 2,
    title: "Ladue Boys Varsity Soccer",
    period: "2023 - Present",
    description: "All-Conference, All-State, All-Region player, state-finalist, offensive player of the year, goal of the year, rookie of the year",
  },
  {
    id: 3,
    title: "DECA",
    period: "2024",
    description: "Founded LactaSense through DECA, competed in the Entrepreneurship Innovation Plan Event",
  },
  {
    id: 4,
    title: "Daya Pharma",
    period: "2024 - Present",
    description: "Developed LactaSense into working proof-of-concept and wrote a provisional patent",
  },
  {
    id: 5,
    title: "UNICEF",
    period: "2022 - Present",
    description: "Finally became president of UNICEF Ladue, leading a 12-person officer board and organizing 20+ fundraisers raising $50,000+",
  },
  {
    id: 7,
    title: "Lawn Link Management LLC",
    period: "2025",
    description: "Founded and co-managed successful lawn care service with over 25 regular clients",
  },
  {
    id: 8,
    title: "Private Soccer Trainer",
    period: "2025",
    description: "Private soccer coach, 40+ kids trained",
  },
  {
    id: 9,
    title: "Made this website",
    period: "2025",
    description: "Learned TypeScript and Next.js (with Cursor and ChatGPT) and built this site",
  },
  {
    id: 10,
    title: "Kick for a Cause",
    period: "2025",
    description: "Soccer-based fundraising initiative raising thousands for SPENSA",
  },
  {
    id: 6,
    title: "Impedix",
    period: "2025 - Present",
    description: "Designing a non-invasive bioimpedance sensor for real-time health monitoring using electrical impedance",
  },
];

const JourneyTimeline = () => {
  return (
    <div className="w-full">
      <motion.div
        className="sticky top-32"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-lg font-bold mb-6">How it's going</h3>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          
          {/* Timeline items */}
          <div className="space-y-6">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-3 z-10 w-3 h-3">
                  <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 rounded-full" />
                </div>
                
                {/* Card */}
                <div className="ml-10 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                  <div className="text-xs font-medium text-primary-600 dark:text-primary-400 mb-1">
                    {item.period}
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyTimeline;

