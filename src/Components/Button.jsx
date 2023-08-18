import React, { useState } from 'react';
import './Button.css';
import Myarray from './Myarray';

const Button = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [myArray, setMyArray] = useState([]);

    const addRecord = () => {

       
        if(Name!==''&& Email!==''){
            const newRecord = {
                name: Name,
                email: Email
            };

        setMyArray([...myArray, newRecord]);
        setName('');
        setEmail('');
        }
        else{
            alert("Enter Something to Add!!")
        }

       
        
    }

    return (
        <div className='records'>
        <div className='field'>
            <input
                type="text"
                className='name'
                placeholder='Enter Name'
                name='name'
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className='email'
                placeholder='Enter Email'
                name='email'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className='btnn' onClick={addRecord}>
                Add
            </button>
            
           
        </div>
        <div className='my-array'>
            <Myarray record={myArray}/>
        </div>
        </div>
    );
}

export default Button;
