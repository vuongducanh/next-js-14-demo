import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import ButtonLogout from '@/components/header/button-logout'
import { AvatarName } from '@/components/header/avatar-name'
import { InfoUserItemDropdownMenu } from '@/components/header/info-user-item-dropdown-menu'

type Props = {
  isLogin: boolean
}

export default function CommonHeader(
  { isLogin }: Props,
) {

  return (
    <div className='container px-4'>
      <div className='flex h-16 items-center '>
        <Link href={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </Link>
        <nav className='items-center space-x-4 lg:space-x-6 hidden md:flex mx-6'>
          <Link className='text-sm font-medium transition-colors hover:text-primary' href={'/'}>Trang chủ</Link>
        </nav>
        <div className='ml-auto flex items-center space-x-4'>
          <ModeToggle />
          {!isLogin && <nav className='items-center space-x-4 lg:space-x-6 hidden md:flex'>
            <Link href={'/login'} className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>Đăng nhập</Link>
            <Link href={'/register'} className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>Đăng ký</Link>
          </nav>}
          {isLogin && (
            <div className='hidden md:block'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className='rounded-full px-4 py-2 h-8 w-8' size="icon">
                    <AvatarName/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <InfoUserItemDropdownMenu/>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className='p-0'>
                      <Link href={'/me'} className='w-full py-1.5 px-2'>Tài khoản</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='p-0'>
                      <Link href={'/'} className='w-full py-1.5 px-2'>Giỏ hàng</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ButtonLogout />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          <div className='block md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Menu className='w-5 h-5 text-foreground' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {isLogin && <DropdownMenuLabel>
                  <InfoUserItemDropdownMenu/>
                </DropdownMenuLabel>}
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href={'/'}>Trang chủ</Link>
                  </DropdownMenuItem>

                  {isLogin && <DropdownMenuItem className='p-0'>
                    <Link href={'/me'} className='w-full py-1.5 px-2'>Tài khoản</Link>
                  </DropdownMenuItem>}

                  {isLogin && <DropdownMenuItem className='p-0'>
                    <Link href={'/'} className='w-full py-1.5 px-2'>Giỏ hàng</Link>
                  </DropdownMenuItem>}

                  {!isLogin && <DropdownMenuItem>
                    <Link href={'/login'}>Đăng nhập</Link>
                  </DropdownMenuItem>}
                  {!isLogin && <DropdownMenuItem>
                    <Link href={'/register'}>Đăng ký</Link>
                  </DropdownMenuItem>}
                </DropdownMenuGroup>
                {isLogin && <DropdownMenuItem>
                  <ButtonLogout />
                </DropdownMenuItem>}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
