portfolio-nextjs/
├── app/
│ ├── layout.tsx # Root layout with metadata
│ ├── page.tsx # Main page (composition of components)
│ └── globals.css # Global styles with Tailwind
├── components/
│ ├── Navigation.tsx # Sticky nav with scroll detection
│ ├── Hero.tsx # Hero section with social links
│ ├── Projects.tsx # Projects grid with ProjectCard
│ ├── About.tsx # Skills & Experience sections
│ ├── Contact.tsx # Contact section
│ └── Footer.tsx # Footer with dynamic year
├── lib/
│ └── data.ts # All data (projects, skills, experience)
├── public/ # Place images here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
