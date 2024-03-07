"use client"
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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
