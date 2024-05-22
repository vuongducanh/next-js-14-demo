import accountApiRequest from '@/apiRequests/account'
import CommonHeader from '@/components/common-header'
import { cn } from '@/lib/utils'
import { cookies } from 'next/headers'

export default async function Header() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  const result = await accountApiRequest.me(sessionToken?.value ?? '')
  const isLogin = !!result?.payload?.data

  return (
    <div className={cn(
      isLogin && "border-b",
      !isLogin && "absolute top-0 left-0 right-0 z-10"
    )}>
      <CommonHeader isLogin={isLogin} />
    </div>
  )
}
