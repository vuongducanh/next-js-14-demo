import LoginForm from '@/app/(auth)/login/login-form'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { baseOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: {
    template: '%s | Đăng nhập',
    default: 'Đăng nhập'
  },
  description: 'Đăng nhập',
  openGraph: baseOpenGraph
}


export default function Login() {
  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Đăng nhập 1</h1>
        <h1 className='text-2xl font-semibold tracking-tight'>Đăng nhập 222</h1>
      </div>
      <div className="grid gap-7">
        <LoginForm />
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'><span className='w-full border-t'></span></div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>Nếu bạn chưa có tài khoản</span>
          </div>
        </div>
        <Link href={'/register'}>
          <Button variant={"outline"} className='w-full'>Đăng ký</Button>
        </Link>
      </div>
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Bạn quên mật khẩu? &nbsp;
        <Link href={'/forgot-password'} className='underline underline-offset-4 hover:text-primary'>Lấy lại mật khẩu</Link>
      </p>
    </div>
  )
}
