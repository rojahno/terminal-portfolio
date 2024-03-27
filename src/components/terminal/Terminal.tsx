'use client'
import React, { useEffect, useState } from 'react'
import { Tab } from './Tab'
import { Circle } from './Circle'
import { TerminalText } from './TerminalText'
import { PathBar } from './PathBar'
import { UserText } from './UserText'
import { UserInput } from './UserInput'
import { Commands } from './Commands'
import { handleCommand } from '@/utils/CommandHelper'

interface TerminalProps {
  children?: React.ReactNode
}

export function Terminal({ children }: TerminalProps) {
  return (
    <div className='min-w-[500px]  rounded-md'>
      <Tab tabText='Rojahno@portfolio'>
        <Circle color={'bg-red-500'} />
        <Circle color={'bg-yellow-500'} />
        <Circle color={'bg-green-500'} />
      </Tab>
      <Screen>{children}</Screen>
    </div>
  )
}

interface ScreenProps {
  children?: React.ReactNode
}

function Screen({ children }: ScreenProps) {
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [history, setHistory] = useState<React.ReactNode[]>([
    <TerminalText key={'first terminal text'}>
      Today is, {new Date().toDateString()}
    </TerminalText>,
    <Welcome key={'welcome'} />,
    <PathBar key={'pathbar'} command='commands' />,
    <UserText key={'useText'} command='commands' />,
    <Commands key={'commands'} />,
  ])

  useEffect(() => {
    inputRef.current?.scrollIntoView()
  }),
    [history]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCommandHistory([...commandHistory, command])
    setIndex(commandHistory.length)
    setCommand('')
    handleCommand(history, setHistory, command)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
      setCommand(commandHistory[index])
      if (index === 0) return
      setIndex(index - 1)
    } else if (e.key === 'ArrowDown') {
      if (index >= commandHistory.length - 1) {
        setCommand('')
        return
      }
      setCommand(commandHistory[index + 1])
      setIndex(index + 1)
    }
  }

  return (
    <div
      className={
        'bg-black min-h-[350px] max-h-[350px] max-w-[500px] rounded-b-md p-2 overflow-scroll flex flex-col gap-1 bg-opacity-50'
      }>
      {history.map((item, index) => (
        <React.Fragment key={'history-' + index}>{item}</React.Fragment>
      ))}
      <form onSubmit={handleSubmit}>
        <PathBar />
        <UserInput
          setInput={setCommand}
          text={command}
          onKeyPress={handleKeyDown}
        />
      </form>
      <div ref={inputRef}></div>
    </div>
  )
}

function Welcome() {
  return (
    <div>
      <h1 className=' text-4xl font-bold uppercase'>Welcome!</h1>
    </div>
  )
}
