import React from 'react'

const Display = (props) => {
  console.log('Display component:', props.count)
  return (
    <div>
      <input value={props.count} className='inputbar' type="text" placeholder='C' />
    </div>
  )
}

export default Display
