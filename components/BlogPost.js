import Link from 'next/link'
import React from 'react'

function BlogPost({ title, date, author, content, readMore, link }) {
  return (
    <div className='relative bg-contact-color mb-6 rounded-tl rounded-tr rounded-bl-2xl rounded-br-2xl before:absolute before:h-6 before:w-full before:bg-menu-bg before:rounded-tl before:rounded-tr'>
      <div className='p-6'>
        <div className='mt-6'>
          <h3 className='font-sora font-semibold text-[24px] leading-[40px] mb-6 text-[#003334] lg:w-[325px]'>
            {title}
          </h3>
          <div className='font-sora font-light text-sm leading-24 text-content-color opacity-50 mb-6 lg:text-base'>
            <p>
              <span>{date}</span> | <span>{author}</span>
            </p>
          </div>
        </div>
        <p className='font-sora font-light text-base leading-[40px] text-content-color mb-6 lg:font-normal'>
          {content}
        </p>
        <p className='font-sora font-semibold text-base leading-[40px] text-menu-bg underline'>
          <Link href={link}>{readMore}</Link>
        </p>
      </div>
    </div>
  )
}

export default BlogPost
