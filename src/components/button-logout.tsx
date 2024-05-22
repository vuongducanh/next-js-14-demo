'use client'

import authApiRequest from '@/apiRequests/auth'
import { Button } from '@/components/ui/button'
import { handleErrorApi } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ButtonLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer()
      router.push('/')
      router.refresh()
    } catch (error) {
      handleErrorApi({
        error
      })
    }
  }
  return (
    <span onClick={handleLogout}>
      Đăng xuất
    </span>
  )
}

export default ButtonLogout
