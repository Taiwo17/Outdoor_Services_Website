import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BreadCrumb({ title, link, content, linkTitle }) {
  const router = useRouter()
  const currentLink = router.pathname
  const activeLink = 'font-sora text-sm font-light leading-24 text-menu-bg'
  const inActiveLink =
    'font-sora text-sm font-light leading-24 text-menu-bg opacity-50'
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Link href={linkTitle}>
        <p
          className={
            currentLink === `/our-services` ? activeLink : inActiveLink
          }
        >
          {title}
        </p>
      </Link>
      <p className='h-6 font-sora'>/</p>
      <Link href={link}>
        <p className={currentLink === `/${link}` ? activeLink : inActiveLink}>
          {content}
        </p>
      </Link>
    </div>
  )
}

export default BreadCrumb
