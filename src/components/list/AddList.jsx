import React, { useState } from 'react'
import MyButton from '../../utils/MyButton'
import MyInput from '../../utils/MyInput'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFile } from '../../store/developerReducer'
import { useNavigate } from 'react-router-dom'

const AddList = () => { 
  
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addDeveloper = (e) => {
        e.preventDefault()
        const newPost = {
            id : Date.now(),
            name, 
            age,
            email,
            company,
            position
        }
        dispatch(addFile(newPost))
        navigate("/")
    }

  return (
    <div className=' mt-20 md:text-center'>
        <form onSubmit={addDeveloper}>
        <MyInput  name="Ism/Familiya" placeholder="Enter your name" type="text" value={name} setValue={setName}/>
        <MyInput name="Yosh" placeholder="Enter your name" type="text" value={age} setValue={setAge}/>
        <MyInput name="Email" placeholder="Enter your name" type="text" value={email} setValue={setEmail}/>
        <MyInput name="Kompaniya" placeholder="Enter your name" type="text" value={company} setValue={setCompany}/>
        <MyInput name="Pozitsiya" placeholder="Enter your name" type="text" value={position} setValue={setPosition}/>
        <div className=''>
            <Link to="/">
            <MyButton class="cancel">
                Bekor qilish
            </MyButton>
            </Link>
            <MyButton class="save">
                Saqlash
            </MyButton>
        </div>
        </form>
    </div>
  )
}

export default AddList