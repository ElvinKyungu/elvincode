import type { ExperienceDetail } from '@/types/experiences'
import artile1 from '@/assets/elvin11.png'
import russie from '@/assets/russie.png'
import france from '@/assets/france.png'
import camroun from '@/assets/cameroun.avif'
import spain from '@/assets/espagne.jpeg'
import rdc from '@/assets/lubumbashi.jpg'

// Efficient Outsource SRL (Russia)
export const Efficient: ExperienceDetail = {
  title: "Efficient Outsource SRL",
  image: russie,
  description: "Developed a robust microfinance dashboard with a seamless UX and solid backend integration.",
  learned: [
    {
      img: artile1,
      title: "Modern Frontend Frameworks",
      description: "Mastered Vue.js with TypeScript, enhanced animations using GSAP, and optimized component interactions through VueUse and TailwindCSS."
    }
  ],
  locatedCompany: [
    {
      img: russie,
      title: "Russia",
      description: "Based in Russia, this project allowed me to refine my skills with a modern tech stack for finance solutions."
    }
  ]
};

// Atlantic Zone (Spain)
export const atlanticZone: ExperienceDetail = {
  image: spain,
  title: "Atlantic Zone",
  description: "Developed a device-tracking app with real-time data management and seamless notification systems.",
  learned: [
    {
      img: artile1,
      title: "Map Integrations & Real-Time Data",
      description: "Gained proficiency with Google Maps API, Supabase for backend support, and Vue.js to create a responsive, data-driven user interface."
    }
  ],
  locatedCompany: [
    {
      img: russie,
      title: "Spain",
      description: "This Spain-based project gave me hands-on experience in building highly interactive map-based applications."
    }
  ]
};

// Soixante Circuits (France)
export const soixanteCircuits: ExperienceDetail = {
  title: "Soixante Circuits",
  image: france,
  description: "Worked on innovative projects like Garden-Map with Google and Michael Kors, with a focus on frontend and Google Maps integrations.",
  learned: [
    {
      img: artile1,
      title: "Advanced Frontend & Database Solutions",
      description: "Deepened my expertise in Supabase, Pocketbase, and Vue.js, while creating highly engaging user interfaces."
    }
  ],
  locatedCompany: [
    {
      img: france,
      title: "France",
      description: "A France-based project that challenged me to integrate complex databases and ensure a premium user experience."
    }
  ]
};

// Bayamo (Cameroon)
export const bayamo: ExperienceDetail = {
  image: camroun,
  title: "Bayamo",
  description: "Contributed to building a scalable dropshipping platform, streamlining transactions and inventory management.",
  learned: [
    {
      img: artile1,
      title: "E-Commerce & Scalability",
      description: "Enhanced my knowledge in scalable e-commerce architectures and inventory management systems."
    }
  ],
  locatedCompany: [
    {
      img: camroun,
      title: "Cameroon",
      description: "Cameroon-based project where I focused on creating efficient, scalable e-commerce solutions."
    }
  ]
};

// Lushitrap (Democratic Republic of Congo)
export const lushitrap: ExperienceDetail = {
  image: rdc,
  title: "Lushitrap",
  description: "Built a music streaming and download app, optimizing content delivery and user experience.",
  learned: [
    {
      img: artile1,
      title: "Media Streaming & User Experience",
      description: "Learned the intricacies of media streaming and content recommendations, improving overall app performance and user satisfaction."
    }
  ],
  locatedCompany: [
    {
      img: rdc,
      title: "Democratic Republic of Congo",
      description: "A DRC-based project where I leveraged integration techniques to enhance multimedia content delivery."
    }
  ]
}