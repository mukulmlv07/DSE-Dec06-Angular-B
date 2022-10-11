import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
    
  return ReactDOM.createPortal(
    <div>PortalDemo</div>,
    document.getElementById('portalDemo')
  )
}

export default PortalDemo