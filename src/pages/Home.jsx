import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faClipboardList, faDog, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaypal, faSistrix } from '@fortawesome/free-brands-svg-icons';
import { getRandomDogs } from '../services/dogApi';
import '../css/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useModal } from '../components/ModalContext';

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const {handleOpenCal} = useModal();

  useEffect(() => {
    getRandomDogs(3).then((data) => {
      setDogs(data);
      setLoading(false);
    })
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (loading) {
    return <div>Loading...</div>
  }

  const DogCard = ({ pictureThumbnailUrl, name, breedPrimary, sex, ageString, id }) => (
    <div className='tw-rounded-lg tw-overflow-hidden tw-h-[420px] tw-max-w-xs tw-bg-[#faffff] tw-relative'>

      {pictureThumbnailUrl && (
        <img src={pictureThumbnailUrl} alt="" className='tw-w-full tw-h-full tw-object-cover tw-overflow-hidden' />
      )}

      <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-3 tw-flex tw-flex-col tw-items-start tw-bg-[#faffff]/90'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#cd1c18]'>
          {name}
        </h2>
        <p>{sex}</p>
        <p>{breedPrimary}</p>
        <p>{ageString}</p>
        <Link className='desktop-home-blue-button tw-text-[#ffff00] tw-py-1 tw-px-3 tw-bg-[#0000cc] tw-rounded-full tw-mt-2' to={`/dogs/${id}`} onClick={scrollToTop}>
          Learn More
        </Link>
      </div>
    </div>
  )

  return (
    <main >
      <div className='tw-bg-[linear-gradient(to_bottom_right,#faffff_55%,#faffff_65%,#9999ff)]'>

        <div className='desktop-home'>

          {/*Hero section*/}
          <div className='tw-mx-4'>
            <p className='desktop-home-nonprofit tw-inline-flex tw-my-6 tw-items-center tw-rounded-full tw-bg-[#cd1c18]/10 tw-text-[#cc0000] tw-py-2 tw-px-5'>
              <FontAwesomeIcon icon={faHeart} className=' tw-mr-1' />
              Foster-based Nonprofit
            </p>
            <h1 className='desktop-home-forever tw-text-4xl tw-font-bold'>
              Because <span className='tw-text-[#878787]'>Forgotten</span> Should Not Be <span className='tw-text-[#cd1c18]'>Forever</span>
            </h1>
            <p className='desktop-home-hero-p tw-font-light tw-text-lg tw-mt-6'>
              We rescue, rehabilitate, and re-home homeless dogs in San Diego and surrounding communities, providing essential medical care and loving foster homes until they find their forever families.
            </p>

            {/*Hero CTAs*/}
            <div className='desktop-home-hero-cta tw-flex tw-flex-col tw-items-center'>
              <Link to='/dogs' onClick={scrollToTop} className='desktop-home-hero-button tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-mt-8 tw-mb-4 tw-w-[16rem] tw-py-2 tw-bg-[#cd1c18] tw-text-white'>
                Meet Our Dogs <FontAwesomeIcon icon={faCircleArrowRight} className='tw-ml-1' />
              </Link>
              <Link to='/volunteer' onClick={scrollToTop} className='desktop-home-hero-button tw-inline-flex tw-justify-center tw-rounded-full tw-w-[16rem] tw-mb-16 tw-py-2 tw-border tw-border-black'>
                Become a Foster
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Adoption Process*/}
      <section>
        <div className='desktop-home desktop-home-adoption tw-my-8 tw-px-4 tw-flex tw-flex-col tw-items-center'>
          <h1 className='tw-text-4xl tw-font-bold tw-text-center'>
            Adoption Process
          </h1>
          <p className='tw-font-light tw-text-lg tw-mt-6'>
            A second chance for a forgotten dog starts with these five simple steps.
          </p>

          <div className='desktop-home-adoption-grid'>
            {/*Step 1: browse dog*/}
            <div className='desktop-home-adoption-box tw-flex tw-flex-col tw-bg-[#9999ff]/70 tw-mt-8 tw-mb-3 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faSistrix} className='tw-bg-[#faffff] tw-text-[#cd1c18] tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Browse
              </h3>
              <p className='tw-mx-4 tw-pb-4'>
                Online or at one of our adoption{' '} <span onClick={handleOpenCal} className='desktop-home-blue-button tw-rounded-full tw-bg-[#0000cc] tw-w-fit tw-px-2 tw-py-1 tw-text-bold tw-text-[#ffff00] tw-cursor-pointer'>events</span>
              </p>
              <div className='tw-rounded-full tw-bg-[#cd1c18] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-bold tw-text-[#faffff] tw-absolute tw-top-0 tw-left-0 tw--translate-x-1/2 tw--translate-y-1/2'>
                1
              </div>
            </div>

            {/*Step 2: apply */}
            <div className='desktop-home-adoption-box tw-flex tw-flex-col tw-bg-[#9999ff]/60 tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faClipboardList} className='tw-bg-[#faffff] tw-text-[#cd1c18] tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Apply
              </h3>
              <p className='tw-mx-4 tw-pb-3'>
                Apply for the dog you're interested in.
              </p>
              <div className='tw-rounded-full tw-bg-[#cd1c18] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-bold tw-text-[#faffff] tw-absolute tw-top-0 tw-left-0 tw--translate-x-1/2 tw--translate-y-1/2'>
                2
              </div>
            </div>

            {/*Step 3: meet and greet*/}
            <div className='desktop-home-adoption-box tw-flex tw-flex-col tw-bg-[#9999ff]/50 tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faPhone} className='tw-bg-[#faffff] tw-text-[#cd1c18] tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Follow Up (if applicable)
              </h3>
              <p className='tw-mx-4 tw-pb-3'>
                We'll contact you to schedule any follow-up.
              </p>
              <div className='tw-rounded-full tw-bg-[#cd1c18] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-bold tw-text-[#faffff] tw-absolute tw-top-0 tw-left-0 tw--translate-x-1/2 tw--translate-y-1/2'>
                3
              </div>
            </div>

            {/*Step 4: approval and paperwork*/}
            <div className='desktop-home-adoption-box tw-flex tw-flex-col tw-bg-[#9999ff]/40 tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faPaypal} className='tw-bg-[#faffff] tw-text-[#cd1c18] tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Approval and Contract
              </h3>
              <p className='tw-mx-4 tw-pb-3'>
                Pay the adoption fee and sign the adoption agreement.
              </p>
              <div className='tw-rounded-full tw-bg-[#cd1c18] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-bold tw-text-[#faffff] tw-absolute tw-top-0 tw-left-0 tw--translate-x-1/2 tw--translate-y-1/2'>
                4
              </div>
            </div>

            {/*Step 5: forever*/}
            <div className='desktop-home-adoption-box tw-flex tw-flex-col tw-bg-[#9999ff]/30 tw-my-2 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faDog} className='tw-bg-[#faffff] tw-text-[#cd1c18] tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Forever Home
              </h3>
              <p className='tw-mx-4 tw-pb-3'>
                Take your new BFF home and start forever together.
              </p>
              <div className='tw-rounded-full tw-bg-[#cd1c18] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-bold tw-text-[#faffff] tw-absolute tw-top-0 tw-left-0 tw--translate-x-1/2 tw--translate-y-1/2'>
                5
              </div>
            </div>
          </div>

          {/* Adoption Process CTA*/}
          <Link to='/dogs' onClick={scrollToTop} className='tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-mt-8 tw-mb-4 tw-w-[16rem] tw-py-3 tw-bg-[#cd1c18] tw-text-white hover:tw-bg-[#0000cc] hover:tw-text-[#ffff00]'>
            Start that journey, Today <FontAwesomeIcon icon={faCircleArrowRight} className='tw-ml-1' />
          </Link>
        </div>
      </section>

      {/* Featured Dogs */}
      <section>
        <div className='tw-bg-[#9999ff]/30 tw-pb-8 desktop-home-feature '>
          <div className='desktop-home tw-pt-8 tw-px-4 tw-flex tw-flex-col tw-items-center'>

            <h1 className='desktop-home-feature-h1 tw-text-3xl tw-font-bold tw-text-center tw-my-4'>
              Meet Your New Best Friend
            </h1>
            <p className='desktop-home-feature-p tw-font-light tw-text-lg tw-my-6'>
              These loving dogs are ready for their forever homes.
            </p>

            {/* Carousel */}
            <div className='tw-h-[428px] tw-w-full lg:tw-hidden'>
              <Swiper slidesPerView={1.15} centeredSlides={true} spaceBetween={16} >
                {dogs.map((dog) => (
                  <SwiperSlide key={dog.id}  >
                    <DogCard id={dog.id} {...dog.attributes} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop */}
            <div className='tw-hidden desktop-home-feature-card'>
              {dogs.map((dog) => (
                <DogCard key={dog.id} id={dog.id} {...dog.attributes} />
              ))}
            </div>

            {/* CTA for both views */}
            <Link to='/dogs' onClick={scrollToTop} className='desktop-home-feature-button tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-mt-8 tw-w-[16rem] tw-py-3 tw-bg-[#cd1c18] tw-text-white'>
              See the Rest <FontAwesomeIcon icon={faCircleArrowRight} className='tw-ml-1' />
            </Link>
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section>
        <div className='desktop-home tw-my-10 tw-px-4'>
          <h1 className='tw-text-xl tw-font-bold tw-text-center tw-my-6 tw-text-[#878787]'>Back by Those Who Believe in <span className='tw-text-[#cd1c18] '>Second Chances</span></h1>

          <div className='tw-gap-8 tw-flex tw-flex-wrap tw-items-center tw-justify-center'>
            <img className='tw-h-auto tw-w-[288px]' src="https://cdn.bfldr.com/JPI2AE08/at/3qxt6smjf5ftk3bft5n8xtc/PetcoLoveLogo_ColorRGB.svg?auto=webp&format=svg" alt="" />
            <img className='tw-h-auto tw-w-[288px]' src="https://secondchancedogrescue.org/wp-content/uploads/2025/03/Grant-Badge-3-1024x1024.gif" alt="" />
            <img className='tw-h-auto tw-w-[288px]' src="https://secondchancedogrescue.org/wp-content/uploads/2025/03/Full-Color-Logo-For-Pets.-For-People.-For-Good-1.png" alt="" />
          </div>
        </div>
      </section>

      {/* Donation */}
      <section >
        <div className='desktop-home-donation tw-bg-[linear-gradient(to_bottom,#9999ff_0%,#faffff_30%)]'>
          <div className='desktop-home tw-my-16 tw-px-4 tw-flex tw-flex-col tw-items-center '>
            <h1 className='tw-text-4xl tw-font-bold tw-text-center tw-pt-14 tw-my-6'>Turn <span className='tw-text-[#878787]'>Forgotten</span> into <span className='tw-text-[#cd1c18]'>Forever</span></h1>
            <div className='tw-font-light tw-text-lg tw-mt-6 tw-flex tw-flex-col tw-gap-3'>
              <p>Every rescue, every medical treatment, every second chance happens because someone chose to help.</p>
              <p>Your gift today turns forgotten into forever.</p>
            </div>

            {/*Donation CTAs*/}
            <div className='desktop-home-hero-cta tw-flex tw-flex-col tw-items-center'>
              <Link to='/donate' onClick={scrollToTop} className='desktop-home-hero-button tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-mt-8 tw-mb-4 tw-w-[16rem] tw-py-2 tw-bg-[#cd1c18] tw-text-white'>
                Donate Today <FontAwesomeIcon icon={faHeart} className='tw-ml-1' />
              </Link>
              <a className='desktop-home-hero-button tw-inline-flex tw-justify-center tw-rounded-full tw-w-[16rem] tw-py-2 tw-border tw-border-black' href="https://scdrsd.substack.com" target='_blank' rel='noopener noreferrer'>
                Follow their journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home