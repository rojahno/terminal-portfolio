import Link from 'next/link'
import { FaCode } from 'react-icons/fa6'

export const Projects = () => {
  const projects = [
    {
      name: 'Portfolio',
      description: 'This is my portfolio website.',
      link: 'https://rojahno.github.io/Portfolio/',
    },
    {
      name: 'Trello Harvest Helper',
      description:
        'The Trello Harvest Extension is a Chrome extension designed to enhance your Trello experience by providing additional Harvest data on your Trello boards.',
      link: 'https://chromewebstore.google.com/detail/trello-harvest-helper/inkdlohhbjdneiiicjenbknlibcpapjg?hl=no&authuser=2',
    },
    {
      name: 'React Component Library',
      description:
        'A react component library. This repository is a hobby project where I have created some commonly used react components. The goal of the project was to learn more about React and to create reusable components that I could use for the future.',
      link: 'https://rojahno.github.io/Rojos/#/',
    },
    {
      name: 'A-Start Pathfinding',
      description:
        'An A* pathfinding algorithm. The algorithm navigates the Studentersamfund to find your friend in one of the rooms.',
      link: 'https://github.com/rojahno/a-star-pathfinding',
    },
  ]
  return (
    <div className='flex flex-col gap-4 '>
      {projects.map((project, index) => (
        <Link
          className='w-full mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl relative'
          target='_blank'
          href={project.link}
          key={'skills-link' + index}>
          <div className='md:flex' key={''}>
            <div className='md:flex-shrink-0'></div>
            <div className='p-3'>
              <div className='uppercase tracking-wide text-xs text-indigo-300 font-semibold'>
                Project
              </div>
              <p className='text-[13px]'> {project.name}</p>

              <div className='grid w-full'>
                <p className='mt-2 text-xs text-gray-200'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
