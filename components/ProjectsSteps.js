import React from 'react'

function ProjectsSteps({ title, content }) {
  return (
    <div className='grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2'>
      <div className='flex flex-col gap-4'>
        <h3 className='font-sora font-semibold text-base leading-32 text-greyish-primary md:text-[24px]'>
          {title}
        </h3>
        <div className='border border-b border-menu-bg'></div>
      </div>
      <div className='lg:w-[576px]'>
        <p className='font-sora font-light text-base leading-[30px] text-greyish-primary lg:text-[24px] lg:leading-40'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default ProjectsSteps
