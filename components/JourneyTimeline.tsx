"use client";

import { motion } from "framer-motion";

const journeyItems = [
  {
    id: 1,
    title: "SLSG MLSNEXT Academy Player",
    period: "2022 - 2023",
    description: "Team captain and starting midfielder",
  },
  {
    id: 2,
    title: "Ladue Boys Varsity Soccer",
    period: "2023",
    description: "All-Conference, All-State, All-Region player, state-finalist, offensive player of the year, goal of the year, rookie of the year",
  },
  {
    id: 3,
    title: "LactaSense",
    period: "2023 - 2024",
    description: "DECA State Champ and International Finalist for continuous lactic-acid biosensor microneedle patch",
  },
  {
    id: 4,
    title: "Lawn Link Management LLC",
    period: "2025 - Present",
    description: "Founded and co-managed successful lawn care service with over 25 regular clients",
  },
  {
    id: 5,
    title: "Private Soccer Trainer",
    period: "2024 - Present",
    description: "Private soccer coach, 50+ kids trained",
  },
  {
    id: 6,
    title: "Kick for a Cause",
    period: "2024 - Present",
    description: "Soccer-based fundraising initiative raising thousands for SPENSA",
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

