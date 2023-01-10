import React from 'react'
import { EventWidget } from './Event.st'
import { RiCalendarEventLine } from 'react-icons/ri'
import { MdPlace } from 'react-icons/md'

const Event = () => {
  return (
    <EventWidget>
        <div className="box1-top"><RiCalendarEventLine /> Upcoming Event</div>
        <div className="box1-bottom">
          <div className='date'>
            <div className="date">09 January</div>
            <div className="day">Thursday</div>
          </div>
          <div className="cover"><img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202212/collage_maker-30-dec-2022-01.41-pm-sixteen_nine.jpg?size=948:533" alt="Ganesh Chaturthi" /></div>
          <div className="event-name">Sankashthi Chaturthi</div>
          <div className="venue"><MdPlace/> TBA</div>
        </div>
    </EventWidget>
  )
}

export default Event