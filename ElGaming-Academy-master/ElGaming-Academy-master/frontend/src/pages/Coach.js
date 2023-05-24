import React from 'react'
import PropTypes from 'prop-types'
import coach_image from '../assets/coach_image.png'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { Rating } from 'react-simple-star-rating'
import { useState,useRef,useEffect } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'

import Characters from '../components/CoachProfile/Characters'
import CategoryElement from '../components/CoachProfile/CategoryElement'
import ProfileActions from '../components/CoachProfile/ProfileActions'
import LessonCard from '../components/CoachProfile/LessonCard'
import FAQ from '../components/FAQ'
import ProfileTag from '../components/CoachProfile/ProfileTag'
import UserReview from '../components/CoachProfile/UserReview'
import { useMediaQuery } from 'react-responsive'
import { useContext } from 'react'
function Coach(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const [currentTab, setCurrentTab] = useState(0);
    const [quantity, setQuantity] = useState(1);
   
    function changeTab(tab) {
        setCurrentTab(tab);
    }
    function changeQuantity(value) {
        if(quantity + value < 1) return;
        if(quantity + value > 10) return;
        setQuantity(quantity + value);
    }
    const characters = [
        "Aatrox", "Ahri", "Akali", "Alistar", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", 
    ]
    const reviews = [
        {
                id: 1,
                rating: 4,
                username: "Kai",
                userimage: "https://thispersondoesnotexist.com/image",
                usertype: "Golden User",
                dateTime: "2022-10-23T12:00:00Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl.",
                reply:{
                    id: 1,
                    username: "JossStick",
                    userimage: "/images/illustrations/coach_image.png",
                    dateTime: "2022-10-24T12:00:00Z",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl.",
                }
        },
        {
            id: 2,
            rating: 5,
            username: "Kata",
            userimage: "https://thispersondoesnotexist.com/image",
            usertype: "Golden User",
            dateTime: "2022-09-15T12:00:00Z",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nisl.",
            
        },
    ];
    // make profile bar sticky
//     const ref = useRef(null);

//    useEffect(() => {
//        const el = ref.current;
//        window.onscroll = function () { stickyProfile() };
//        var sticky = el.offsetTop;
//        function stickyProfile() {
//            if (window.pageYOffset >= sticky) {
//                el.style.marginTop = window.pageYOffset - sticky + "px";
//            } else {
//                el.style.marginTop = "0px";
//            }
//        }
//     }, []);
  return (
    <div>
        <div className='side-paddings text-white ltr:text-left rtl:text-right py-16 flex font-oskari lg:flex-nowrap flex-wrap gap-4'>
              <div  className='w-full lg:w-72'>
                <div className='w-full bg-bluegray-900 p-4 rounded-xl lg:block'>
                <div className='lg:block flex gap-4'>
                    <div className='w-48 sm:w-64 lg:w-full h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden lg:mb-4'>
                        <img src={coach_image} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h1 className='text-3xl lg:text-4xl text-white font-medium'>
                            JossStick
                        </h1>
                        <div className=' text-darkgray-200'>
                            <p className='flex items-center'>
                                <IoLocationSharp className='ltr:mr-1 rtl:ml-1' /> Egypt
                            </p>
                            <p className='flex items-center'>
                                <BsFillPersonFill className='ltr:mr-1 rtl:ml-1' /> League of Legends Coach
                            </p>
                        </div>
                        <div className='flex items-center space-x-2 mt-2 flex-wrap'>
                            <Rating ratingValue={100} iconsCount={5} fillColor={"#ED0033"} emptyColor={"#42444D"} size={isSmallMobile?20:(isTablet?25:30)} readonly={true} />
                            <p className='text-primary-500 text-lg'>
                                5.0
                            </p>
                            <p className='text-darkgray-200 text-lg'>
                                (51)
                            </p>
                        </div>
                              {isTablet &&
                                  <div className='mt-4'>
                                      {SocialMediaIcons()}
                                  </div>
                              }
                    </div>
                </div>
                      {isTablet &&
                      <hr className='border-gray-600 mt-4' />
                      }
                <div className='lg:block flex flex-wrap items-end gap-4 lg:mt-0 mt-4'>
                          <div>
                              <h2 className='text-white font-medium lg:mt-4 text-xl'>
                                  Regions
                              </h2>
                              <div className='flex flex-wrap space-x-2 rtl:space-x-reverse mt-2'>
                                  <CategoryElement>
                                      NA
                                  </CategoryElement>
                                  <CategoryElement>
                                      EUNE
                                  </CategoryElement>
                              </div>
                          </div>
                          <div>
                              <h2 className='text-white font-medium lg:mt-4 text-xl'>
                                  Languages
                              </h2>
                              <div className='flex flex-wrap space-x-2 rtl:space-x-reverse mt-2'>
                                  <CategoryElement>
                                      Arabic
                                  </CategoryElement>
                                  <CategoryElement>
                                      English
                                  </CategoryElement>
                              </div>
                          </div>
                          <div>
                              <h2 className='text-white font-medium lg:mt-4 text-xl'>
                                  Roles
                              </h2>
                              <div className='flex flex-wrap space-x-2 rtl:space-x-reverse mt-2'>
                                  <CategoryElement>
                                      Top
                                  </CategoryElement>
                                  <CategoryElement>
                                      ADC
                                  </CategoryElement>
                                  <CategoryElement>
                                      Jungle
                                  </CategoryElement>
                              </div>
                          </div>
                          <Characters characters={characters} />
                </div>
                {!isTablet &&
                <>
                    <hr className='border-gray-600 my-4' />
                    {SocialMediaIcons()}
                </>
                }
            </div>
              </div>
            <div className='lg:flex-1 '>
                <div className='flex 2xl:flex-nowrap flex-wrap gap-4'>
                      <div className='lg:flex-1 lg:w-auto w-full'>
                        <ProfileActions/>
                        <div className='w-full mt-4'>
                            <div className='flex bg-bluegray-900 rounded-t-lg overflow-hidden'>
                                <button onClick={() => changeTab(0)} className={(currentTab===0?"bg-darkgray-500":"")+ ' flex-1 py-6  lg:px-8 text-lg lg:text-xl font-oskari uppercase transition-all border-b-4 border-solid border-transparent relative overflow-hidden'}>
                                    Lessons
                                    <div className={(currentTab===0?"translate-x-0 ":"ltr:translate-x-full rtl:-translate-x-full")+' transform transition-all w-full h-0 border-t-4 border-primary-500 absolute bottom-0 rtl:right-0 ltr:left-0'}></div>
                                </button>
                                <button onClick={()=>changeTab(1)} className={(currentTab===1?"bg-darkgray-500":"")+ ' flex-1 py-6  lg:px-8 text-lg lg:text-xl font-oskari uppercase transition-all border-b-4 border-solid border-transparent relative overflow-hidden'}>
                                    Subscriptions
                                    <div className={(currentTab === 1 ? "translate-x-0 " : (currentTab===0?"ltr:-translate-x-full rtl:translate-x-full":"ltr:translate-x-full rtl:-translate-x-full")) + ' transform transition-all w-full h-0 border-t-4 border-primary-500 absolute bottom-0 rtl:right-0 ltr:left-0'}></div>
                                </button>
                                <button onClick={()=>changeTab(2)} className={(currentTab===2?"bg-darkgray-500":"")+ ' flex-1 py-6  lg:px-8 text-lg lg:text-xl font-oskari uppercase transition-all border-b-4 border-solid border-transparent relative overflow-hidden'}>
                                    About
                                    <div className={(currentTab === 2 ? "translate-x-0 " : "ltr:-translate-x-full rtl:translate-x-full") + ' transform transition-all w-full h-0 border-t-4 border-primary-500 absolute bottom-0 rtl:right-0 ltr:left-0'}></div>
                                </button>
                            </div>
                            <div className='w-full bg-bluegray-900 overflow-hidden relative rounded-b-lg'>
                                <div className={(currentTab===0?"translate-x-0":"ltr:-translate-x-full rtl:translate-x-full")+' w-full transition-all transform'}>
                                      <div className='max-h-96 no-scrollbar overflow-y-auto'>

                                    {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
                                        <LessonCard key={index}/>
                                    ))}
                                    </div>
                                    <div className='flex p-4 space-x-4 rtl:space-x-reverse'>
                                        <div className='border flex justify-between border-darkgray-300 border-solid rounded-lg py-2 px-2 text-xl'>
                                              <button onClick={() => changeQuantity(-1)} className={(quantity === 1 ? "text-darkgray-300" : "") +' ltr:mr-6 rtl:ml-6'}><BiMinus/></button>
                                            <p className='w-4 text-center'>{quantity}</p>
                                            <button onClick={()=>changeQuantity(1)} className={(quantity === 10 ? "text-darkgray-300" : "") + ' ltr:ml-6 rtl:mr-6'}><BiPlus/></button>
                                        </div>
                                          <div className='bg-primary-500 cursor-pointer flex-1 group hover:bg-primary-600 transition-all  flex items-center justify-center rtl:pr-16 rtl:lg:pr-24 ltr:pl-16 ltr:lg:pl-24 relative text-xl rounded-lg text-white font-oskari font-medium'>
                                            <div className='absolute group-hover:bg-primary-900 transition-all top-0 h-full rounded-lg rtl:right-0 ltr:left-0 w-16 lg:w-24 text-center justify-center bg-primary-800 flex items-center'>
                                            $35
                                            </div>
                                            Book Now
                                        </div>
                                    </div>
                                </div>
                                <div className={(currentTab === 1 ? "translate-x-0" : (currentTab===0?"ltr:translate-x-full rtl:-translate-x-full":"ltr:-translate-x-full rtl:translate-x-full")) + ' max-h-96 overflow-auto w-full transition-all transform absolute top-0'}>
                                    <h1 className='text-xl text-white text-center'>Subscription Tab</h1>
                                </div>
                                <div className={(currentTab === 2 ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full") + ' max-h-96 overflow-auto w-full transition-all transform absolute top-0'}>
                                    <h1 className='text-xl text-white text-center'>About Tab</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 2xl:max-w-lg '>
                        <div className='bg-bluegray-900 rounded-xl'>
                        <h1 className='py-2 px-4 text-2xl font-medium text-white'>Tags</h1>
                        <hr className='border-gray-600 mb-2' />
                        <div className='flex flex-wrap px-4'>
                            {["League of Legends","Ahri","Ahri LOL","LOL","TFT","Teamfight Tactics"].map((item, index) => (
                                <ProfileTag key={index}>
                                    {item}
                                </ProfileTag>
                            ))}
                        </div>
                        </div>
                          <div className='bg-bluegray-900 rounded-xl mt-4'>
                              <h1 className='py-2 px-4 text-2xl font-medium'>User Reviews</h1>
                              <hr className='border-gray-600 mb-2' />
                            <div style={{ maxHeight: "700px" }} className=' no-scrollbar overflow-auto'>
                                <div className='px-2 lg:px-4 py-2'>
                                    {reviews.map((item, index) => (
                                        <UserReview className="mb-4" key={index} review={item}/>
                                    ))}
                                      {reviews.map((item, index) => (
                                          <UserReview className="mb-4" key={index} review={item} />
                                      ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                  <FAQ disablePaddings={true} className="mt-4" two_col={false} />
              </div>
        </div>
    </div>
  )
}
function SocialMediaIcons(){
    return (
        <div className='flex items-center lg:justify-center gap-2'>
            <div className='bg-darkgray-400 hover:bg-darkgray-350 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl'>
                <p className='text-white text-2xl'>
                    <FaFacebookF />
                </p>
            </div>
            <div className='bg-darkgray-400 hover:bg-darkgray-350 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl'>
                <p className='text-white text-2xl'>
                    <FaYoutube />
                </p>
            </div>
            <div className='bg-darkgray-400 hover:bg-darkgray-350 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl'>
                <p className='text-white text-2xl'>
                    <FaTwitch />
                </p>
            </div>
            <div className='bg-darkgray-400 hover:bg-darkgray-350 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl'>
                <p className='text-white text-2xl'>
                    <FaDiscord />
                </p>
            </div>
        </div>
    )
}
Coach.propTypes = {}

export default Coach
