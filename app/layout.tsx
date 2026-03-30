import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  )
}