export interface Business {
  id: string;
  name: string;
  description: string;
  tagline: string;
  achievements: string[];
  impact: string;
  images?: string[];
  links?: {
    quote?: string;
  };
}

export const businesses: Business[] = [
  {
    id: "lawncare",
    name: "Lawn Link Management LLC",
    tagline: "Gotta make sure that lawn stays fresh",
    description:
      "What started as a summer side hustle has grown into a thriving business around the STL. A buddy of mine and I manage everything from scheduling to customer relationships, learning valuable lessons about entrepreneurship, reliability, and the satisfaction of building something from scratch.",
    achievements: [
      "Built a client base of over 25 regular customers through word-of-mouth referrals",
      "Manage all aspects of operations: scheduling, pricing, customer service, and quality control",
      "Reinvested profits to upgrade equipment and expand service offerings to hardscaping",
      "Maintained 95% customer retention rate through reliable, high-quality service (can't win em' all)",
    ],
    impact: "Top-rated lawn care service on NextDoor Neighbor",
    images: [
      "/images/Lawnlink/1.PNG",
      "/images/Lawnlink/2.JPG",
      "/images/Lawnlink/3.JPG",
      "/images/Lawnlink/4.PNG",
      "/images/Lawnlink/5.PNG",
    ],
    links: {
      quote: "mailto:jordanoik123@gmail.com?subject=Lawn%20Care%20Quote%20Request&body=Hey%20there%20Jordan!%0A%0AFound%20this%20link%20on%20your%20website%20and%20would%20love%20to%20get%20in%20touch%20about%20some%20lawn%20work%20I%20need%20taken%20care%20of.%20I%27ve%20heard%20that%20you%27re%20the%20best%20in%20town%20%3B%29%0A%0ASincerely,%0A%5Byour%20name%5D",
    },
  },
  {
    id: "soccer-coaching",
    name: "Private Training / Kick for a Cause",
    tagline: "Inclusive soccer coaching for players of ALL levels",
    description:
      "Combining my passion for soccer with a commitment to inclusion, I created adaptive training sessions for kids ranging from club level to players with special needs. It taught me that the best coaching isn't about perfection, rather, building confidence, joy, and a love for the game. At the end of the day it's a kids game at best.",
    achievements: [
      "Trained 40+ kids with diverse abilities in fundamental soccer skills and teamwork",
      "Developed customized coaching techniques tailored to individual needs and learning styles",
      "Created a welcoming environment where every participant can thrive",
      "Led Kicks-for-a-cause fundraisers to expand impact",
    ],
    impact: "$1000 donated to the Special Needs Soccer Association",
    images: [
      "/images/Private-Training/1.JPG",
      "/images/Private-Training/2.PNG",
      "/images/Private-Training/3.JPG",
      "/images/Private-Training/4.JPG",
      "/images/Private-Training/5.JPG",
    ],
  },
];

