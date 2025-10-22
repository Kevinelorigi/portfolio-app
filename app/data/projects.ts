export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-development';
  imageSrc: string;
  imageAlt: string;
  githubUrl?: string;
  deployUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 'polifitness',
    title: 'PoliFitness',
    description: 'User management system with authentication and roles (ADMIN, DOCTOR, COACH, USER). Developed with Next.js, Prisma, TypeScript, Docker and TablePlus.',
    status: 'completed',
    imageSrc: '/Polifitnes.webp',
    imageAlt: 'PoliFitness Project',
    isPrivate: true
  },
  {
    id: 'kocopink',
    title: 'Kocopink',
    description: 'E-commerce developed in React for a microenterprise, focused on selling personalized products.',
    status: 'completed',
    imageSrc: '/Kocopink.jpg',
    imageAlt: 'Kocopink Project',
    githubUrl: 'https://github.com/Kevinelorigi/KocoPinkFinal',
    isPrivate: false
  },
  {
    id: 'fragancistico',
    title: 'Fragancístico',
    description: 'Digital perfume catalog with basic virtual store functions.',
    status: 'in-development',
    imageSrc: '/Fragancistico.webp',
    imageAlt: 'Fragancístico Project',
    githubUrl: 'https://github.com/Kevinelorigi/fragance-tracker',
    deployUrl: 'https://fragance-tracker-git-navbar-kevinelorigis-projects.vercel.app/',
    isPrivate: false
  }
];
