import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-4 px-2'>
        <div className="w-[320px] h-[87vh] backdrop-blur-sm bg-white/30 overflow-y-auto">
            <Sidebar/>
        </div>
        <div className="h-[87vh] overflow-y-auto scrollbar overflow-x-hidden w-full backdrop-blur-sm bg-white/30 p-3 rounded-md">
        {children}
        </div>
    </div>
  )
}

export default layout