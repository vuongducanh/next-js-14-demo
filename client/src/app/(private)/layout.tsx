import Header from "@/components/header/header";
import React from "react";
export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <Header border />
      {children}
    </React.Fragment>
  )
}
