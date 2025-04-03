import React from 'react'
import Header from '../../Header'
import PrivacyPolicyBannerSec from './PrivacyPolicyBannerSec'
import PrivacyPolicyMainSec from './PrivacyPolicyMainSec'
import Footer from '../../Footer'

function PrivacyPolicy() {
  return (
    <>
      <Header/>
      <PrivacyPolicyBannerSec/>
      <PrivacyPolicyMainSec/>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy
