import { Mail, Linkedin, Globe } from 'lucide-react';
import React from './svg/logo-react';
import Node from './svg/logo-nodejs';
import Js from './svg/logo-js';
import Tailwind from './svg/logo-tailwind';
import Image from 'next/image';
import Github from './svg/logo-github';

export default function Home() {
	return (
		<main className='min-h-scree'>
			<section className='items-center justify-center bg-gradient-to-b from-black to-purple-950'>
				<div className='m-auto mt-10 h-full w-3/6'>
					<div>
						<h1 className='text-2xl font-bold'>Kevin Vega</h1>
						<p className='font-sans'>Systems Engineer | Junior Software Developer</p>
					</div>
					<section className='flex h-[150px] w-full flex-col items-center'>
						<h1 className='inline border-b-2 text-center'>
							About Me
						</h1>
						<div className='mt-5 flex items-center justify-center gap-5'>
						I'm a Full Stack developer with experience in creating modern web applications using technologies like Next.js, TypeScript, and Prisma. I'm passionate about clean and scalable development, process automation, and continuous improvement. I always seek to provide effective solutions that generate real impact.
						</div>
					</section>
					<section className='flex h-[150px] w-full flex-col items-center'>
						<h1 className='inline border-b-2 text-center'>
							Skills
						</h1>
						<div className='flex h-20 w-2/4 items-center justify-center gap-5'>
							<div className='group relative'>
								<React className='size-8' />
								<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
									React
								</div>
							</div>
							<div className='group relative'>
								<Node className='size-8' />
								<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
									Node.js
								</div>
							</div>
							<div className='group relative'>
								<Js className='size-8' />
								<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
									JavaScript
								</div>
							</div>
							<div className='group relative'>
								<Tailwind className='size-8' />
								<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
									TailwindCSS
								</div>
							</div>
						</div>
					</section>
					<section className='flex h-3/4 w-full flex-col items-center sm:mb-20'>
						<h1 className='inline border-b-2 text-center'>
							Projects
						</h1>
						<div className='projects-container flex flex-wrap items-stretch gap-6 pb-5 mt-10 w-full justify-center'>
							<div className='bg-contact flex flex-col rounded-lg border border-white/20 w-[45%] max-w-[500px] px-5'>
								<div className='p-5'>
									<Image
										src='/Polifitnes.webp'
										alt='PoliFitness Project'
										width={300}
										height={250}
										className='cursor-pointer rounded-lg shadow-2xl transition hover:scale-105'
									/>
								</div>
								<h3 className='font-bold text-lg mb-2 px-4 text-white'>PoliFitness</h3>
								<p className='font-mediumn text-md mb-2 px-4 text-white/80 flex-grow'>
									User management system with authentication and roles (ADMIN, DOCTOR, COACH, USER). Developed with Next.js, Prisma, TypeScript, Docker and TablePlus.
								</p>
								<p className='text-sm mb-2 px-4 text-green-400'>Status: Project completed</p>

								<div className='mx-4 mb-2 flex items-center justify-start gap-3'>
									<Github className='size-5 text-gray-500' />
									<Globe className='size-5 text-gray-500' />
								</div>
							</div>
							<div className='bg-contact flex flex-col rounded-lg border border-white/20 w-[45%] max-w-[500px] px-5'>
								<div className='p-5'>
									<Image
										src='/Kocopink.jpg'
										alt='Kocopink Project'
										width={300}
										height={250}
										className='cursor-pointer rounded-lg shadow-2xl transition hover:scale-105'
									/>
								</div>
								<h3 className='font-bold text-lg mb-2 px-4 text-white'>Kocopink</h3>
								<p className='font-mediumn text-md mb-2 px-4 text-white/80 flex-grow'>
									E-commerce developed in React for a microenterprise, focused on selling personalized products.
								</p>
								<p className='text-sm mb-2 px-4 text-green-400'>Status: Project completed</p>

								<div className='mx-4 mb-2 flex items-center justify-start gap-3'>
									<a
										target='_blank'
										href='https://github.com/Kevinelorigi/KocoPinkFinal'
									>
										<Github className='size-5 text-white transition hover:scale-90' />
									</a>
									<Globe className='size-5 text-gray-500' />
									
								</div>
							</div>
							<div className='bg-contact flex flex-col rounded-lg border border-white/20 w-[45%] max-w-[500px] px-5'>
								<div className='p-5'>
									<Image
										src='/Fragancistico.webp'
										alt='Fragancístico Project'
										width={300}
										height={250}
										className='cursor-pointer rounded-lg shadow-2xl transition hover:scale-105'
									/>
								</div>
								<h3 className='font-bold text-lg mb-2 px-4 text-white'>Fragancístico</h3>
								<p className='font-mediumn text-md mb-2 px-4 text-white/80 flex-grow'>
									Digital perfume catalog with basic virtual store functions.
								</p>
								<p className='text-sm mb-2 px-4 text-yellow-400'>Status: In development</p>

								<div className='mx-4 mb-2 flex items-center justify-start gap-3'>
									<a
										target='_blank'
										href='https://github.com/Kevinelorigi/fragance-tracker'
									>
										<Github className='size-5 text-white transition hover:scale-90' />
									</a>
									<a
										target='_blank'
										href='https://fragance-tracker-git-navbar-kevinelorigis-projects.vercel.app/'
									>
										<Globe className='size-5 text-white transition hover:scale-90' />
									</a>
								</div>
							</div>
						</div>
					</section>

					<section className='bg-contact mx-auto flex h-44 w-[80%] flex-col items-center justify-center rounded-lg border border-white/20 sm:w-[38%] sm:px-6'>
						<h1 className='inline border-b-2 text-center'>
							Contact Me
						</h1>
						<div className='flex h-20 w-2/4 items-center justify-center gap-5 '>
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
