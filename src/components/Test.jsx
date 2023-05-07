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

    const handleClick = async () => {
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }
    
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     db.collection('testCollection')
    //         .get()
    //         .then(querySnapshot => {
    //             const docs = [];
    //             querySnapshot.forEach(doc => {
    //                 docs.push(doc.data());
    //             });
    //             setData(docs);
    //         });
    // }, []);

    return (
        <div>
            <button onClick={handleClick}>POST LA to CITIES</button>
        </div>
    );
}

export default Test