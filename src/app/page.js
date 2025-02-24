'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Redirect otomatis ke /home
  }, [router]);

  return null; // Tidak menampilkan konten apa pun
}
