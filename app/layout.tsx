export const metadata = {
  title: 'Zozo Land',
  description: 'Juste un serveur de Zozo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
