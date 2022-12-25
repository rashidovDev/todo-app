import React from 'react'

const MyButton = ({children,...props}) => {
  return (
    <button className={`${props.class} text-[#fff] p-2 rounded-[5px] flex justify-center items-center w-[140px]`}>
        <span className='pr-1 mt-[1px]'>{props.icon}</span><span>{children}</span>
    </button>
  )
}

export default MyButton