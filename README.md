# Jordan Oiknine Portfolio Site

This is my portfolio website, built using Next.js 14, Typescript, and Tailwind, with much help from chatGPT and Cursor.

## Dir Structure

```
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main single-page layout
│   └── globals.css             # Global styles and theme variables
├── components/
│   ├── FloatingTopNav.tsx      # Floating section navigation
│   ├── JourneyTimeline.tsx     # Right-side timeline component
│   ├── ThemeToggle.tsx         # Dark mode toggle
│   └── sections/
│       ├── AlternatingBusinessSection.tsx
│       ├── AlternatingProjectsSection.tsx
│       └── AlternatingLeadershipSection.tsx
├── data/
│   ├── businesses.ts           # Business venture data
│   ├── projects.ts             # Biotech projects data
│   └── leadership.ts           # Leadership roles data
├── lib/
│   └── utils.ts                # Utility functions
└── public/
    └── images/
        └── jordan-portrait.png # Background portrait image
```
