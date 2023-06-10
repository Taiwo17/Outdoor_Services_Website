import React from 'react'

function ProjectImgSection({ img, title }) {
  return (
    <div className='rounded-2xl bg-[#FBF2EF]'>
      <div>
        <img
          className='rounded-tl-2xl rounded-tr-2xl w-full lg:w-[576px] lg:h-[388px]'
          src={img}
          alt=''
        />
      </div>
      <div className='px-6 py-4'>
        <p className='font-sora font-normal text-base leading-32 text-darkish-green lg:text-[24px]'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default ProjectImgSection
