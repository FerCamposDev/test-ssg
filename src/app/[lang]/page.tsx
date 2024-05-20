import { dictionary } from '@/lang';
import React from 'react'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

type Props = {
  params: {
    lang: 'es' | 'en';
  }
}

const LangPage = ({ params }: Props) => {
  return (
    <div>
      <h1 className='bg-blue-700'>
        {params.lang} Page
      </h1>
      <p className='text-red-500'>
        {dictionary[params.lang].text}
      </p>
    </div>
  )
}

export default LangPage