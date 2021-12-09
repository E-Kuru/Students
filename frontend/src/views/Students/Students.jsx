import React, { useState , useEffect} from 'react'
import Nav from '../../components/Nav/Nav'

import './Students.css'

const Students = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(res => setStudents(res))
    },[])

    return (
        <>
            <Nav/>
                <h1 style={{textAlign : 'center', margin : '1% 0', color :'rgb(18, 0, 182)'}}>Liste des étidiants</h1>
            <div className="allStud">
            {students.map(e => (
                <div className='oneStud'>
                <h2>Name : {e.name}</h2>
                <h2>Age : {e.age}</h2>
                <h2>Stage : {e.gotStage ? 'Oui' : 'Non'}</h2>
                <h2>Formation : {e.formation}</h2>
                </div>
            ))}
            </div>
        </>
    )
}

export default Students
