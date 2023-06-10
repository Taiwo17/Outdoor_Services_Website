import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className="bg-[url('/images/hero_view.png')] bg-cover bg-center w-full h-[725px] px-8 md:px-12 lg:px-32">
      <div className='pt-[100px] flex flex-col gap-6 md:w-[580px]'>
        <h1 className='font-sora font-normal text-white leading-[60px] text-[44px] md:text-[60px] md:leading-[70px] lg:text-[72px] lg:leading-80 '>
          We Create Your Dream Outdoor Living Space
        </h1>
        <p className='font-sora font-light text-base leading-[25px]  text-white md:text-[24px] md:leading-40'>
          We are expert in revitalising your outdoor Space and give it a breath
          of fresh beauty with our magical touch
        </p>
        <ul className='flex flex-row items-center gap-[26px]'>
          <Link href={'/contact-us'}>
            <li className='border bg-green-primary border-green-primary rounded-lg  px-8 py-4 font-sora font-semibold text-sm leading-24 text-greyish-primary md:text-base'>
              Book a Consultation
            </li>
          </Link>
          <Link href={'/work'}>
            <li className='hidden md:flex md:border md:border-green-primary md:rounded-lg md:px-8 md:py-4 md:font-sora md:font-semibold md:text-base md:text-green-primary'>
              View Portfolio
            </li>
          </Link>
        </ul>
        <p className='font-sora font-normal text-sm leading-24 md:text-base text-green-primary'>
          150+ Clients served already and counting
        </p>
      </div>
    </div>
  )
}

export default HeroSection
