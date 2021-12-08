import React, { useState , useEffect} from 'react'

import Nav from '../../components/Nav/Nav'

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
            {students.map(e => (
                <h2>{e.name}</h2>
            ))}
        </>
    )
}

export default Students
