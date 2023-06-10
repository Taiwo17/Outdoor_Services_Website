import React from 'react'

function ProjectDetails({
  title,
  location,
  content,
  contentType,
  duration,
  img,
}) {
  return (
    <div className='flex flex-col-reverse gap-8  lg:flex-row lg:items-center'>
      <div className='flex flex-col gap-6 lg:w-[576px]'>
        <h1 className='font-sora font-normal text-[30px] text-menu-bg md:text-[45px] lg:leading-[64px] lg:text-[56px]'>
          {title}
        </h1>
        {location ? (
          <p className='font-sora font-light text-base leading-[40px] text-[#807B84] lg:text-[20px]'>
            {location}
          </p>
        ) : null}
        <p className='font-sora font-light text-base leading-[30px] text-greyish-primary lg:leading-[40px] lg:text-[24px]'>
          {content}
        </p>
        {contentType && duration ? (
          <p className='font-sora font-light text-sm leading-[20px] text-[#807B84] lg:text-base lg:leading-40'>
            {contentType} <span>|</span> {duration}
          </p>
        ) : null}
      </div>
      <div>
        <img className='object-cover w-full' src={img} alt='Project Details' />
      </div>
    </div>
  )
}

export default ProjectDetails
