import type { ExperienceDetail } from '@/types/experiences';
import artile1 from '@/assets/elvin11.png'
import artile2 from '@/assets/elvin11.png'
import artile3 from '@/assets/elvin11.png'
import personnage1 from '@/assets/elvin11.png'
import personnage2 from '@/assets/elvin11.png'
import capital from '@/assets/elvin11.png'
import growth from '@/assets/elvin11.png'
import origine from '@/assets/elvin11.png'
import culture from '@/assets/elvin11.png'

export const Efficient: ExperienceDetail = {
  title: "Efficient Outsource SRL",
  image: origine,
  description: "At Efficient Outsource SRL, I developed a microfinance dashboard, enhancing the user experience and backend integration for smooth financial operations.",
  articles: [
    {
      img: artile2,
      title: "Great Kanto Earthquake",
      description: "In 1923, the Great Kanto Earthquake struck Tokyo, causing massive destruction. It was a catalyst for urban redevelopment and modernization efforts in the subsequent decades."
    }
  ],
  personnages: [
    {
      img: personnage1,
      title: "Tokugawa Yoshinobu",
      description: "The last shogun of the Tokugawa shogunate, Tokugawa Yoshinobu, played a significant role in the events leading to the Meiji Restoration. His resignation marked the end of centuries of feudal rule."
    }
  ]
}

export const atlanticZone: ExperienceDetail = {
  image: capital,
  title: "Atlantic Zone",
  description: "I built a device tracking app at Atlantic Zone, ensuring real-time data management and notification systems for seamless operations.",
  articles: [
    {
      img: artile2,
      title: "Political Modernization",
      description: "Examines how the move to Tokyo signaled a new era in Japan’s political landscape."
    }
  ],
  personnages: [
    {
      img: personnage2,
      title: "Samurai Transition",
      description: "How the shift of the capital impacted the samurai and their societal role."
    }
  ]
}

export const soixanteCircuits: ExperienceDetail = {
  title: "Soixante Circuits",
  image: growth,
  description: "At Soixante Circuits, I worked on high-profile projects like Garden-Map with Google and Michael Kors, focusing on frontend development and Google Maps integration.",
  articles: [
    {
      img: artile1,
      title: "Economic Miracle",
      description: "The post-war economic boom, often called the 'Japanese Economic Miracle,' transformed Tokyo into a thriving metropolis. This period saw rapid industrial growth, improved infrastructure, and increased global trade."
    },
    {
      img: artile2,
      title: "Urban Expansion",
      description: "During the economic growth period, Tokyo underwent significant urban expansion, with the construction of modern skyscrapers, bullet trains, and advanced urban planning to accommodate its growing population."
    }
  ],
  personnages: [
    {
      img: personnage1,
      title: "Prime Minister Eisaku Sato",
      description: "Under the leadership of Prime Minister Eisaku Sato, Tokyo experienced remarkable economic growth and hosted the 1964 Olympics, showcasing Japan's recovery and modernization."
    },
    {
      img: artile1,
      title: "Japanese Business Leaders",
      description: "Business leaders like Soichiro Honda and Akio Morita (founder of Sony) played crucial roles in Tokyo’s transformation into a global hub for technology and innovation during the economic boom."
    }
  ]
}

export const bayamo: ExperienceDetail = {
  image: culture,
  title: "Bayamo",
  description: "At Bayamo, I helped build a scalable dropshipping platform, optimizing transactions and inventory management for smoother user experiences.",
  articles: [
    {
      img: artile2,
      title: "Tokugawa Shogunate",
      description: "The Tokugawa shogunate ruled Japan for over 250 years, providing stability and a strict social order, which allowed Edo to flourish as a cultural and economic hub."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Merchant Class in Edo",
      description: "The rising merchant class played a significant role in the economic prosperity of Edo, contributing to its cultural and financial growth during the shogunate era."
    }
  ]
}

export const lushitrap: ExperienceDetail = {
  image: culture,
  title: "Lushitrap",
  description: "I developed a music streaming and download app for Lushitrap, improving the download flow and content recommendations for a better user experience.",
  articles: [
    {
      img: artile1,
      title: "Edo Period Transformation",
      description: "During the Edo period, Edo transformed into Japan's political center under the Tokugawa shogunate, growing in population and cultural influence."
    },
  ],
  personnages: [
    {
      img: personnage2,
      title: "Tokugawa Ieyasu",
      description: "Tokugawa Ieyasu was the founder of the Tokugawa shogunate, establishing Edo as the administrative capital and laying the foundations for its growth into modern-day Tokyo."
    }
  ]
}