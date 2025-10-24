import Image from 'next/image';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in-development';
  imageSrc: string;
  imageAlt: string;
  githubUrl?: string;
  deployUrl?: string;
  isPrivate?: boolean;
}

export default function ProjectCard({
  title,
  description,
  status,
  imageSrc,
  imageAlt,
  githubUrl,
  deployUrl,
  isPrivate = false
}: ProjectCardProps) {
  const statusColors = {
    completed: 'text-green-400',
    'in-development': 'text-yellow-400'
  };

  const statusText = {
    completed: 'Status: Project completed',
    'in-development': 'Status: In development'
  };

  return (
    <div className='bg-contact flex flex-col rounded-lg border border-white/20 w-full sm:w-[45%] max-w-[500px] px-5'>
      <div className='p-5'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={250}
          className='w-full h-auto cursor-pointer rounded-lg shadow-2xl transition hover:scale-105'
        />
      </div>
      <h3 className='font-bold text-lg mb-2 px-4 text-white'>{title}</h3>
      <p className='font-mediumn text-md mb-2 px-4 text-white/80 flex-grow'>
        {description}
      </p>
      <p className={`text-sm mb-2 px-4 ${statusColors[status]}`}>
        {statusText[status]}
      </p>

      <div className='mx-4 mb-2 flex items-center justify-start gap-3'>
        {isPrivate ? (
          <>
            <Github className='size-5 text-gray-500' />
            <Globe className='size-5 text-gray-500' />
          </>
        ) : (
          <>
            {githubUrl && (
              <a target='_blank' href={githubUrl} rel='noopener noreferrer'>
                <Github className='size-5 text-white transition hover:scale-90' />
              </a>
            )}
            {deployUrl && (
              <a target='_blank' href={deployUrl} rel='noopener noreferrer'>
                <Globe className='size-5 text-white transition hover:scale-90' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
