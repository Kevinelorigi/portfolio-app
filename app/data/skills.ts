import React from '@/app/svg/logo-react';
import Node from '@/app/svg/logo-nodejs';
import Js from '@/app/svg/logo-js';
import Tailwind from '@/app/svg/logo-tailwind';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: React
  },
  {
    name: 'Node.js',
    icon: Node
  },
  {
    name: 'JavaScript',
    icon: Js
  },
  {
    name: 'TailwindCSS',
    icon: Tailwind
  }
];
