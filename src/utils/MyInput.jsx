import React from 'react'

const MyInput = (props) => {
  return (
    <div className='my-5 w-[90%] m-auto'>
        <label htmlFor="" className='mr-2 text-[#999] text-[14px]'>
            name
        </label>
        <input 
        className={`border w-[250px] border-[#DEE2E6] outline-[#407BFF] px-3 py-1`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        />
    </div>
  )
}

export default MyInput