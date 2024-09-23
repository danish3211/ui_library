import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-4 px-2'>
        <div className="w-[320px]">
            <Sidebar/>
        </div>
        <div className="h-[87vh] w-full backdrop-blur-sm bg-white/30 p-3 rounded-md">
        {children}
        </div>
    </div>
  )
}

export default layout