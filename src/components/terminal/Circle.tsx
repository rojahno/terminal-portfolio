import { cn } from '@/utils/cn'
import React from 'react'

interface CircleProps {
  color?: string
}
export function Circle({ color }: CircleProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-red-500 h-3 w-3 hover:brightness-125 cursor-pointer',
        color
      )}></div>
  )
}
