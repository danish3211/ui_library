import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white text-center font-medium text-3xl p-5 font-mono '>
      <Link href="/" className='backdrop-blur-sm bg-white/30 rounded-md p-2'>
      Danish&apos;s Ui Components
      </Link>
    </div>
  )
}

export default Navbar