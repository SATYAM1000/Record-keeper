import React from 'react';
import './Button.css';

function Myarray(props) {
    let newArray=props;
    const deleteRecord = (index) => {
        const updatedRecords = newArray.record.filter((_, i) => i !== index);
       newArray=updatedRecords;
    };

    return (
        <div className='myclass'>
            <ul className='hero'>
                {newArray.record.map((record, index) => (
                    <li key={index}>
                        <div className='person-name'>{record.name}</div>
                        <div className='person-email'>{record.email}</div>
                        <div className='delete-button'>
                            <button type='button' onClick={() => deleteRecord(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Myarray;
