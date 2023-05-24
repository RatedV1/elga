import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import lol_cover from '../assets/LOL.png'
import 'swiper/css';
import { Rating } from 'react-simple-star-rating'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import SectionHeading from './General/SectionHeading';
import __ from '../functions/I18N';

function UserReviews(props) {
    TimeAgo.setDefaultLocale(en.locale)
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    let reviews = [
        {
            name: 'Dem***ist',
            rating: 5,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 14:00:00',
        },
        {
            name: 'Re***ck',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 10:00:00',
        },
        {
            name: 'Is***07',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-20 10:00:00',
        },
        {
            name: 'Re***ck',
            rating: 4.5,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-19 10:00:00',
        },
        {
            name: 'Dem***ist',
            rating: 5,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 03:00:00',
        },
        {
            name: 'Re***ck',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 10:00:00',
        },
        {
            name: 'Is***07',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 10:00:00',
        },
        {
            name: 'Re***ck',
            rating: 4.5,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.',
            dateTime: '2022-09-21 10:00:00',
        },
    ]
  return (
    <div className=''>
          <SectionHeading title={__('Read User Reviews')} />
          <div className='w-full h-72 mt-4 ignore-swiper'>
              <Swiper
                  slidesPerView='auto'
                  spaceBetween={20}
                  slidesPerGroupAuto={true}
                  className="mySwiper"
              >
                  {reviews.map((review, index) => (
                      <SwiperSlide key={index} className='text-white w-32 h-96'>
                          <div className={(index === 0 ? "ltr:ml-6 ltr:md:ml-8 ltr:xl:ml-12 ltr:2xl:ml-16 rtl:mr-6 rtl:md:mr-8 rtl:xl:mr-12 rtl:2xl:mr-16" : (index === reviews.length - 1 ? "ltr:mr-6 ltr:md:mr-8 ltr:xl:mr-12 ltr:2xl:mr-16 rtl:ml-6 rtl:md:ml-8 rtl:xl:ml-12 rtl:2xl:ml-16":""))+' w-96 h-72 text-white bg-black'}>
                              <div className='w-full h-full bg-gradient-to-br py-4 px-8 rounded-xl  from-primary-dark to-primary-600 hover:from-primary-600 hover:to-primary-dark'>
                                  <div className='flex justify-between'>
                                      <Rating ratingValue={(review.rating * 20)} iconsCount={5} fillColor={"#ED0033"} emptyColor={"#42444D66"} size={25} readonly={true} />
                                      <div>
                                        <p className='font-oskari text-lg ltr:text-left rtl:text-right text-white font-medium'>
                                            {
                                                timeAgo.format(new Date(review.dateTime))
                                            }
                                        </p>
                                      </div>
                                  </div>
                                  <div className="text-xl lg:text-2xl text-white font-bold ltr:text-left rtl:text-right mt-4">
                                      Re**ck
                                  </div>
                                  <div className='mt-4 ltr:text-left rtl:text-right line-clamp-4'>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam repudiandae natus nesciunt accusantium ab sit eaque ea corporis numquam eius incidunt deserunt cumque earum necessitatibus ullam, hic animi magni.
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                    ))}
                  
              </Swiper>
          </div>
    </div>
  )
}


export default UserReviews
