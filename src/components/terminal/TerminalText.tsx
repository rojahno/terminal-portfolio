interface TerminalTextProps {
  children?: React.ReactNode
}
export function TerminalText({ children }: TerminalTextProps) {
  return <p className='text-[12px]'>{children}</p>
}
