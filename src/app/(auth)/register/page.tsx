import RegisterForm from "@/app/(auth)/register/register-form"
import { baseOpenGraph } from "@/app/shared-metadata"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    template: '%s | Đăng ký tài khoản',
    default: 'Đăng ký tài khoản'
  },
  description: 'Đăng ký tài khoản user',
  openGraph: baseOpenGraph
}

const RegisterPage = () => {
  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Đăng ký</h1>
      </div>
      <div className="grid gap-7">
        <RegisterForm />
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'><span className='w-full border-t'></span></div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>NẾU BẠN ĐÃ CÓ TÀI KHOẢN</span>
          </div>
        </div>
        <Link href={'/login'}>
          <Button variant={"outline"} className='w-full'>Đăng nhập</Button>
        </Link>
      </div>
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Bạn quên mật khẩu? &nbsp;
        <Link href={'/forgot-password'} className='underline underline-offset-4 hover:text-primary'>Lấy lại mật khẩu</Link>
      </p>
    </div>
  )
}

export default RegisterPage