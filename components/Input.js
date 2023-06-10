import React from 'react'

function Input({ type, name, id, placeholder }) {
  return (
    <>
      <input
        className='h-[56px] p-4 bg-white  mb-4 border-[#0033341a] outline-none rounded-lg w-full lg:mb-0 lg:w-[300px]'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
