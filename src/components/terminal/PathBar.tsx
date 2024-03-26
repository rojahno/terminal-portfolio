import { BiGitBranch } from 'react-icons/bi'
import { GiClover, GiOpenFolder } from 'react-icons/gi'
import { Triangle } from './Triangel'

interface PathBarProps {
  command?: string
}

export function PathBar({ command }: PathBarProps) {
  return (
    <div className='flex text-[10px] h-[20px]'>
      <div className='pl-1 pr-1 bg-green-600 flex items-center justify-end '>
        <div className='pl-2 flex items-center gap-1'>
          <GiClover />
          <p>Rojahno</p>
        </div>
      </div>
      <div className='pr-1 bg-blue-300 flex items-center justify-start p-0 overflow-hidden text-black'>
        <Triangle color='bg-green-600' />
        <div className='pl-2 flex items-center gap-1'>
          <GiOpenFolder />
          <p>/portfolio</p>
        </div>
      </div>

      {command ? (
        <>
          <div className='pr-1 bg-yellow-200 flex items-center justify-start p-0 overflow-hidden text-black'>
            <Triangle color='bg-blue-300' />
            <div className='pl-2 flex items-center gap-1'>
              <BiGitBranch />
              <p>{command}</p>
            </div>
          </div>

          <div className='pr-1 flex items-center justify-start p-0 overflow-hidden '>
            <Triangle color='bg-yellow-200' />
          </div>
        </>
      ) : (
        <div className='pr-1 flex items-center justify-start p-0 overflow-hidden '>
          <Triangle color='bg-blue-300' />
        </div>
      )}
    </div>
  )
}
