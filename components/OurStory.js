import React from 'react'
import StyleSheet from '../styles'

function OurStory({
  paraOne,
  paraTwo,
  paraThree,
  paraFour,
  paraFive,
  paraSix,
}) {
  return (
    <div className=''>
      <div className='flex flex-col gap-4 lg:gap-8'>
        {paraOne ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraOne}</p>
        ) : null}
        {paraTwo ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraTwo}</p>
        ) : null}
        {paraThree ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraThree}</p>
        ) : null}
        {paraFour ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraFour}</p>
        ) : null}
        {paraFive ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraFive}</p>
        ) : null}
        {paraSix ? (
          <p className={StyleSheet.AboutUs.paragraph}>{paraSix}</p>
        ) : null}
      </div>
    </div>
  )
}

export default OurStory
