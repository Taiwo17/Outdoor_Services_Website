import React from 'react'

function HeroPageSection({ title, content }) {
  return (
    <div className="bg-[url('/images/hero_page_section.png')] bg-cover bg-center w-full h-[564px] px-8 md:px-12 lg:px-32">
      <div className='pt-[134px] flex flex-col gap-8 md:w-[576px]'>
        <h1 className='text-contact-color font-sora font-normal leading-[60px] text-[40px] md:text-[50px] lg:leading-[80px] lg:text-[56px]'>
          {title}
        </h1>
        <p className='text-contact-color font-sora font-light text-base leading-[30px] lg:text-[24px] lg:leading-40'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default HeroPageSection
