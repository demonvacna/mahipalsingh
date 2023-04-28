import React from 'react'

function Overlay({click, open}) {
  return (
    <div className={open?"overlay open":"overlay"} onClick={click}></div>
  )
}

export default Overlay;