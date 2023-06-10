import Link from 'next/link'
import React from 'react'

function SliderCard({ img, title, desc, links }) {
  return (
    <div className='border bg-contact-color rounded-lg'>
      <div className=''>
        <img
          className='rounded-t-lg w-full object-cover lg:w-[779px] lg:h-[515.75px] '
          src={img}
          alt='Naturalistic Back Garden'
        />
      </div>
      <div className='p-[32.23px]'>
        <h3 className='font-sora font-semibold text-[18px] leading-43 text-darkish-green lg:text-[24px]'>
          {title}
        </h3>
        <div className='flex items-center justify-between'>
          <p className='font-sora font-normal text-base leading-32 text-darkish-green lg:text-[21.4897px]'>
            {desc}
          </p>
          <p className='font-sora font-normal text-base leading-32 text-darkish-green underline lg:font-semibold lg:text-[21.4897px]'>
            <Link href={links}>See work</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SliderCard
