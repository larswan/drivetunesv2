import { useState, useEffect } from 'react';
import { db } from '../firebase';

export const Test =()=> {
    
    const data = {
        firstName: 'Larson',
        lastName: 'Collier',
        age: 30,
    };

    db.collection('testData')
        .doc('testNames')
        .set(data)
        .then(() => {
            console.log('Document successfully written!');
        })
        .catch(error => {
            console.error('Error writing document: ', error);
        });

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



            {/* {data.map(item => (
                <div key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                </div>
            ))} */}
        </div>
    );
}

export default Test