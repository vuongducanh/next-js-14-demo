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
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <div className='absolute top-0 left-0 right-0 z-10'>
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
            <nav className='items-center space-x-4 lg:space-x-6 hidden md:flex'>
              <Link href={'/login'} className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>Đăng nhập</Link>
              <Link href={'/register'} className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>Đăng ký</Link>
            </nav>
            <div className='block md:hidden'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <Menu className='w-5 h-5 text-foreground' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={'/'}>Trang chủ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={'/login'}>Đăng nhập</Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={'/register'}>Đăng ký</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      {/* <ButtonLogout /> */}
    </div>
  )
}
