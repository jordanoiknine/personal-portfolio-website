# Jordan Oiknine - Portfolio

A modern, single-page portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design with alternating content sections, expandable cards, and smooth animations.

## ✨ Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Single-Page Layout**: Smooth scrolling with section navigation
- **Three Content Sections**:
  - **Businesses**: Showcasing entrepreneurial ventures
  - **Projects**: Biotech research and development work
  - **Leadership**: Community leadership roles and impact
- **Interactive Cards**: Expandable content cards with horizontal expansion
- **Floating Headers**: Section headers that slide left when scrolling
- **Journey Timeline**: Right-side chronological timeline on landing page
- **Smooth Animations**: Framer Motion for scroll reveals and transitions
- **Dark Mode**: Theme toggle with smooth transitions
- **Fully Responsive**: Mobile-first design with adaptive layouts
- **SEO Optimized**: Proper metadata and semantic HTML

## 📁 Project Structure

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

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

**Landing Page** (`app/page.tsx`):
- Update name, intro text, and social links
- Adjust portrait image opacity and positioning

**Journey Timeline** (`components/JourneyTimeline.tsx`):
- Edit the `journeyItems` array with your experiences

### Modify Content Sections

**Businesses** (`data/businesses.ts`):
```typescript
{
  id: "unique-id",
  name: "Business Name",
  tagline: "Brief tagline",
  description: "Short description",
  achievements: ["Achievement 1", "Achievement 2", ...],
  impact: "Impact metric"
}
```

**Projects** (`data/projects.ts`):
```typescript
{
  slug: "project-slug",
  title: "Project Title",
  description: "Brief description",
  fullDescription: `<p>Detailed HTML content...</p>`,
  image: "/images/project.jpg",
  date: "2024",
  tags: ["Tag1", "Tag2"],
  links: {
    github: "https://...",
    live: "https://...",
    paper: "https://..."
  }
}
```

**Leadership** (`data/leadership.ts`):
```typescript
{
  id: "unique-id",
  title: "Role Title",
  organization: "Organization Name",
  period: "2023 - Present",
  description: "Brief description",
  achievements: ["Achievement 1", "Achievement 2", ...],
  impact: "Impact metric"
}
```

### Update Images

1. Add images to `public/images/`
2. Update references in data files
3. For the landing portrait: replace `public/images/jordan-portrait.png`

### Styling

**Colors** (`tailwind.config.ts`):
- Customize the primary color scheme
- Adjust dark mode colors

**Fonts** (`app/layout.tsx`):
- Currently using Inter sans-serif
- Add additional fonts from Google Fonts if needed

## 🎨 Design Features

### Section Navigation
Floating navbar with smooth scroll to each section (Businesses, Projects, Leadership)

### Alternating Layouts
Content cards alternate left/right for visual interest

### Expandable Cards
- Click any card to expand and see more details
- Cards expand both vertically and horizontally (70% → 100% width)
- Smooth animations with Framer Motion

### Floating Headers
- Section headers stick to top while scrolling
- Slide left (25%) to avoid covering content
- Return to center when reaching new section

### Journey Timeline
- Vertical timeline on right side of landing page
- Shows key milestones chronologically
- Sticky positioning for visibility

## 📱 Mobile Responsive

- Floating nav adapts to mobile screens
- Timeline moves to single column
- Content cards stack vertically
- Touch-friendly interactive elements
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Your site is live!

The `vercel.json` configuration is already set up for optimal deployment.

### Other Platforms

The site works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React (minimal usage)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with modern web technologies and best practices for a fast, accessible, and memorable portfolio experience.
