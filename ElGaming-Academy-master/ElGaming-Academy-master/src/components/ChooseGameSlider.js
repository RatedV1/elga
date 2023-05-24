import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// games covers 
import lol_cover from '../assets/LOL.png'
import valorant_cover from '../assets/valo.png'
import csgo_cover from '../assets/csgo.png'
import apex_cover from '../assets/Apex.png'
import dota_cover from '../assets/Dota 2.png'
import fifa_cover from '../assets/fifa.png'
import overwatch_cover from '../assets/OW.png'
import lor_cover from '../assets/LOR.png'
import rocket_league_cover from '../assets/RL.png'
import rss_cover from '../assets/RSS.png'
import tft_cover from '../assets/TFT.png'
import ww_cover from '../assets/WW.png'
import clash_royale_cover from '../assets/Clash Royale.png'
import brawlhalla_cover from '../assets/Brawlhalla.png'
import fortnite_cover from '../assets/Fortnite.png'
import 'swiper/css';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom'
function ChooseGameSlider(props) {
  return (
      <div className='w-full h-80 lg:h-96 select-none ignore-swiper'>
          <Swiper
              slidesPerView='auto'
              spaceBetween={0}
              slidesPerGroupAuto={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide className='text-white w-32 h-96 rtl:pl-3 rtl:lg:pl-6 rtl:mr-6 rtl:md:mr-8 rtl:xl:mr-12 rtl:2xl:mr-16 rtl:pr-0 rtl:ml-0 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0  ml-6 md:ml-8 xl:ml-12 2xl:ml-16'>
                  <Link to='game'><div className='w-48 h-80 text-white select-none'>
                      <div className='w-full h-64'>
                          <img src={lol_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>League of Legends</p>
                  </div></Link>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={valorant_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Valorant</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={tft_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Teamfight Tactics</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={overwatch_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Overwatch</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={rocket_league_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Rocket League</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={fortnite_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Fortnite</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={rss_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Rainbow Six Siege</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={apex_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Apex Legends</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={brawlhalla_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Brawlhalla</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={csgo_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>CS:GO</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={clash_royale_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Clash Royale</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={lor_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Legends of Runterra</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={ww_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>World of Warcraft</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 pr-3 lg:pr-6 rtl:pl-3 rtl:lg:pl-6 rtl:pr-0 '>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={dota_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Dota 2</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='text-white w-32 h-96 rtl:mr-0 rtl:ml-6 rtl:md:ml-8 rtl:xl:ml-12 rtl:2xl:ml-16 mr-6 md:mr-8 xl:mr-12 2xl:mr-16'>
                  <div className='w-48 h-80 text-white'>
                      <div className='w-full h-64'>
                          <img src={fifa_cover} alt="" />
                      </div>
                      <p className='font-oskari text-lg ltr:text-left rtl:text-right'>Fifa 22</p>
                  </div>
              </SwiperSlide>
          </Swiper>
      </div>
  )
}

ChooseGameSlider.propTypes = {}

export default ChooseGameSlider
