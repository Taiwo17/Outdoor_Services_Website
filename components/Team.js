import React from 'react'

function Team({ img, name, position }) {
  return (
    <div>
      <div className='shrink-0'>
        <img className='w-full object-cover mb-4' src={img} alt='John Doe' />
      </div>
      <div>
        <h3 className='font-sora font-normal text-base leading-32 text-darkish-green lg:text-[24px]'>
          {name}
        </h3>
        <p className='font-sora font-light text-sm leading-24 text-menu-bg lg:text-base'>
          {position}
        </p>
      </div>
    </div>
  )
}

export default Team
