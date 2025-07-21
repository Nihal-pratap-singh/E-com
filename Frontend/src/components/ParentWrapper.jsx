import React from 'react'

const ParentWrapper = ({children}) => {
  return (
    <div className='text-red-600'>{children}</div>
  )
}

export default ParentWrapper