import React, { useState } from 'react'
import MyInput from '../../utils/MyInput'

const AddList = () => { 
  
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')

  return (
    <div className='w-[100%] mt-20 md:text-center pl-7 md:pl-0'>
        <form onSubmit={() => 9}>
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        <MyInput />
        </form>
    </div>
  )
}

export default AddList