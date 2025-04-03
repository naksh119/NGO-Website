import React from 'react'

function Cursore() {
  return (
    <>
      <div className="mouseCursor cursor-outer" />
    <div className="mouseCursor cursor-inner" />
    {/* ==== / custom cursor end ==== */}
    {/* ==== scroll to top start ==== */}
    <button
      className="progress-wrap"
      aria-label="scroll indicator"
      title="back to top"
    >
      <span />
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </button>
    {/* ==== / scroll to top end ==== */}
    {/* ==== color switcher start ==== */}
    {/* ==== / color switcher end ==== */}

    </>
  )
}

export default Cursore
