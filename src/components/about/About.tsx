'use client'
import './about.css'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/icons/github'
import { LinkedInIcon } from '@/icons/linkedin'
import Link from 'next/link'
import profilePicture from './../../../public/profile_picture.jpeg'

const profileText =
  'Hi there, I am a Software developer who currently works at Stacc. I am passionate about technology and love to learn new things.'

export const About = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const name = 'ANDREAS'
  const nameRef = useRef<HTMLHeadingElement>(null)
  const [nameText, setNameText] = useState(name)

  useEffect(() => {
    let iteration = 0
    function scrambledName() {
      let newName = nameText
        .split('')
        .map((_letter, index) => {
          if (index < iteration) {
            return name[index]
          }
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join('')
      iteration += 1 / 4
      return newName
    }

    function beginScrambling() {
      let interval = setInterval(() => {
        if (nameRef.current) {
          let newName = scrambledName()
          if (iteration === name.length) {
            clearInterval(interval)
          }
          setNameText(newName)
        }
      }, 30)
      return () => clearInterval(interval)
    }

    let beginInterval = setInterval(() => {
      beginScrambling()
      clearInterval(beginInterval)
    }, 2000)
    return () => clearInterval(beginInterval)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='p-2 w-full flex flex-col gap-2'>
      <div className=''>
        <div id='img-container'>
          <Image
            id='profile-image'
            width={6}
            height={6}
            src={profilePicture}
            alt=''
          />
          <h2 id='profile-name' ref={nameRef}>
            HELLO,
            <br />
            IM {nameText}
          </h2>
        </div>
        <div className='flex items-center'>
          <p className='text-xs p-2 '>{profileText}</p>
          <div className='flex justify-end gap-2 p-2 mr-4'>
            <Link
              href='https://www.linkedin.com/in/andreas-rojahn-sunde-64024521a/'
              target='_blank'
              rel='noreferrer'>
              <LinkedInIcon />
            </Link>
            <Link
              href='https://github.com/rojahno'
              target='_blank'
              rel='noreferrer'>
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
