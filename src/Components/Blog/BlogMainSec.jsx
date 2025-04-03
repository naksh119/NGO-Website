import React from 'react'

function BlogMainSec() {
  return (
    <>
       <div style={{ height: "auto", minHeight: "100%" }}>
      {" "}
      <div
        style={{
          textAlign: "center",
          width: 800,
          marginLeft: "-400px",
          position: "absolute",
          top: "30%",
          left: "50%"
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 150,
            lineHeight: 150,
            fontWeight: "bold"
          }}
        >
          404
        </h1>
        <h2 style={{ marginTop: 20, fontSize: 30 }}>Not Found</h2>
        <p>The resource requested could not be found on this server!</p>
      </div>
    </div>
    <div
      style={{
        color: "#f0f0f0",
        fontSize: 12,
        margin: "auto",
        padding: "0px 30px 0px 30px",
        position: "relative",
        clear: "both",
        height: 100,
        marginTop: "-101px",
        backgroundColor: "#474747",
        borderTop: "1px solid rgba(0,0,0,0.15)",
        boxShadow: "0 1px 0 rgba(255, 255, 255, 0.3) inset"
      }}
    >
      <br />
      Proudly powered by LiteSpeed Web Server
      <p>
        Please be advised that LiteSpeed Technologies Inc. is not a web hosting
        company and, as such, has no control over content found on this site.
      </p>
    </div>
    </>
  )
}

export default BlogMainSec
