import BlogPost from '@/components/BlogPost'
import Card from '@/components/Card'
import CardTestimony from '@/components/CardTestimony'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ServiceSection from '@/components/ServiceSection'
import SliderCard from '@/components/SliderCard'
import Head from 'next/head'
import StyleSheet from '../styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowLeft, ArrowRight } from '@/components/Icons'
import { useState } from 'react'

export default function Home() {
  const [slide, setSlide] = useState(null)

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    className: 'slideshows',
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <Head>
        <title>Schadtle Outdoor Services</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <>
        <Navbar />
        <main className='pt-[100px] mb-32'>
          <HeroSection />
        </main>
        <article className='px-8 md:px-12 lg:px-32'>
          <div className='flex flex-col gap-2 mb-12'>
            <h2 className={StyleSheet.HeadingContent.heading}>Our Services</h2>
            <p className={StyleSheet.HeadingContent.content}>
              We are very experience in the following services
            </p>
          </div>

          <div className='grid grid-cols-1 gap-[26.33px] mb-32 md:grid-cols-2 lg:grid-cols-3'>
            <ServiceSection
              // img={'../images/services_images/retaining_wall.png'}
              imgHover={'../images/services_images/services1.png'}
              title={'Retaining Walls'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'/our-services/retaining-walls'}
              alt={'Retaining Walls'}
            />
            <ServiceSection
              // img={'../images/services_images/walkaway_design.png'}
              imgHover={'../images/services_images/services2.png'}
              title={'Walkway Design'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'/our-services/walkaway-design'}
              alt={'Walkway Design'}
            />
            <ServiceSection
              // img={'../images/services_images/patios.png'}
              imgHover={'../images/services_images/services3.png'}
              title={'Patios'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'our-services/patios-design'}
              alt={'Patios'}
            />
            <ServiceSection
              // img={'../images/services_images/yarn_expansion.png'}
              imgHover={'../images/services_images/services4.png'}
              title={'Yard Expansion'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'/our-services/yard-expansion'}
              alt={'Yard Expansion'}
            />
            <ServiceSection
              // img={'../images/services_images/stump_grinding.png'}
              imgHover={'../images/services_images/services5.png'}
              title={'Stump Grinding'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'/our-services/stump-grinding'}
              alt={'Stump Grinding'}
            />
            <ServiceSection
              // img={'../images/services_images/step_building.png'}
              imgHover={'../images/services_images/services6.png'}
              title={'Step Building'}
              desc={`Our company specialises in constructing retaining walls using retaining wall blocks of the finest quality. Using emerging methods we are able to execute on various innovative retaining wall ideas to augment any outdoor space. Whether you need a retaining wall for erosion control, design, or to create more usability our focus is on creating beautifully constructed wall the structurally sound.`}
              link={'/our-services/steps-building'}
              alt={'Step Building'}
            />
          </div>
        </article>
        <article className='pl-8 md:pl-12 lg:pl-32 mb-32'>
          <div className='mb-12'>
            <div className='flex items-center justify-between mb-2 pr-8 md:pr-12 lg:pr-32'>
              <h2 className={StyleSheet.HeadingContent.heading}>Jobs Done</h2>
              <div className='flex items-center gap-4'>
                <button className='cursor-pointer' onClick={slide?.slickPrev}>
                  <ArrowLeft />
                </button>
                <button className='cursor-pointer' onClick={slide?.slickNext}>
                  <ArrowRight />
                </button>
              </div>
            </div>
            <p className={StyleSheet.HeadingContent.content}>
              We are very experience in the following services
            </p>
          </div>
          <div className=''>
            <Slider ref={setSlide} {...settings}>
              <div>
                <SliderCard
                  img={'../images/naturalistic_back_garden.png'}
                  title={'Naturalistic Back Garden'}
                  desc={'Creative Office Space'}
                  links={'/work'}
                />
              </div>
              <div>
                <SliderCard
                  img={'../images/naturalbackgarden.png'}
                  title={'Naturalistic Back Garden'}
                  desc={'Creative Office Space'}
                  links={'/work'}
                />
              </div>
              <div>
                <SliderCard
                  img={'../images/naturalistic_back_garden.png'}
                  title={'Naturalistic Back Garden'}
                  desc={'Creative Office Space'}
                  links={'/work'}
                />
              </div>
            </Slider>
          </div>
        </article>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <div className='flex flex-col gap-2 mb-12'>
            <h2 className={StyleSheet.HeadingContent.heading}>Our Process</h2>
            <p className={StyleSheet.HeadingContent.content}>
              This is how we make your dream outdoor come real
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card
              title={'Book a Call'}
              desc={'Figjam figma plugin frame strikethrough rectangle.'}
            />
            <Card
              title={'Get a Quote'}
              desc={'Figjam figma plugin frame strikethrough rectangle.'}
            />
            <Card
              title={'Work Start'}
              desc={'Figjam figma plugin frame strikethrough rectangle.'}
            />
            <Card
              title={'Hand Over'}
              desc={'Figjam figma plugin frame strikethrough rectangle.'}
            />
          </div>
        </section>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <div className='flex flex-col gap-2 mb-12'>
            <h2 className={StyleSheet.HeadingContent.heading}>Testimony</h2>
            <p className={StyleSheet.HeadingContent.content}>
              Our clients are all praise for us about our exploits
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
          </div>
        </section>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <ContactForm />
        </section>
        <article className='px-8 mb-32 md:px-12 lg:px-32'>
          <div className='flex flex-col gap-2 mb-12'>
            <h2 className={StyleSheet.HeadingContent.heading}>
              Our Blog Posts
            </h2>
            <p className={StyleSheet.HeadingContent.content}>
              We also write article about what we do best to educate clients
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <BlogPost
              title={`Bold clip pen image ellipse. Align pen imag`}
              date={`02 Jan, 2023`}
              author={`Author Name`}
              content={` Pencil layout ipsum reesizing stroke blur union inspect follower font.
              Device connection ipsum connection auto. Follower connection selection
              content content. Follower.`}
              readMore={`Read More`}
              link={`/blog/blog-slug`}
            />
            <BlogPost
              title={`Bold clip pen image ellipse. Align pen imag`}
              date={`02 Jan, 2023`}
              author={`Author Name`}
              content={` Pencil layout ipsum reesizing stroke blur union inspect follower font.
              Device connection ipsum connection auto. Follower connection selection
              content content. Follower.`}
              readMore={`Read More`}
              link={`/blog/blog-slug`}
            />
            <BlogPost
              title={`Bold clip pen image ellipse. Align pen imag`}
              date={`02 Jan, 2023`}
              author={`Author Name`}
              content={` Pencil layout ipsum reesizing stroke blur union inspect follower font.
              Device connection ipsum connection auto. Follower connection selection
              content content. Follower.`}
              readMore={`Read More`}
              link={`/blog/blog-slug`}
            />
          </div>
        </article>
        <footer className="bg-[url('/images/footer_background.png')] bg-cover bg-center">
          <Footer />
        </footer>
      </>
    </>
  )
}
