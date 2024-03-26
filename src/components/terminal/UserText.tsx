interface UserTextProps {
  command: string
}
export function UserText({ command }: UserTextProps) {
  return (
    <div className='flex items-center gap-2'>
      <p className='text-[10px] text-green-400'>rojahno@portfolio</p>
      <p className='text-[10px] text-blue-300'>~</p>
      <p className='text-[10px] text-yellow-200'>{command}</p>
    </div>
  )
}
