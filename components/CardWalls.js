import React from 'react'

function CardWalls({ title, img }) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='shrink-0'>
        <img className='w-full' src={img} alt='' />
      </div>
      <div>
        <p className='font-sora font-normal text-base leading-32 text-greyish-primary md:text-[24px]'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default CardWalls
