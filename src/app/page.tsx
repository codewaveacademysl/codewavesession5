'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('')
  const [res, setRes] = useState(null)

  const submitForm = async (e:any)=>{
    e.preventDefault()
    
    const formResponse = await fetch('https://ssypw4pnt22jcus3zbxoyyltru0xtgjr.lambda-url.us-east-1.on.aws',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })

    const data = await formResponse.json()  
    setRes(data)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form onSubmit={submitForm} className='flex flex-col gap-4'>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} className='border p-2 rounded'/>
        <button type="submit" className='bg-blue-500 rounded p-2'>Click Me</button>
      </form>
      {
        res && (
          <div>
            Response :
            <pre>
              {JSON.stringify(res, null, 2)}
              </pre>
            </div>
        )
      }
    </div>
  );
}
