export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  highlight: string;
  github: string;
  liveUrl?: string;
  videoUrl?: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  tools: {
    name: string;
    category: string;
  }[];
  challenges?: string;
  learnings?: string;
  year: string;
  duration: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "signtalk",
    title: "SignTalk",
    tagline: "Breaking communication barriers with AI-powered sign language recognition",
    description:
      "Built a cross-platform mobile app that bridges communication gaps for deaf individuals by translating American Sign Language (ASL) gestures into real-time text using AI/ML, Python, OpenCV, and MediaPipe. Developed and maintained 100% of the frontend using React Native and TypeScript, building 30+ reusable UI components tailored for both iOS and Android.",
    image: "/image/signTalk.png",
    alt: "SignTalk project preview",
    tags: ["React Native", "TensorFlow", "AI/ML"],
    highlight: "90% accuracy",
    github: "https://github.com/NithishaSathishkumar/SignTalk",
    videoUrl: "", // Add your demo video URL here
    features: [
      {
        title: "Real-Time ASL Recognition",
        description: "Improved ASL gesture recognition accuracy by 90% through optimization of a custom TensorFlow model using OpenCV and MediaPipe.",
        icon: "fa-solid fa-bolt",
      },
      {
        title: "20,000+ Video Library",
        description: "Integrated a comprehensive ASL learning library with 20,000+ videos to help users learn and practice sign language effectively.",
        icon: "fa-solid fa-video",
      },
      {
        title: "Cross-Platform UI",
        description: "Built 30+ reusable UI components using React Native and TypeScript, tailored for both iOS (Xcode) and Android (Android Studio).",
        icon: "fa-solid fa-mobile-screen",
      },
      {
        title: "User Feedback System",
        description: "Stored 500+ user feedback entries using Firebase Realtime Database to support future model retraining and UX improvements.",
        icon: "fa-solid fa-comments",
      },
    ],
    tools: [
      { name: "React Native", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "TensorFlow", category: "ML Framework" },
      { name: "PyTorch", category: "ML Framework" },
      { name: "OpenCV", category: "Computer Vision" },
      { name: "MediaPipe", category: "ML Pipeline" },
      { name: "Firebase", category: "Backend" },
      { name: "Python", category: "Model Training" },
    ],
    challenges:
      "The biggest challenge was optimizing the ML model to run smoothly on mobile devices while maintaining high accuracy. I had to experiment with model quantization and pruning techniques to achieve 90% accuracy while keeping the app responsive.",
    learnings:
      "This project deepened my understanding of the full ML pipeline — from data collection and augmentation to model deployment on mobile devices. I also learned the importance of user testing with the actual target audience to refine the UX.",
    year: "2024",
    duration: "3 months",
    role: "Solo Developer",
  },
  {
    slug: "mentorme",
    title: "MentorMe Tutoring Platform",
    tagline: "Connecting learners with tutors through intelligent matching",
    description:
      "Collaborated in a team of 4 to build a responsive, web-based tutoring platform using JavaScript, HTML, CSS, React, and Bootstrap, connecting users with tutors for goal-based learning in tech and academic subjects. Integrated multiple APIs for seamless virtual tutoring sessions and secure payment processing.",
    image: "/image/MentorMe.png",
    alt: "MentorMe project preview",
    tags: ["React", "Firebase", "Zoom API"],
    highlight: "Team of 4",
    github: "https://github.com/NithishaSathishkumar/CSS_481_Project",
    videoUrl: "", // Add your demo video URL here
    features: [
      {
        title: "Virtual Tutoring Sessions",
        description: "Integrated Zoom API for seamless virtual tutoring sessions, enhancing user experience and accessibility.",
        icon: "fa-solid fa-video",
      },
      {
        title: "Secure Payments",
        description: "PayPal API integration for secure, efficient payment processing between students and tutors.",
        icon: "fa-solid fa-credit-card",
      },
      {
        title: "Real-Time Progress Tracking",
        description: "Firebase Authentication and Realtime Database for secure login, personalized profiles, and learning progress tracking.",
        icon: "fa-solid fa-chart-line",
      },
      {
        title: "Automated Scheduling",
        description: "Google API integration to sync tutor availability with Google Calendar for automated scheduling and reminders.",
        icon: "fa-solid fa-calendar-check",
      },
    ],
    tools: [
      { name: "React", category: "Framework" },
      { name: "JavaScript", category: "Language" },
      { name: "Firebase", category: "Backend" },
      { name: "Zoom API", category: "Video" },
      { name: "PayPal API", category: "Payments" },
      { name: "Google API", category: "Calendar" },
      { name: "Bootstrap", category: "Styling" },
      { name: "Go", category: "Backend" },
    ],
    challenges:
      "Implementing the scheduling system with timezone handling and conflict detection was complex. Integrating multiple third-party APIs (Zoom, PayPal, Google Calendar) required careful coordination to ensure a seamless user experience.",
    learnings:
      "This project taught me how to collaborate effectively in a team setting, integrate multiple third-party APIs, and build a production-ready full-stack application with proper authentication flows and real-time data synchronization.",
    year: "2024",
    duration: "4 months",
    role: "Full-Stack Developer",
  },
  {
    slug: "weather-app",
    title: "Weather Application",
    tagline: "Beautiful, accurate weather forecasts at your fingertips",
    description:
      "A modern weather application that provides real-time weather data, 5-day forecasts, and location-based services. The app features a clean, responsive interface with dark mode support, geolocation integration, and smooth animations. Built with vanilla JavaScript and the OpenWeather API.",
    image: "/image/weather.png",
    alt: "Weather app preview",
    tags: ["React", "REST APIs", "CSS3"],
    highlight: "100+ cities",
    github: "https://github.com/NithishaSathishkumar/Weather",
    videoUrl: "", // Add your demo video URL here
    features: [
      {
        title: "Geolocation Support",
        description: "Automatically detects user location for instant local weather data with one-click permission.",
        icon: "fa-solid fa-location-crosshairs",
      },
      {
        title: "5-Day Forecast",
        description: "Detailed hourly and daily forecasts with temperature trends, precipitation chances, and weather conditions.",
        icon: "fa-solid fa-calendar-days",
      },
      {
        title: "Dark Mode",
        description: "Automatic and manual theme switching with persistent preferences stored in local storage.",
        icon: "fa-solid fa-moon",
      },
      {
        title: "City Search",
        description: "Debounced search with autocomplete suggestions supporting 100+ cities worldwide.",
        icon: "fa-solid fa-magnifying-glass",
      },
    ],
    tools: [
      { name: "JavaScript ES6+", category: "Language" },
      { name: "React", category: "Framework" },
      { name: "OpenWeather API", category: "Data Source" },
      { name: "CSS3", category: "Styling" },
      { name: "Geolocation API", category: "Browser API" },
      { name: "Local Storage", category: "Persistence" },
    ],
    challenges:
      "Handling API rate limits while providing a smooth user experience required implementing smart caching strategies and debounced search. I also had to ensure graceful error handling when location permissions were denied.",
    learnings:
      "This project strengthened my understanding of asynchronous JavaScript, API integration patterns, and responsive design principles. I learned the importance of loading states and error boundaries for better UX.",
    year: "2023",
    duration: "2 weeks",
    role: "Solo Developer",
  },
  {
    slug: "hotel-reservation",
    title: "Hotel Reservation System",
    tagline: "Efficient database design for hospitality management",
    description:
      "A comprehensive hotel reservation database system designed to handle complex booking scenarios, room management, and staff operations. The project focuses on database design principles, query optimization, and data integrity with a normalized schema supporting concurrent operations.",
    image: "/image/Hotel Reservation.png",
    alt: "Hotel reservation project preview",
    tags: ["PostgreSQL", "Python", "SQL"],
    highlight: "20% faster",
    github: "https://github.com/NithishaSathishkumar/475Final_Project",
    videoUrl: "", // Add your demo video URL here
    features: [
      {
        title: "Normalized Schema",
        description: "15+ interconnected tables following 3NF principles for data integrity and minimal redundancy.",
        icon: "fa-solid fa-diagram-project",
      },
      {
        title: "Query Optimization",
        description: "Strategic indexing and materialized views achieving 20% faster reads on frequently accessed paths.",
        icon: "fa-solid fa-gauge",
      },
      {
        title: "Complex Booking Logic",
        description: "Handles overlapping reservations, room type preferences, and dynamic pricing with constraints.",
        icon: "fa-solid fa-bed",
      },
      {
        title: "Reporting Dashboard",
        description: "SQL queries for occupancy rates, revenue analysis, and staff performance metrics.",
        icon: "fa-solid fa-chart-line",
      },
    ],
    tools: [
      { name: "PostgreSQL", category: "Database" },
      { name: "SQL", category: "Query Language" },
      { name: "Python", category: "Scripting" },
      { name: "pgAdmin", category: "DB Management" },
      { name: "Draw.io", category: "ER Diagrams" },
      { name: "Git", category: "Version Control" },
    ],
    challenges:
      "Designing a schema that could handle edge cases like partial cancellations, room upgrades, and seasonal pricing while maintaining referential integrity was the main challenge. I used triggers and stored procedures to enforce business rules.",
    learnings:
      "This project gave me hands-on experience with database design patterns, query analysis using EXPLAIN, and the trade-offs between normalization and query performance. I learned to think about data modeling from both a technical and business perspective.",
    year: "2024",
    duration: "6 weeks",
    role: "Database Designer",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
