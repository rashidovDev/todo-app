import React from 'react'

const MyButton = ({children,...props}) => {
  return (
    <button className={`${props.class} text-[#fff] text-[14px] px-1 py-2 rounded-[5px] flex justify-center items-center w-[120px]`}>
        <span className='pr-1 mt-[1px]'>{props.icon}</span><span>{children}</span>
    </button>
  )
}

export default MyButton