import React from 'react'
import Header from '../../Header'
import TeamDetailBannerSec from './TeamDetailBannerSec'
import TeamDetailMainSec from './TeamDetailMainSec'
import TeamDetailGallSec from './TeamDetailGallSec'
import Footer from '../../Footer'


function TeamDetails() {
  return (
    <>
     <Header/>
     <TeamDetailBannerSec/>
     <TeamDetailMainSec/>
     <TeamDetailGallSec/>
     <Footer/>
    </>
  )
}

export default TeamDetails
