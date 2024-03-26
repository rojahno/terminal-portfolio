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
        <PathBar key={'pathbar-handler'} command={text} />,
        <UserText key={'usertext-handler'} command={text} />,
        <TerminaErrorText key={'terminalErrorText-handler'} command={text} />,
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
    <PathBar key={'pathbar-list-commands'} command={text} />,
    <UserText key={'usertext-list-commands'} command={text} />,
    <Commands key={'commands-list-commands'} />,
  ])
}

function about(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar key={'about-handler'} command={text} />,
    <UserText key={'user-text-about'} command={text} />,
    <About key={'about-about'} />,
  ])
}

function projects(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar key={'pathbar-projects'} command={text} />,
    <UserText key={'user-text-projects'} command={text} />,
    <Projects key={'projects-projects'} />,
  ])
}

function skills(
  setHistory: React.Dispatch<React.SetStateAction<React.ReactNode[]>>,
  history: React.ReactNode[],
  text: string
) {
  setHistory([
    ...history,
    <PathBar key={'pathBarr-skills'} command={text} />,
    <UserText key={'userText-Skills'} command={text} />,
    <Skills key={'skills-skills'} />,
  ])
}
