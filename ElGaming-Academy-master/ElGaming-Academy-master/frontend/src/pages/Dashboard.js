import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import Calendar from '../components/General/Calendar'
import 'simplebar-react/dist/simplebar.min.css';
import WelcomeBanner from '../components/Dashboard/WelcomeBanner'
import VideoLibrary from '../components/Dashboard/VideoLibrary'
import NotificationsArea from '../components/Dashboard/NotificationsArea';

function Dashboard(props) {
    const [notificationsThisMonth, setNotificationsThisMonth] = useState(0);
    const scrollToCalendar = () => {
        const section = document.querySelector('#calendar');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  return (
      <div className='text-white side-paddings mt-8 lg:mt-16'>
        <WelcomeBanner username={"ReBack"} />
        <div className='mt-8 lg:mt-16 flex flex-wrap lg:flex-nowrap '>
            <div className='lg:flex-1 w-full lg:w-auto'>
                <div className='flex items-center'>
                      <h1 className='font-koverwatch text-5xl'>Notifications</h1>
                      <div>
                          <button onClick={scrollToCalendar} className={(notificationsThisMonth > 0 ? "bg-warn-500 hover:bg-warn-600" : " bg-primary-500 hover:bg-primary-600") +' transition-colors font-oskari xl:text-lg font-medium rtl:mr-4 rtl:xl:mr-6 ltr:ml-4 ltr:xl:ml-6 px-4 xl:px-8 py-1 rounded-xl uppercase'}>
                             Go to calendar
                          </button>
                      </div>
                </div>
                <NotificationsArea/>
            </div>
            <VideoLibrary/>
        </div>
        <div className='ltr:text-left rtl:text-right mt-8' id="calendar">
              <h1 className='font-koverwatch text-5xl'>Your calendar</h1>
              <Calendar setNotificationsThisMonth={setNotificationsThisMonth} className="mt-4 rounded-lg bg-gradient-to-b from-darkgray-500 to-darkgray-600 py-4 lg:py-8 px-1 lg:px-4"></Calendar>
        </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
