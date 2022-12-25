import React from 'react'

const MyButton = ({children,...props}) => {
  return (
    <button className={` bg-[${props.color}] text-[#fff] p-2 rounded-[5px]`}>
       {children}
    </button>
  )
}

export default MyButton