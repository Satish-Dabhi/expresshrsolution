'use client'

import LogoReveal from "./home/LogoReveal"


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LogoReveal>{children}</LogoReveal>
}
