'use client'
import React, { useEffect, useState } from 'react'
import { Tab } from './Tab'
import { Circle } from './Circle'
import { TerminalText } from './TerminalText'
import { PathBar } from './PathBar'
import { UserInput } from './UserInput'
import { handleCommand } from '@/utils/CommandHelper'
import { Typewriter } from '@/utils/Typewriter'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [commandIndex, setCommandIndex] = useState(0)
  const startText = [
    <TerminalText key={'terminalText'}>
      <Typewriter text={'Today is, ' + new Date().toDateString()} delay={100} />
    </TerminalText>,

    <Welcome key={'welcome'}>
      <Typewriter text='Welcome' delay={100} />
    </Welcome>,
    <TerminalText key={'terminalText2'}>
      <Typewriter text='Type commands to see available commands.' delay={50} />
    </TerminalText>,
    <></>,
  ]

  const [history, setHistory] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const delay = 3000
    if (currentIndex < startText.length) {
      const timeout = setTimeout(() => {
        setHistory((prevHistory) => [...prevHistory, startText[currentIndex]])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  useEffect(() => {
    // Type the command
    const delay = 100
    const text = 'commands'

    if (commandIndex < text.length && currentIndex === startText.length) {
      const timeout = setTimeout(() => {
        setCommand((prevCommand) => prevCommand + text[commandIndex])
        setCommandIndex((prevIndex) => prevIndex + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (commandIndex === text.length) {
      handleCommand(history, setHistory, text)
      setCommand('')
    }
  }, [commandIndex, currentIndex])

  useEffect(() => {
    inputRef.current?.scrollIntoView()
  }),
    [history]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCommandHistory([...commandHistory, command])
    setIndex(commandHistory.length)
    handleCommand(history, setHistory, command)
    setCommand('')
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
    onClick={() => inputRef.current?.focus()}
      className={
        'bg-black min-h-[350px] max-h-[350px] max-w-[500px] rounded-b-md p-2 overflow-auto flex flex-col gap-1 bg-opacity-50 scrollbar'
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
          inputRef={inputRef}
          
        />
      </form>
    </div>
  )
}
interface WelcomeProps {
  children?: React.ReactNode
}

function Welcome({ children }: WelcomeProps) {
  return (
    <div>
      <h1 className=' text-4xl font-bold uppercase'>{children}</h1>
    </div>
  )
}
