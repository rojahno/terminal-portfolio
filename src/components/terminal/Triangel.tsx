import { cn } from '@/utils/cn'

interface TriangleProps {
  color?: string
}
export function Triangle({ color }: TriangleProps) {
  return (
    <div className='w-8 h-8 overflow-hidden rotate-90 flex justify-center'>
      <div
        className={cn(
          'w-12 h-16 bg-sky-500 [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]',
          color
        )}></div>
    </div>
  )
}
