import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function Create({ record, setRecord }) {
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentField, setStudentField] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        setRecord([
            ...record,
            {
                id: record.length + 1,
                enrollmentNumber: enrollmentNumber,
                studentName: studentName,
                studentField: studentField,
                bookName: bookName,
                bookAuthor: bookAuthor,
                purchaseDate: purchaseDate,
                returnDate: returnDate,
            },
        ]);
        navigate("/");
    };

    return (
        <div>
            <h1>Create</h1>
            <input type="text" placeholder="Enrollment Number" onChange={(e) => setEnrollmentNumber(e.target.value)} value={enrollmentNumber}/>
            <input type="text" placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} value={studentName}/>
            <input type="text" placeholder="Student Field" onChange={(e) => setStudentField(e.target.value)} value={studentField}/>
            <input type="text" placeholder="Book Name" onChange={(e) => setBookName(e.target.value)} value={bookName}/>
            <input type="text" placeholder="Book Author Name" onChange={(e) => setBookAuthor(e.target.value)} value={bookAuthor}/>
            <label>Book Purchase Date</label><br />
            <input type="date" onChange={(e) => setPurchaseDate(e.target.value)} value={purchaseDate}/>
            <br />
            <label>Book Return Date</label><br />
            <input type="date" onChange={(e) => setReturnDate(e.target.value)} value={returnDate}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Create;
