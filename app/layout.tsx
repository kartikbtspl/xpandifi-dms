import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'xpandifi-DMS',
  description: 'OEM and DMS dashboards with role-based sidebar'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
