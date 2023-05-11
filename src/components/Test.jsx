import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});

export const Test = () => {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [username, setUsername]= useState('')

    const postCities = async () => {
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let userObject = {
            "name": name,
            "username": name,
            "email": email
        }

        console.log(userObject)
    }

    return (
        <>
            <button onClick={postCities}>POST LA to CITIES</button>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name...' value={name} onChange={e=>setName(e.target.value)}></input>
                <input type="text" placeholder='Username...' value={username} onChange={e=>setUsername(e.target.value)}></input>
                <input type="text" placeholder='E-Mail...' value={email} onChange={e =>setEmail(e.target.value)} ></input>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Test