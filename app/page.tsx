"use client"
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth')
    },
  })
  useEffect(() => {
      const fetch =async () => {
        //test for integrating prisma and supabase
        const users = await axios.get('/api/users');
      }
      fetch()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      First Page
    </main>
  );
}
