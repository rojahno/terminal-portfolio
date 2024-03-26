interface TerminaErrorTextProps {
  command: string
}

export const TerminaErrorText = ({ command }: TerminaErrorTextProps) => {
  return (
    <div>
      <p className='text-red-500 text-[10px]'>
        Error: Command "{command}" not found.
      </p>
      <p className='text-red-500 text-[10px]'>
        Type "commands" to see a list of available commands.
      </p>
    </div>
  )
}
