import Link from 'next/link'
import React from 'react'
import StyleSheet from '../styles'

function Footer() {
  function getYear() {
    const year = new Date().getFullYear()
    return year
  }
  return (
    <div className='px-8 pb-16 md:px-12 lg:px-32'>
      <div className='flex flex-col pb-8 gap-4 pt-8 lg:flex-row lg:justify-between lg:gap-8 lg:pt-16'>
        <div>
          <h2 className={StyleSheet.FooterContent.headerContent}>Site Map</h2>
          <div className='flex flex-col gap-y-2'>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/'>Home</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/about-us'>About Us</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services'>Our Services</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/work'>Work</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/blog'>Blog</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/contact-us'>Contact Us</Link>
            </p>
          </div>
        </div>
        <div>
          <h2 className={StyleSheet.FooterContent.headerContent}>
            Our Services
          </h2>
          <div className='flex flex-col gap-y-2'>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/retaining-walls'>Retaining Walls </Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/walkaway-design'>Walkway Design</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/patios-design'>Patios Design</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/yard-expansion'>Yard Expansion</Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/stump-griding'>Stump Grinding</Link>
            </p>

            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='/our-services/steps-building'>Steps Building</Link>
            </p>
          </div>
        </div>
        <div>
          <h2 className={StyleSheet.FooterContent.headerContent}>
            Brand & Contact
          </h2>
          <div>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='tel:+1 (860) 550-0919'>+1 (860) 550-0919 </Link>
            </p>
            <p className={StyleSheet.FooterContent.textLink}>
              <Link href='mailto: info@schadtleoutdoorservices.com'>
                info@schadtleoutdoorservices.com
              </Link>
            </p>
            <p className={`${StyleSheet.FooterContent.textLink} mb-[28px]`}>
              <Link href='/'>A. 252, West Road, Marlborough, CT 06447</Link>
            </p>
            <div className='flex gap-4 mb-8'>
              <Link href={'/'}>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_382_14)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 0.96582C5.3725 0.96582 0 6.33832 0 12.9658C0 19.5933 5.3725 24.9658 12 24.9658C18.6275 24.9658 24 19.5933 24 12.9658C24 6.33832 18.6275 0.96582 12 0.96582ZM5.761 10.9048H8.48V19.0758H5.761V10.9048ZM8.6595 8.37732C8.642 7.57582 8.069 6.96582 7.1385 6.96582C6.2085 6.96582 5.6 7.57582 5.6 8.37732C5.6 9.16182 6.19 9.78932 7.103 9.78932H7.1205C8.069 9.78932 8.6595 9.16182 8.6595 8.37732ZM15.1565 10.7128C16.9465 10.7128 18.2875 11.8808 18.2875 14.3908V19.0758H15.568V14.7043C15.568 13.6063 15.1745 12.8568 14.1905 12.8568C13.439 12.8568 12.9915 13.3618 12.795 13.8498C12.723 14.0248 12.705 14.2683 12.705 14.5123V19.0758H9.9855C9.9855 19.0758 10.0215 11.6718 9.9855 10.9048H12.7055V12.0623C13.066 11.5058 13.7125 10.7128 15.1565 10.7128Z'
                      fill='#B5DC58'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_382_14'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0 0.96582)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'/'}>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_382_16)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 0.96582C5.3725 0.96582 0 6.33832 0 12.9658C0 19.5933 5.3725 24.9658 12 24.9658C18.6275 24.9658 24 19.5933 24 12.9658C24 6.33832 18.6275 0.96582 12 0.96582ZM11.666 11.1348L11.641 10.7198C11.565 9.64332 12.228 8.66032 13.2775 8.27932C13.6635 8.14332 14.318 8.12632 14.7465 8.24532C14.914 8.29582 15.233 8.46532 15.46 8.61782L15.871 8.89782L16.3245 8.75382C16.576 8.67732 16.912 8.55032 17.063 8.46532C17.2055 8.38932 17.3315 8.34682 17.3315 8.37232C17.3315 8.51632 17.021 9.00782 16.761 9.27882C16.408 9.66032 16.509 9.69382 17.2225 9.43982C17.6505 9.29582 17.659 9.29582 17.575 9.45682C17.525 9.54182 17.2645 9.83832 16.9875 10.1093C16.5175 10.5753 16.4925 10.6263 16.4925 11.0163C16.4925 11.6178 16.207 12.8718 15.9215 13.5583C15.3925 14.8463 14.2595 16.1768 13.1265 16.8463C11.5315 17.7868 9.408 18.0243 7.62 17.4733C7.024 17.2868 6 16.8123 6 16.7278C6 16.7023 6.3105 16.6683 6.6885 16.6598C7.47898 16.6423 8.25242 16.4267 8.938 16.0328L9.391 15.7618L8.871 15.5838C8.132 15.3293 7.469 14.7448 7.301 14.1938C7.251 14.0158 7.2675 14.0073 7.7375 14.0073L8.2245 13.9988L7.813 13.8038C7.326 13.5588 6.8815 13.1433 6.663 12.7193C6.5035 12.4143 6.302 11.6433 6.361 11.5843C6.3775 11.5583 6.554 11.6093 6.7555 11.6773C7.3345 11.8888 7.4105 11.8383 7.0745 11.4823C6.4445 10.8383 6.252 9.88082 6.554 8.97382L6.6965 8.56732L7.2505 9.11782C8.384 10.2278 9.7185 10.8893 11.246 11.0838L11.666 11.1348Z'
                      fill='#B5DC58'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_382_16'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0 0.96582)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'/'}>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_382_18)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0 12.9658C0 6.33832 5.3725 0.96582 12 0.96582C18.6275 0.96582 24 6.33832 24 12.9658C24 19.5933 18.6275 24.9658 12 24.9658C5.3725 24.9658 0 19.5933 0 12.9658ZM12 4.96582C9.82788 4.96582 9.5564 4.9751 8.70337 5.01245C7.85327 5.05017 7.26855 5.18787 6.7627 5.38452C6.23438 5.59082 5.78735 5.86279 5.34375 6.30945C4.89697 6.75354 4.625 7.2002 4.4187 7.7251C4.22192 8.2345 4.08423 8.8158 4.04712 9.66577C4.03687 9.89709 4.02881 10.0857 4.02246 10.2806C4.00488 10.8075 4 11.3805 4 12.9658C4 15.1378 4.00928 15.4095 4.04663 16.2625C4.06592 16.7007 4.11206 17.0684 4.17896 17.3911C4.24194 17.6945 4.32349 17.958 4.4187 18.2031C4.625 18.7314 4.89697 19.1781 5.34375 19.6222C5.74268 20.0288 6.22583 20.3434 6.75928 20.5438C7.26855 20.7408 7.8501 20.8782 8.69995 20.9158C9.09302 20.933 9.36279 20.9442 9.75171 20.9514C10.207 20.9597 10.8257 20.9625 11.9966 20.9625C14.1687 20.9625 14.4407 20.9531 15.2937 20.9158C16.1436 20.8782 16.728 20.7408 17.2344 20.5438C17.7678 20.3434 18.251 20.0288 18.6499 19.6222C19.0569 19.2231 19.3716 18.7399 19.572 18.2065C19.7686 17.6971 19.9062 17.1158 19.9436 16.2659C19.9814 15.4125 19.9902 15.1409 19.9902 12.9691C19.9902 10.7971 19.9814 10.5251 19.9436 9.67212C19.9062 8.82214 19.7686 8.23779 19.572 7.73145C19.375 7.2002 19.103 6.75317 18.6562 6.30945C18.2573 5.90283 17.7742 5.58826 17.2407 5.38782C16.7314 5.1908 16.1499 5.0531 15.3 5.01587C14.4436 4.9751 14.1721 4.96582 12 4.96582ZM12 6.40649C14.1377 6.40649 14.3906 6.41577 15.2314 6.45312C16.0125 6.48779 16.4346 6.61877 16.7156 6.72815C17.0876 6.87219 17.3564 7.04712 17.6343 7.3252C17.9158 7.60645 18.0876 7.87183 18.231 8.24377C18.3406 8.52515 18.4719 8.95044 18.5063 9.72852C18.5437 10.5718 18.553 10.8252 18.553 12.9595C18.553 15.0972 18.5437 15.3501 18.5063 16.1908C18.4719 16.9722 18.3406 17.3942 18.2314 17.6752C18.0876 18.0471 17.9124 18.3158 17.6348 18.5939C17.353 18.8751 17.0874 19.0471 16.7156 19.1908C16.4343 19.3002 16.0093 19.4315 15.2314 19.4658C14.3875 19.5032 14.1348 19.5125 12 19.5125C10.9221 19.5125 10.3235 19.5101 9.88696 19.5031C9.45776 19.496 9.1853 19.4844 8.76855 19.4658C7.98755 19.4315 7.56543 19.3002 7.28442 19.1908C7.13477 19.1329 7.00171 19.0701 6.87793 18.9974C6.69458 18.8895 6.53174 18.7603 6.36572 18.5941C6.08423 18.3129 5.91235 18.0471 5.76904 17.6752C5.65942 17.3938 5.52808 16.9689 5.49365 16.1908C5.47485 15.7676 5.46313 15.4929 5.45605 15.0548C5.44922 14.6196 5.44702 14.0231 5.44702 12.9595C5.44702 12.1641 5.44824 11.6296 5.4519 11.2286C5.45776 10.5522 5.47021 10.256 5.49365 9.72815C5.52808 8.94714 5.65942 8.52515 5.76855 8.24377C5.91235 7.87219 6.08765 7.60352 6.36523 7.3252C6.57104 7.11951 6.76831 6.97229 7.00488 6.85205C7.09204 6.80774 7.18433 6.76709 7.28442 6.72852C7.56567 6.61877 7.99072 6.48779 8.76855 6.45349C9.60938 6.41577 9.8623 6.40649 12 6.40649ZM17.0696 9.22717C17.175 9.06921 17.2314 8.88367 17.2312 8.69385C17.2307 8.43958 17.1294 8.19592 16.9497 8.01611C16.7698 7.83643 16.5261 7.73511 16.272 7.7345C16.2053 7.7345 16.1392 7.74146 16.0745 7.755C15.9551 7.77991 15.8411 7.82764 15.7388 7.89612C15.5808 8.00146 15.4578 8.15137 15.385 8.32678C15.3125 8.50208 15.2935 8.69507 15.3303 8.88135C15.3674 9.0675 15.4587 9.23853 15.593 9.3728C15.7273 9.50696 15.8982 9.59839 16.0845 9.63538C16.2708 9.67249 16.4636 9.65344 16.6389 9.58069C16.8145 9.50806 16.9644 9.38501 17.0696 9.22717ZM7.89062 12.9658C7.89062 10.6971 9.7312 8.85645 12 8.85645C14.2686 8.85645 16.1094 10.6971 16.1094 12.9658C16.1094 15.2345 14.2686 17.0752 12 17.0752C9.7312 17.0752 7.89062 15.2345 7.89062 12.9658ZM10.1421 14.8361C10.6331 15.3347 11.3003 15.6205 12 15.6315C12.6997 15.6205 13.3669 15.3347 13.8579 14.8361C14.3486 14.3373 14.6238 13.6656 14.6238 12.9658C14.6238 12.2661 14.3486 11.5944 13.8579 11.0957C13.3669 10.5969 12.6997 10.3113 12 10.3002C11.3003 10.3113 10.6331 10.5969 10.1421 11.0957C9.65112 11.5944 9.37622 12.2661 9.37622 12.9658C9.37622 13.6656 9.65112 14.3373 10.1421 14.8361Z'
                      fill='#B5DC58'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_382_18'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0 0.96582)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link href={'/'}>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_382_22)'>
                    <mask
                      id='mask0_382_22'
                      //   style='mask-type:luminance'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='24'
                      height='25'
                    >
                      <path d='M0 0.96582H24V24.9658H0V0.96582Z' fill='white' />
                    </mask>
                    <g mask='url(#mask0_382_22)'>
                      <path
                        d='M24 12.9658C24 6.33782 18.628 0.96582 12 0.96582C5.372 0.96582 0 6.33782 0 12.9658C0 18.9563 4.3875 23.9208 10.125 24.8208V16.4338H7.078V12.9658H10.125V10.3218C10.125 7.31482 11.9155 5.65332 14.658 5.65332C15.9705 5.65332 17.344 5.88782 17.344 5.88782V8.84082H15.8295C14.3395 8.84082 13.875 9.76682 13.875 10.7158V12.9658H17.203L16.671 16.4348H13.875V24.8203C19.6125 23.9208 24 18.9563 24 12.9658Z'
                        fill='#B5DC58'
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id='clip0_382_22'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0 0.96582)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'/'}>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 0.96582C5.37258 0.96582 0 6.3384 0 12.9658C0 19.5932 5.37258 24.9658 12 24.9658C18.6274 24.9658 24 19.5932 24 12.9658C24 6.3384 18.6274 0.96582 12 0.96582ZM12.6849 4.96582H15.3816C15.3816 7.00649 16.9719 8.67582 18.9999 8.74549V11.4818C17.7133 11.4575 16.4656 11.0363 15.4276 10.2758V15.8645C15.4276 18.6702 13.1693 20.9658 10.3806 20.9658C7.59192 20.9658 5.33325 18.6935 5.33325 15.8645C5.33325 13.0585 7.54559 10.8095 10.2883 10.7628V13.4992C9.04392 13.5455 8.02958 14.5892 8.02958 15.8645C8.02958 17.1628 9.06692 18.2295 10.3576 18.2295C11.6483 18.2295 12.6849 17.1628 12.6849 15.8645V4.96582Z'
                    fill='#B5DC58'
                  />
                </svg>
              </Link>
            </div>

            <h3 className='hidden font-sora font-semibold text-base leading-24 text-white mb-2'>
              Recognition Award
            </h3>
            <div className='hidden '>
              {/* flex flex-col mb-8 gap-[14px] lg:flex-row */}
              <img
                className='w-[115px] h-[64px]'
                src='../images/footer_sample.png'
                alt=''
              />
              <img
                className='w-[115px] h-[64px]'
                src='../images/footer_sample.png'
                alt=''
              />
              <img
                className='w-[115px] h-[64px]'
                src='../images/footer_sample.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <p className='font-sora font-normal text-sm leading-40 text-white'>
        Copyright &copy; {getYear()} Schadtle’s Outdoor Services. All Rights
        Reserved.
      </p>
    </div>
  )
}

export default Footer
