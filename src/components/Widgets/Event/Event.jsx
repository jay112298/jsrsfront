import React from 'react'
import { EventWidget } from './Event.st'

const Event = () => {
  return (
    <EventWidget>
        <div className="box1-top">Upcoming Events</div>
        <div className="box1-bottom">
            This is a section where the upcoming events will be displayed.
        </div>
    </EventWidget>
  )
}

export default Event