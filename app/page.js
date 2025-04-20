'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/navbar'; 

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // tidak perlu komponen navbar di sini
}

<navbar/>
