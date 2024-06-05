import { cookies } from "next/headers";
import { ChatLayout } from '@/components/chat/chat-layout'
import React from 'react'

const MessagePage = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="flex h-[calc(100dvh-65px)] flex-col items-center justify-center gap-4">
      <div className="z-10 border rounded-lg w-full h-full text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
    </div>
  )
}

export default MessagePage
