import React from 'react'

function CardTestimony({ desc, img, name, location, starIcon, alt, source }) {
  return (
    <div className='bg-green-primary rounded-2xl p-6'>
      <div>
        <div className='mb-6'>
          <p className='font-sora font-normal text-sm leading-24 text-greyish-primary w-[325.33px] md:w-auto lg:text-base lg:w-[325.33px]'>
            {desc}
          </p>
        </div>
        <div className='flex gap-4 w-full'>
          <div>
            <img src={img} alt={alt} />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <div>
              <h3 className='font-sora font-semibold text-sm leading-24 text-greyish-primary lg:text-base'>
                {name}
              </h3>
              <p className='font-sora font-normal text-xs leading-24 text-card-testimony-color  lg:text-sm'>
                {location}
              </p>
            </div>
            <div className='flex items-center justify-between gap-4 w-full'>
              <div className='flex'>
                <img src={starIcon} alt='' />
                <img src={starIcon} alt='' />
                <img src={starIcon} alt='' />
                <img src={starIcon} alt='' />
                <img src={starIcon} alt='' />
              </div>
              <div>
                <p className='font-sora font-semibold text-xs leading-24 text-darkish-green lg:text-sm'>
                  {source}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTestimony
