'use client'

import { useAppContext } from '@/app/app-provider'
import React from 'react'

export const AvatarName = () => {
  const { user } = useAppContext()
  const name = user ? user.name.substring(0, 2) : ''

  return (
    <span className='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8'>
      <span className='flex h-full w-full items-center justify-center rounded-full bg-muted capitalize'>
        {name}
      </span>
    </span>
  )
}
