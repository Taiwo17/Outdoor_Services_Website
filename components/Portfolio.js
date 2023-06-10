import Link from 'next/link'
import React from 'react'
import StylesSheet from '../styles'

const PortfolioItem = ({ bgImage, title, location, imgLink }) => {
  return (
    <div
      className={`group h-96 flex flex-col justify-end rounded-lg`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-[#b5dc58b3] p-6 rounded-b-lg opacity-0 group-hover:opacity-100 group-hover:ease-in-out duration-700'>
        <div className='flex flex-col gap-2'>
          <h3 className={StylesSheet.Portfolio.imgHeading}>{title}</h3>
          <div className='flex flex-row justify-between gap-4 flex-wrap'>
            <p className={StylesSheet.Portfolio.imgContent}>{location}</p>
            <Link href='/' className={StylesSheet.Portfolio.imgLink}>
              {imgLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Portfolio({ title, imgOne, imgTwo, imgThree, imgFour }) {
  return (
    <>
      <h2 className='relative font-sora font-semibold mb-4 text-[24px] leading-[48px] text-black lg:mb-8 lg:text-[32px]'>
        {title}
      </h2>
      <div className='relative grid grid-cols-1 gap-8 mb-8 md:grid-cols-2'>
        <PortfolioItem
          title={'Outdoor Yard Expansion'}
          location={'Avon Berlin, Connecticut'}
          imgLink={' Click to See'}
          // bgImage={imgOne}
          bgImage={'/images/portfolio_images/portfolio-shot.png'}
          // bgImage={imgOne}
        />
        <PortfolioItem
          title={'Outdoor Yard Expansion'}
          location={'Avon Berlin, Connecticut'}
          imgLink={' Click to See'}
          bgImage={'/images/portfolio_images/retaining_wall_two.png'}
          // bgImage={imgTwo}
        />
        <PortfolioItem
          title={'Outdoor Yard Expansion'}
          location={'Avon Berlin, Connecticut'}
          imgLink={' Click to See'}
          bgImage={'/images/portfolio_images/portfolio_shot2.png'}
          // bgImage={imgThree}
        />
        <PortfolioItem
          title={'Outdoor Yard Expansion'}
          location={'Avon Berlin, Connecticut'}
          imgLink={' Click to See'}
          bgImage={'/images/portfolio_images/portfolio_shot3.png'}
        />
      </div>
      {/* <div className='grid grid-cols-1 gap-8 mb-8 md:grid-cols-2'>
        <div className='relative'>
          <div className='relative'>
            <img
              className='object-cover hover:opacity-100 hover:cursor-pointer'
              src={imgThree}
              alt='Portfolio'
            />
          </div>
          <div
            className={`absolute top-[75%] left-0 right-0 bottom-0 ${StylesSheet.Portfolio.imgHover}`}
          >
            <div className='flex flex-col gap-2'>
              <h3 className={StylesSheet.Portfolio.imgHeading}>
                Outdoor Yard Expansion
              </h3>
              <div className='flex flex-row justify-between gap-4'>
                <p className={StylesSheet.Portfolio.imgContent}>
                  Avon Berlin, Connecticut
                </p>
                <Link href='/' className={StylesSheet.Portfolio.imgLink}>
                  Click to See
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='relative'>
            <img
              className='object-cover hover:opacity-100 hover:cursor-pointer'
              src={imgFour}
              alt='Portfolio'
            />
          </div>
          <div
            className={`absolute top-[75%] left-0 right-0 bottom-0 ${StylesSheet.Portfolio.imgHover}`}
          >
            <div className='flex flex-col gap-2'>
              <h3 className={StylesSheet.Portfolio.imgHeading}>
                Outdoor Yard Expansion
              </h3>
              <div className='flex flex-row justify-between gap-4'>
                <p className={StylesSheet.Portfolio.imgContent}>
                  Avon Berlin, Connecticut
                </p>
                <Link href='/' className={StylesSheet.Portfolio.imgLink}>
                  Click to See
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Portfolio
