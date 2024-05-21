'use client'

import { useClientLang } from '@/hooks/useClientLang';
import { dictionary } from '@/lang';

export default function NotFound() {
  const { lang, homePath } = useClientLang();
  const wordings = dictionary[lang];
  
  return (
    <div style={{ minHeight: '550px' }} className="container-fluid my-10 h-full flex justify-center items-center">
      <h2 className="text-4xl font-bold">{wordings[404].title}</h2>
    </div>
  )
}