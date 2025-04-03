import React from 'react'
import Header from '../../Header'
import EventDetailBanner from './EventDetailBanner'
import EventMainSec from './EventMainSec'
import EventGallSec from './EventGallSec'
import Footer from '../../Footer'

function EventDetails() {
  return (
    <>
        <Header/>
        <EventDetailBanner/>
        <EventMainSec/>
        <EventGallSec/>
        <Footer/>
    </>
  )
}

export default EventDetails
