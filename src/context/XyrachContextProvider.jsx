import React, { useState } from 'react'
import xyrachContext from './context'
const XyrachContextProvider = () => {
    const [blogid, setBlogid] = useState('')
  return (
    <xyrachContext.Provider value={{blogid, setBlogid}}>
        {children}
    </xyrachContext.Provider>
  )
}

export default XyrachContextProvider