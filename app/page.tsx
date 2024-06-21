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
						<h1>
							Hi! Im Kevin,
							<p>Full Stack Developer</p>
						</h1>
					</div>
					<section className='flex h-[150px] w-full flex-col items-center'>
						<h1 className='inline border-b-2 text-center'>
							Skills
						</h1>
						<div className='flex h-20 w-2/4 items-center justify-center gap-5'>
							<React className='size-8' />
							<Node className='size-8' />
							<Js className='size-8' />
							<Tailwind className='size-8' />
						</div>
					</section>
					<section className='flex h-3/4 w-full flex-col items-center sm:mb-20'>
						<h1 className='inline border-b-2 text-center'>
							Proyectos
						</h1>
						<div className='bg-contact mt-10 flex flex-col rounded-lg border border-white/20 sm:h-[50%] sm:w-[50%] sm:px-5'>
							<div className='p-5'>
								<Image
									src='/Fragancistico.webp'
									alt='One Project'
									width={300}
									height={250}
									className='cursor-pointer rounded-lg shadow-2xl transition hover:scale-105'
								/>
							</div>
							<p className='font-mediumn text-md mb-2 px-4 text-white/80'>
								En proceso. Es una página web que tiene como
								objetivo ayudar a las personas saber que
								fragancia usar en cada ocasión.
							</p>

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
					</section>

					<section className='bg-contact mx-auto flex h-44 w-[80%] flex-col items-center justify-center rounded-lg border border-white/20 sm:w-[38%] sm:px-6'>
						<h1 className='inline border-b-2 text-center'>
							Contacto
						</h1>
						<div className='flex h-20 w-2/4 items-center justify-center gap-5 '>
							<a href=''>
								<button className='inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 font-medium transition-colors hover:opacity-80 sm:w-auto sm:px-6'>
									<Mail className='size-5 cursor-pointer' />{' '}
								</button>
							</a>
							<a href='https://www.linkedin.com/in/kevin-jos%C3%A9-vega-navas-462aa1259/'>
								<button className='inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 font-medium transition-colors hover:opacity-80 sm:w-auto sm:px-6'>
									<Linkedin className='size-5' />
								</button>
							</a>
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}
