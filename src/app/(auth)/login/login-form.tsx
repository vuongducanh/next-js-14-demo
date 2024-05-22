"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema"
import { useRouter } from "next/navigation"
import authApiRequest from "@/apiRequests/auth"
import { toast } from "@/components/ui/use-toast"
import { handleErrorApi } from "@/lib/utils"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { InputLock } from "@/components/ui/input-lock"
import { useAppContext } from "@/app/app-provider"

const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setUser } = useAppContext()

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  async function onSubmit(values: LoginBodyType) {
    try {
      const result = await authApiRequest.login(values)
      toast({
        description: result.payload.message
      })

      await authApiRequest.auth({
        sessionToken: result.payload.data.token,
        expiresAt: result.payload.data.expiresAt
      })

      setUser(result.payload.data.account)
      router.push('/')
      router.refresh()
    } catch (error) {
      handleErrorApi({
        error,
        setError: form.setError
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
        noValidate
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='name@example.com' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <InputLock {...field}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>
          Đăng nhập
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm