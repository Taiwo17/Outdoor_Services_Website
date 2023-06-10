import React from 'react'

function SingleBlogContent() {
  return (
    <>
      <div className='px-8 md:px-12 lg:px-32 mb-[52px]'>
        <div>
          <img
            className='w-full rounded-2xl'
            src='../images/singleblog.png'
            alt='Single Blog Page'
          />
        </div>
      </div>
      <article className='flex flex-col gap-4 px-8 md:px-12 lg:pl-[229.5px] lg:pr-[228.5px]'>
        <p className='font-sora font-light text-base text-greyish-primary leading-[30px] lg:leading-40 lg:text-[20px]'>
          Outdoor fireplaces have been increasing in popularity in recent years,
          and it&apos;s not difficult to see why. They provide a cozy and
          inviting space for outdoor gatherings, and can be customized to fit
          any style or preference. In this blog post, we&apos;ll explore the top
          five benefits of adding a custom outdoor fireplace to your backyard.
        </p>
        <ol className='list-decimal pl-5 flex flex-col gap-4 font-sora font-light leading-[30px] text-base text-greyish-primary lg:pl-8 lg:leading-40 lg:text-[20px]'>
          <li>
            Creates a warm and inviting atmosphere An outdoor fireplace creates
            a warm and inviting atmosphere in your backyard. Whether you&apos;re
            hosting a party, or just relaxing with your family, an outdoor
            fireplace will provide a cozy ambiance and make your outdoor living
            space feel like an extension of your home.
          </li>
          <li>
            Increases the value of your home Adding a custom outdoor fireplace
            to your backyard can increase the value of your home. It&apos;s a
            unique feature that many homebuyers look for, and it can make your
            home stand out from the rest. Plus, a custom fireplace can be
            designed to fit the style of your home and enhance its overall
            aesthetic.
          </li>
          <li>
            Provides a source of light and warmth An outdoor fireplace not only
            provides warmth, but it also provides a source of light. This is
            perfect for those summer nights when you want to spend time outside,
            but it gets too dark to see. You can enjoy the warmth of the fire,
            and the soft glow of the flames.
          </li>
          <li>
            Ideal for outdoor cooking An outdoor fireplace is ideal for outdoor
            cooking. You can cook everything from pizzas to steaks and
            everything in between. The heat from the fire can be used to cook
            food, and the smoky flavor adds a delicious taste to your meals.
            This is perfect for those summer barbecues and parties.
          </li>
          <li>
            Low maintenance An outdoor fireplace is a low maintenance addition
            to your backyard. It&apos;s built to last, and requires little
            maintenance. All you need to do is clean it regularly and make sure
            it&apos;s in good condition. This makes it a cost-effective addition
            to your home that will provide years of enjoyment.
          </li>
        </ol>
        <p className='font-sora font-light text-base leading-[30px] text-greyish-primary lg:leading-40 lg:text-[20px]'>
          In conclusion, adding a custom outdoor fireplace to your backyard
          provides a warm and inviting atmosphere, increases the value of your
          home, provides a source of light and warmth, is ideal for outdoor
          cooking, and is a low-maintenance addition to your home. It&apos;s no
          wonder why more and more homeowners are opting for this unique and
          practical addition to their outdoor living space.
        </p>
      </article>
    </>
  )
}

export default SingleBlogContent
