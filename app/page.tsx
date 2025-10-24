import { Mail, Linkedin } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillIcon from './components/SkillIcon';
import { projects } from './data/projects';
import { skills } from './data/skills';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<section className='items-center justify-center bg-gradient-to-b from-black to-purple-950'>
				<div className='m-auto mt-10 h-full w-full sm:w-3/6 px-4 sm:px-0'>
					<div>
						<h1 className='text-2xl font-bold'>Kevin Vega</h1>
						<p className='font-sans'>Systems Engineer | Junior Software Developer</p>
					</div>
					<section className='flex h-[150px] w-full flex-col items-center mb-20 sm:mb-0 mt-10'>
						<h1 className='inline border-b-2 text-center'>
							About Me
						</h1>
						<div className='mt-5 flex items-center justify-center gap-5'>
						I&apos;m a Full Stack developer with experience in creating modern web applications using technologies like Next.js, TypeScript, and Prisma. I&apos;m passionate about clean and scalable development, process automation, and continuous improvement. I always seek to provide effective solutions that generate real impact.
						</div>
					</section>
					<section className='flex h-[150px] w-full flex-col items-center'>
						<h1 className='inline border-b-2 text-center'>
							Skills
						</h1>
						<div className='flex h-20 w-full sm:w-2/4 items-center justify-center gap-5 flex-wrap'>
							{skills.map((skill) => (
								<SkillIcon
									key={skill.name}
									icon={skill.icon}
									name={skill.name}
								/>
							))}
						</div>
					</section>
					<section className='flex h-3/4 w-full flex-col items-center sm:mb-20'>
						<h1 className='inline border-b-2 text-center'>
							Projects
						</h1>
						<div className='projects-container flex flex-wrap items-stretch gap-4 sm:gap-6 pb-5 mt-10 w-full justify-center'>
							{projects.map((project) => (
								<ProjectCard
									key={project.id}
									title={project.title}
									description={project.description}
									status={project.status}
									imageSrc={project.imageSrc}
									imageAlt={project.imageAlt}
									githubUrl={project.githubUrl}
									deployUrl={project.deployUrl}
									isPrivate={project.isPrivate}
								/>
							))}
						</div>
					</section>

					<section className='bg-contact mx-auto flex h-44 w-[90%] sm:w-[80%] lg:w-[38%] flex-col items-center justify-center rounded-lg border border-white/20 sm:px-6'>
						<h1 className='inline border-b-2 text-center'>
							Contact Me
						</h1>
						<div className='flex h-20 w-full sm:w-2/4 items-center justify-center gap-5 '>
							<a href='mailto:kevinjosevega28@gmail.com'>
								<button className='inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 font-medium transition-colors hover:opacity-80 sm:w-auto sm:px-6'>
									<Mail className='size-5 cursor-pointer' />{' '}
								</button>
							</a>
							<a
								href='https://www.linkedin.com/in/kevin-vega-462aa1259/'
								target='_blank'
							>
								<button className='inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 font-medium transition-colors hover:opacity-80 sm:w-auto sm:px-6'>
									<Linkedin className='size-5' />
								</button>
							</a>
						</div>
					</section>
					
					<footer className='mt-8 text-center text-white/60 text-sm'>
						© 2025 Kevin Vega — Full Stack Developer
					</footer>
				</div>
			</section>
		</main>
	);
}
