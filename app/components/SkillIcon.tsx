import React from 'react';

interface SkillIconProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

export default function SkillIcon({ icon: Icon, name }: SkillIconProps) {
  return (
    <div className='group relative'>
      <Icon className='size-8' />
      <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
        {name}
      </div>
    </div>
  );
}
