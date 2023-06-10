import React from 'react'

function Card({ title, desc }) {
  return (
    <div className='bg-menu-bg rounded-2xl p-6'>
      <div>
        <svg
          className='mb-6'
          width='49'
          height='50'
          viewBox='0 0 49 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_279_768)'>
            <rect
              opacity='0.6'
              y='0.965576'
              width='49'
              height='49'
              fill='#003334'
            />
            <path
              d='M34 23H16M34 25.5V21.8C34 20.12 34 19.28 33.673 18.638C33.3854 18.0735 32.9265 17.6146 32.362 17.327C31.72 17 30.88 17 29.2 17H20.8C19.12 17 18.28 17 17.638 17.327C17.0735 17.6146 16.6146 18.0735 16.327 18.638C16 19.28 16 20.12 16 21.8V30.2C16 31.88 16 32.72 16.327 33.362C16.6146 33.9265 17.0735 34.3854 17.638 34.673C18.28 35 19.12 35 20.8 35H25M29 15V19M21 15V19M27.5 32L29.5 34L34 29.5'
              stroke='#B5DC58'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_279_768'>
              <rect y='0.965576' width='49' height='49' rx='8' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <div>
          <h3 className='font-sora font-semibold text-base text-green-primary leading-32 mb-[11px] lg:text-[24px]'>
            {title}
          </h3>
          <p className='font-sora font-normal text-sm leading-24 text-white lg:text-base'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
