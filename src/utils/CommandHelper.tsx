import React from 'react'
import { Commands } from '@/components/terminal/Commands'
import { UserText } from '@/components/terminal/UserText'
import { About } from '@/components/about/About'
import { TerminaErrorText } from '@/components/terminal/TerminalErrorText'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/skills'
import { PathBar } from '@/components/terminal/PathBar'

export const handleCommand = (
  history: React.ReactNode[],
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  text: string
) => {
  switch (text) {
    case 'clear':
      clear(setHistory)
      break
    case 'commands':
      listCommands(setHistory, history, text)
      break
    case 'about':
      about(setHistory, history, text)
      break
    case 'projects':
      projects(setHistory, history, text)
      break

    case 'skills':
      skills(setHistory, history, text)
      break

    default:
      setHistory([
        ...history,
        <PathBar command={text} />,
        <UserText command={text} />,
        <TerminaErrorText command={text} />,
      ])
  }
}
function clear(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>
) {
  setHistory([])
}

function listCommands(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar command={text} />,
    <UserText command={text} />,
    <Commands />,
  ])
}

function about(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar command={text} />,
    <UserText command={text} />,
    <About />,
  ])
}

function projects(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar command={text} />,
    <UserText command={text} />,
    <Projects />,
  ])
}

function skills(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar command={text} />,
    <UserText command={text} />,
    <Skills />,
  ])
}
