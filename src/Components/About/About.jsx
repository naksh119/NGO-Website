import React from 'react'
import Header from '../../Header'
import AboutBanner from './AboutBanner'
import AboutHeroSec from './AboutHeroSec'
import AboutCounterSec from './AboutCounterSec'
import AboutCounterTeamSec from './AboutCounterTeamSec'
import AboutFreqContactSec from './AboutFreqContactSec'
import AboutTestimonialSec from './AboutTestimonialSec'
import AboutBlogGallSec from './AboutBlogGallSec'
import Footer from '../../Footer'

function About() {
  return (
    <>
    <Header/>
    <AboutBanner/>
    <AboutHeroSec/>
    <AboutCounterSec/>
    <AboutCounterTeamSec/>
    <AboutFreqContactSec/>
    <AboutTestimonialSec/>
    <AboutBlogGallSec/>
    <Footer/>
    </>
  )
}

export default About
