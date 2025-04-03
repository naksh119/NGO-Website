import React from 'react'

function Preloader() {
  return (
    <>
      {/* ==== preloader start ==== */}
      <div className="preloader">
        <div className="preloader-content text-center d-flex flex-column align-items-center justify-content-center">
          <i className="icon-donation mb-3" />
          <p className="mb-0">
            Mission Hope
            <br />
            Foundation
          </p>
        </div>
      </div>
      {/* ==== / preloader end ==== */}
    </>
  )
}

export default Preloader
