import React from 'react'
import logo from '/public/image/logo.png'

const Colloquy = () => {
  return (
    <div>
      <div className='p-30 w-4xl'>
        <img className='w-80 m-auto' src={logo} alt="logo" />
        <h5 className='text-3xl font-bold text-white mt-10'>Welcome to. . . . .</h5>
        <h1 className='reletive left-0 text-6xl font-bold text-white mt-5'>COLLO<span className='text-orange-600'>QU</span>E</h1>
        <p className='w-xl text-2xl font-semibold text-white mt-5 leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius?</p>
      </div>
    </div>
  )
}

export default Colloquy