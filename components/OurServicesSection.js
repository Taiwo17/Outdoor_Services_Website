import Link from 'next/link'
import React from 'react'

function OurServicesSection({ img, title, content, learn, link, reverse }) {
  return (
    <div
      className={`flex flex-col gap-4 lg:flex-row lg:gap-[133px] lg:justify-between  ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className='shrink-0'>
        <img
          className='object-cover w-full lg:w-[576px] lg:h-[474px]'
          src={img}
          alt=''
        />
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        <h3 className='font-sora font-normal text-[30px] text-menu-bg md:text-[40px] lg:leading-[56px]'>
          {title}
        </h3>
        <p className='font-sora font-light text-base leading-[30px] text-[#3E3C40] md:text-[24px] lg:leading-[40px] '>
          {content}
        </p>
        <Link href={link}>
          <p className='font-sora font-semibold text-base leading-40 underline text-menu-bg md:text-[24px]'>
            {learn}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default OurServicesSection
