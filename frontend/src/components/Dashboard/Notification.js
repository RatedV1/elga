import React from 'react'
import PropTypes from 'prop-types'

function Notification(props) {
  return (
      <div className={props.className+' bg-darkgray-400 px-4 lg:px-5 py-4 rounded-lg flex'}>
          <div className='w-20 h-32 lg:w-16 lg:h-24 xl:w-24 xl:h-36 rounded-lg overflow-hidden'>
              <img src={props.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div className='flex  flex-col rtl:mr-4 rtl:xl:mr-8 ltr:ml-4 ltr:xl:ml-8 ltr:text-left rtl:text-right flex-1'>
              <p className='text-primary-500 text-2xl lg:text-xl xl:text-2xl font-oskari'>
                  {props.title} 
              </p>
              {props.children}
              <div className='lg:self-end flex-1 flex items-end'>
                  <button className='bg-primary-500 lg:mt-4 hover:bg-primary-600 transition-colors font-oskari text-lg lg:text-base 2xl:text-lg lg:font-medium rtl:xl:mr-6 ltr:xl:ml-6 px-4 lg:px-4 xl:px-8 py-1 rounded-full lg:rounded-xl uppercase'>
                      {props.button_title} 
                  </button>
              </div>
          </div>
      </div>
  )
}

Notification.propTypes = {}

export default Notification
