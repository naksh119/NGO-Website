import React from 'react'
import Header from '../../Header'
import BlogGridBannerSec from './BlogGridBannerSec'
import BlogGridCards from './BlogGridCards'
import Footer from '../../Footer'

function BlogGrid() {
  return (
    <>
        <Header/>
        <BlogGridBannerSec/>
        <BlogGridCards/>
        <Footer/>
    </>
  )
}

export default BlogGrid
