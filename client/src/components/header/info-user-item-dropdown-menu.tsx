'use client'

import { useAppContext } from '@/app/app-provider'
import React from 'react'

export const InfoUserItemDropdownMenu = () => {
  const { user } = useAppContext()

  const name = user ? user.name : undefined
  const email = user ? user.email : undefined

  return (
    <div className='flex flex-col space-y-1'>
      <p className='text-sm font-medium leading-none'>{name}</p>
      <p className='text-xs leading-none text-muted-foreground'>{email}</p>
    </div>
  )
}
