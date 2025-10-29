export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: string[]; // Optional array for multiple images
  date: string;
  links?: {
    github?: string;
    live?: string;
    paper?: string;
    patent?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "lactasense",
    title: "LactaSense",
    description:
      "DECA International Finalist project. Developed a rapid lactic acid detection system using biosensor technology to monitor muscle fatigue. Combining entrepreneurship with biotech innovation to optimize athletic performance and prevent injury.",
    fullDescription: `
      <h2>Overview</h2>
      <p>LactaSense is a rapid lactic acid detection system that I developed for DECA's international competition, where it became an international finalist. The project combines biosensor technology with practical applications in sports performance and injury prevention.</p>
      
      <h2>The Problem</h2>
      <p>Athletes often push through muscle fatigue without precise data, increasing the risk of injury and limiting optimal performance. Current monitoring methods are either invasive, delayed, or lack real-time insights.</p>
      
      <h2>The Solution</h2>
      <p>LactiSense uses enzymatic biosensors to measure lactic acid levels in real time, giving athletes and coaches actionable insights to optimize training and recovery. The system allows for safer, data-driven performance management.</p>
      
      <h2>Business Model</h2>
      <ul>
        <li>Direct-to-consumer wearable devices for athletes</li>
        <li>Partnerships with sports teams and trainers</li>
        <li>Subscription-based performance tracking and analytics</li>
        <li>Data-driven personalized training recommendations</li>
      </ul>
      
      <h2>DECA Competition</h2>
      <p>Presented LactiSense at DECA's international conference, competing against hundreds of entrepreneurship projects. Judges highlighted the innovative combination of biotechnology and practical business application.</p>
      
      <h2>What I Learned</h2>
      <p>This project taught me that innovation isn't just about the technology—it's about understanding user needs, building a viable business model, and clearly communicating complex ideas. It's where my passion for biotech meets real-world entrepreneurship.</p>
    `,
    image: "/images/LactaSense/Lactasense1.png",
    images: [
      "/images/LactaSense/Lactasense1.png",
      "/images/LactaSense/LactaSense2.png",
      "/images/LactaSense/LactaSense3.png",
      "/images/LactaSense/Lactasense4.png",
    ],
    date: "2023-2024",
    links: {
      paper: "#",
      patent: "https://drive.google.com/file/d/1MM3hIC8MCMSMTVsb5avwhQAXqZTtgbJ9/view?usp=sharing",
    },
  },
  {
    slug: "bioimpedance-sensor",
    title: "Impedix",
    description:
      "Designing a non-invasive bioimpedance sensor for real-time health monitoring. Using electrical impedance to measure body composition, hydration levels, and metabolic changes.",
    fullDescription: `
      <h2>Overview</h2>
      <p>Bioimpedance sensing uses small electrical currents to measure the body's impedance (resistance and reactance). Different tissues have different impedance values, allowing us to non-invasively monitor health metrics in real-time.</p>
      
      <h2>What It Measures</h2>
      <ul>
        <li>Body composition (fat vs. muscle mass)</li>
        <li>Hydration levels and fluid distribution</li>
        <li>Metabolic rate indicators</li>
        <li>Cardiovascular health markers</li>
      </ul>
      
      <h2>Technical Approach</h2>
      <p>The sensor uses multi-frequency bioimpedance analysis (BIA) with custom-designed electrodes. Signal processing algorithms filter noise and extract meaningful health data from the impedance measurements.</p>
      
      <h2>Applications</h2>
      <p>This technology could help athletes optimize training, assist patients with chronic conditions in monitoring their health, and provide early warning signs of dehydration or other health issues.</p>
      
      <h2>Current Status</h2>
      <p>Currently in prototype phase, testing accuracy against clinical-grade equipment and refining the sensor design for improved signal quality.</p>
    `,
    image: "/images/Impedix/FIG.1.png",
    images: [
      "/images/Impedix/FIG.1.png",
      "/images/Impedix/FIG.2.png",
      "/images/Impedix/FIG.3.png",
      "/images/Impedix/FIG.4.png",
    ],
    date: "2024",
    links: {
      patent: "https://drive.google.com/file/d/1tTgtNXmTJbyVcDwgj_f_TXPIVNWrLIqt/view?usp=sharing",
    },
  },
];

