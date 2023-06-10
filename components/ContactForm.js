import React from 'react'
import Input from './Input'

function ContactForm() {
  return (
    <div className='relative bg-[#FBF2EF] rounded-2xl'>
      <div className='flex flex-col lg:flex-row lg:gap-16'>
        <div className='hidden lg:flex lg:relative lg:w-[373px]'>
          <img
            className='rounded-tl-2xl rounded-bl-2xl object-cover '
            src='../images/side_container.png'
            alt=''
          />
          <div className='absolute top-6 left-6 w-[325px]'>
            <h3 className='font-sora font-normal text-[30px] text-white leading-56 md:text-[35px] lg:text-[48px] mb-8'>
              Send us Message
            </h3>
            <p className='font-sora font-normal text-sm leading-24 text-white lg:text-base'>
              Export invite editor vertical pen object shadow. Pen invite edit.
            </p>
          </div>
        </div>
        <div className='pl-6 py-8 pr-8 lg:py-[66.5px] lg:pl-0 lg:pr-0'>
          <h2 className='font-sora font-normal text-[30px] mb-4 text-darkish-green leading-56 md:text-[35px] lg:hidden'>
            Send Us Message
          </h2>
          <form className='' action=''>
            <div className='relative'>
              <div className='flex flex-col mb-6 lg:flex-row lg:gap-4'>
                <div>
                  <label
                    className='block font-sora font-semibold text-sm leading-24 text-black lg:text-base mb-1'
                    htmlFor='fullName'
                  >
                    Full Name
                  </label>
                  <Input
                    type={'text'}
                    name={'fullName'}
                    id={'fullName'}
                    placeholder={'Write name'}
                  />
                </div>
                <div>
                  <label
                    className='block font-sora font-semibold text-sm leading-24 text-black lg:text-base mb-1'
                    htmlFor='phone'
                  >
                    Phone
                  </label>
                  <Input
                    type={'text'}
                    name={'phone'}
                    id={'phone'}
                    placeholder={'Phone'}
                  />
                </div>
              </div>
              <div className='flex flex-col mb-6 lg:flex-row lg:gap-4'>
                <div>
                  <label
                    className='block font-sora font-semibold text-sm leading-24 text-black lg:text-base mb-1'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <Input
                    type={'email'}
                    name={'email'}
                    id={'email'}
                    placeholder={'Enter email'}
                  />
                </div>
                <div className='relative'>
                  <label
                    className='block font-sora font-semibold text-sm leading-24 text-black lg:text-base mb-1'
                    htmlFor='location'
                  >
                    Location
                  </label>
                  <div className='flex items-center'>
                    <select
                      className={`relative h-[56px] pl-4 pr-[25px] bg-white font-sora font-light text-sm leading-24 text-black  border-[#0033341a] outline-none appearance-none rounded-lg w-full lg:mb-0 lg:w-[300px]`}
                      name=''
                      id=''
                    >
                      <option defaultValue={'selectedLocation'}>
                        Select Location
                      </option>
                      <option value=''></option>
                      <option value=''></option>
                    </select>
                    <svg
                      className='absolute -mt-[0px]  right-4 md:-mt-0'
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 9.46582L12 15.4658L18 9.46582'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className='block font-sora font-semibold text-sm leading-24 text-black lg:text-base mb-1'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  placeholder='Write your message'
                  className='p-4 h-[128px] bg-white  mb-4 border-[#0033341a] outline-none rounded-lg w-full'
                ></textarea>
              </div>
              <div>
                <button className='bg-green-primary rounded-lg px-8 py-4 font-sora font-semibold text-sm leading-24 text-greyish-primary lg:text-base'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
