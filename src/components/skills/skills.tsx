import { FaReact } from 'react-icons/fa6'
import React from 'react'
import {
  SiJavascript,
  SiKubernetes,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si'
import { FaPython } from 'react-icons/fa'

export const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      percentage: 90,
      icon: <SiJavascript />,
    },
    {
      name: 'React',
      percentage: 85,
      icon: <FaReact />,
    },
    {
      name: 'Python',
      percentage: 80,
      icon: <FaPython />,
    },
    {
      name: 'Kubernetes',
      percentage: 50,
      icon: <SiKubernetes />,
    },
    {
      name: 'Tailwindcss',
      percentage: 90,
      icon: <SiTailwindcss />,
    },
    {
      name: 'Express',
      percentage: 80,
      icon: <SiExpress />,
    },
  ]

  return (
    <div>
      {skills.map((skill, index) => (
        <React.Fragment key={'skill-' + index}>
          <div className='flex justify-between mb-2  mr-1 ml-1'>
            <div className='flex gap-2 items-center'>
              {skill.icon && skill.icon}
              <p className='text-[13px]'>{skill.name}</p>
            </div>
            <div className='justify-end text-[13px]'>{skill.percentage}% </div>
          </div>
          <div className='w-full rounded-full h-2.5 mb-4 bg-gray-700'>
            <div
              className='bg-blue-300 h-2.5 rounded-full'
              style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
