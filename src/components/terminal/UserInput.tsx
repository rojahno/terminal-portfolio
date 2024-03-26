import { on } from 'events'

interface UserInputProps {
  setInput: (input: string) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  text: string
}

export function UserInput({ setInput, onKeyPress, text }: UserInputProps) {
  return (
    <div className='flex items-center gap-2'>
      <p className='text-[10px] text-green-400'>rojahno@portfolio</p>
      <p className='text-[10px] text-blue-300'>~</p>
      <input
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={text}
        className='text-[10px] text-yellow-white bg-transparent placeholder-black outline-none placeholder:text-white placeholder:opacity-50 w-full h-8'
        placeholder='Try typing about, projects, skills...'
        onKeyDown={(e) => {
          onKeyPress && onKeyPress(e)
        }}
        autoFocus
      />
    </div>
  )
}
