'use client'

import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

export default function Home() {
  const { data: session } = authClient.useSession()

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/login')
        },
        onError: (error) => {
          toast.error(error.error.message)
        },
      },
    })
  }

  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold text-red-500">Hello World</h1>
      <Button>Click me</Button>
      <ThemeModeToggle />

      {session ? (
        <div>
          <div>{session.user.name}</div>
          <Button onClick={signOut}>Logout</Button>
        </div>
      ) : (
        <Button>Login in </Button>
      )}
    </div>
  )
}
