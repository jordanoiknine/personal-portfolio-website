export interface Leadership {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  impact: string;
  achievements: string[];
  images?: string[];
  links?: {
    highlights?: string;
    instagram?: string;
  };
}

export const leadership: Leadership[] = [
  {
    id: "unicef",
    title: "President",
    organization: "UNICEF Ladue",
    period: "2022 - Present",
    description:
      "Serving as president of our school's UNICEF chapter, I lead a 12-person officer board and a team of volunteers dedicated to making a global impact. We've organized over 20 fundraisers—including three school dances—awareness campaigns, and volunteer initiatives that support children worldwide.",
    impact: "$50,000+ raised • 486 signed up members",
    achievements: [
      "Led a 12-person officer board and 20+ active volunteers",
      "Organized over 20 fundraising events, including 3 school dances",
      "Raised over $50,000 for global children's initiatives",
      "Expanded chapter engagement and visibility across campus",
    ],
    images: [
      "/images/Unicef/1.png",
      "/images/Unicef/2.png",
      "/images/Unicef/3.png",
      "/images/Unicef/4.png",
      "/images/Unicef/5.png",
      "/images/Unicef/6.png",
    ],
    links: {
      instagram: "https://www.instagram.com/ladue_unicef/",
    },
  },
  {
    id: "soccer-captain",
    title: "Varsity Soccer Captain",
    organization: "High School Team",
    period: "2023 - Present",
    description:
      "Leading the team both on and off the field as captain. It's more than coordinating plays—it's about building trust, maintaining morale through tough games, and helping teammates push past their limits. Soccer taught me that great leadership means showing up, even when it's hard.",
    impact: "3 years varsity • Team captain • Starting midfielder",
    achievements: [
      "3 years of varsity experience",
      "Team captain and starting midfielder",
      "Lead practices and coordinate team strategy",
      "Balance rigorous athletics with intense academics",
    ],
    images: [
      "/images/soccer/1.PNG",
      "/images/soccer/2.PNG",
      "/images/soccer/3.PNG",
    ],
    links: {
      highlights: "https://www.youtube.com/channel/UCkHF7XICbBou7iF5nou8e4g",
    },
  },
];

