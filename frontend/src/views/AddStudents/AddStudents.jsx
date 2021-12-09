import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav'

const AddStudents = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [gotStage, setgotStage] = useState(false)
    const [formation, setformation] = useState('')

    const navigate = useNavigate();

    const handleSubmit = e => {

        e.preventDefault()

        alert("L'ajout est confirmé !")

        const student = {
            name : name,
            age : age,
            gotStage : gotStage,
            formation : formation
        }

        fetch('http://localhost:5000/addStudent',{
            method : 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(student)
        })
        .then(res => {
            console.log('fetch add student')
            if(res.status === 406){
                console.log('fetch error ')
                alert(`Error ${res.status} this students already exist`)
            } 
            else {
                console.log('fetch navigate ')
                navigate('/')
            }
        })
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleAgeChange = e => {
        setAge(e.target.value)
        
    }
    const handleGotStageChange = e => {
        if(e.target.value  === true || e.target.value === false){
            setgotStage(e.target.value)
        }
    }
    const handleFormationChange = e => {
        setformation(e.target.value)

    }

    return (
        <>
            <Nav/>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} value={name} placeholder='Your Name'/>
                <input type="number" onChange={handleAgeChange} placeholder='Your age'/>
                <select name="gotStage" id="stage-status-select" onChange={handleGotStageChange}>
                    <option value="">Avez-vous un stage ?</option>
                    <option value={false}>Oui</option>
                    <option value={true}>Non</option>
                </select>
                <input type="text" onChange={handleFormationChange} value={formation} placeholder='Your formation' />
                <button type='submit'></button>   
            </form>

        </>
    )
}

export default AddStudents
