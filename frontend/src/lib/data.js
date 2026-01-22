// Projects Data
// Projects Data with Categories
export const projects = [
  {
    id: 1,
    title: 'EncryptIQ',
    description: 'Educational platform for learning cryptographic algorithms (AES, RSA) with real-time encryption/decryption demonstrations.',
    tech: ['React', 'Tailwind CSS', 'Cryptography'],
    category: 'fullstack',
    link: '#', // Add live link if available
    github: 'https://github.com/Anaskaysar/EncryptIQ-Conveys-Intelligence-And-Insight-Into-Encryption',
    featured: true,
    image: '/projects/encryptiq.png', // Placeholder
  },
  {
    id: 2,
    title: 'Travel-X',
    description: 'A comprehensive tourism website featuring destination booking, user reviews, and a dynamic admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    category: 'fullstack',
    link: 'https://travelx-react.web.app/',
    github: 'https://github.com/Anaskaysar/Travel-X-An-Online-Tourism-Website',
    featured: true,
    image: '/projects/travelx.png', // Placeholder
  },
  {
    id: 3,
    title: 'Doctors Portal',
    description: 'Medical appointment management system allowing patients to book appointments and doctors to manage schedules.',
    tech: ['React', 'Material UI', 'Firebase', 'MongoDB', 'Express', 'Node.js'],
    category: 'fullstack',
    link: 'https://yours-doctor-3995f.web.app/',
    github: 'https://github.com/Anaskaysar/Doctors-Portal-ClientSide',
    featured: true,
    image: '/projects/doctors.png', // Placeholder
  },
  {
    id: 4,
    title: 'Fitness Pro',
    description: 'Responsive health and fitness website with user authentication and workout tracking features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'frontend',
    link: 'https://fitness-pro-react.web.app/', // Inferred from pattern, verify if possible
    github: 'https://github.com/Anaskaysar/Fitness-Pro-Responsive-Website-With-Firebase-Authentication',
    featured: false,
    image: '/projects/fitness_pro.png', // Placeholder
  },
  {
    id: 5,
    title: 'Cat vs Dog Classifier',
    description: 'Convolutional Neural Network (CNN) model trained to classify images of cats and dogs with high accuracy.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
    category: 'ai-ml',
    link: '#',
    github: 'https://github.com/Anaskaysar/Unleashing-the-Power-of-CNNs-Classifying-Cats-and-Dogs',
    featured: false,
    image: '/projects/cnn_classifier.png', // Placeholder: Use Architecture Diagram
  },
  {
    id: 6,
    title: 'MalariAI',
    description: 'Automated malaria cell segmentation system using Computer Vision and Deep Learning techniques on blood smear images.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    category: 'ai-ml',
    link: '#',
    github: 'https://github.com/Anaskaysar/MalariAI-Automated-Malaria-Cell-Segmentation-from-Blood-Smear-Images',
    featured: false,
    image: '/projects/malariai.png', // Placeholder: Use Segmentation Output
  },
  {
    id: 7,
    title: 'New Rentoor',
    description: 'A comprehensive real estate platform featuring a responsive property listing system, admin panel, and user dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    category: 'fullstack',
    link: 'https://new-rentoor-react.web.app/',
    github: 'https://github.com/Anaskaysar/New-Rentoor-Real-Estate-Agents',
    featured: true,
    image: '/projects/New_rentoor.png',
  },
];

export const personalInfo = {
  name: 'Kaysarul Anas',
  initials: 'Kaysarul Anas',
  title: 'Junior Django Developer',
  tagline: 'Passionate Backend Developer specializing in Django and cloud infrastructure, with strong React skills for building complete, scalable web applications.',
  email: 'kaysarulanas2@gmail.com',
  availability: 'Open to work',
  social: {
    github: 'https://github.com/anaskaysar',
    linkedin: 'https://www.linkedin.com/in/kaysarulanas/',
    x: 'https://x.com/KaysarulA12768',
  },
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "C++"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Django",
      "Django REST Framework (DRF)",
      "RESTful API Development",
      "Authentication & Authorization",
      "Role-Based Access Control",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "SQLite",
      "Database Design",
      "Django ORM",
      "Migrations",
      "Query Optimization",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Google Cloud Platform (GCP)",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Cloud Build",
      "Artifact Registry",
      "Cloud Deployment",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Docker (Basic)",
      "Render",
    ],
  },
  {
    category: "Development Practices",
    items: [
      "API Testing & Debugging",
      "Logging & Error Handling",
      "Unit Testing (Basic)",
      "Modular Backend Architecture",
      "Environment-Based Configuration",
    ],
  },
  {
    category: "Frontend (Basic)",
    items: [
      "HTML",
      "CSS",
      "React",
    ],
  },
];

export const experience = [
  {
    role: "IT Developer Intern (Backend)",
    company: "Vosyn Inc",
    location: "Toronto, Canada",
    period: "Aug 2025 – Present",
    current: true,
    description: "Developing and maintaining CI/CD workflows, supporting cloud-based build processes, and containerizing backend services.",
    details: [
      "Developing and maintaining CI/CD workflows using GitHub Actions and Google Cloud Platform",
      "Supporting cloud-based build and deployment processes, including Cloud Build triggers and Artifact Registry",
      "Containerizing backend services using Docker to support environment-based deployments",
      "Contributing to production releases and feature development following semantic versioning practices",
      "Collaborating with DevOps and security teams to improve automation, reliability, and secure configurations",
    ]
  }
];

export const coreStack = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Docker",
  "Google Cloud Platform",
  "GitHub",
  "Linux",
];

export const capabilities = [
  "RESTful API Development",
  "Authentication & Authorization",
  "Database Design",
  "Django ORM",
  "Migrations",
  "Query Optimization",
  "CI/CD Pipelines",
  "Cloud Deployment",
  "Logging & Error Handling",
  "Unit Testing",
];


