import accountApiRequest from '@/apiRequests/account'
import CommonHeader from '@/components/header/common-header'
import { cn } from '@/lib/utils'
import { cookies } from 'next/headers'

type Props = {
  border: boolean
}

export default async function Header(
  { border }: Props,
) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  const result = await accountApiRequest.me(sessionToken?.value ?? '')
  const isLogin = !!result?.payload?.data

  return (
    <div className={cn(
      border && "border-b",
      !border && "absolute top-0 left-0 right-0 z-10"
    )}>
      <CommonHeader isLogin={isLogin} />
    </div>
  )
}
