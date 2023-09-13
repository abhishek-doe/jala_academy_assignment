import React from 'react'

const Footer = ({width}) => {



  return (
    <div style={{position: "absolute", bottom: "0", right: '0', left: '0', marginTop: "auto", borderTop: "1px solid #c6c6c6", background: "white"}}>
        <p style={width ? {padding: "6px 0"} : { padding: "6px 0 6px 16rem", fontSize: ".7rem", display: "flex", justifyContent: "center", alignItems: "center"}}>Copyright &#169; 2023 &nbsp; <span style={{color: "#3c8dbc"}}>JALA Technologies</span>. All rights reserved</p>
    </div>
  )
}

export default Footer
