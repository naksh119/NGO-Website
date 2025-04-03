import React from 'react'
import Header from '../../Header'
import BlogDetailBannerSec from './BlogDetailBannerSec'
import BlogDetailMainSec from './BlogDetailMainSec'
import BlogDetailGallSec from './BlogDetailGallSec'
import Footer from '../../Footer'

function BlogDetails() {
  return (
    <div>
      <Header/>
      <BlogDetailBannerSec/>
      <BlogDetailMainSec/>
      <BlogDetailGallSec/>
      <Footer/>
    </div>
  )
}

export default BlogDetails
