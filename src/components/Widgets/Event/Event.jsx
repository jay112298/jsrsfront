import React from 'react'
import { EventWidget } from './Event.st'
import { RiCalendarEventLine } from 'react-icons/ri'

const Event = () => {
  return (
    <EventWidget>
        <div className="box1-top"> <RiCalendarEventLine /> Upcoming Events</div>
        <div className="box1-bottom">
            This is a section where the upcoming events will be displayed.
        </div>
    </EventWidget>
  )
}

export default Event