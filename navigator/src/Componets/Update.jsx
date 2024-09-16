import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function Update({ record, setRecord }) {
    const [num, setNum] = useState("");
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentField, setStudentField] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const itemToUpdate = record.find((item) => item.id === parseInt(num));
        if (itemToUpdate) {
            setEnrollmentNumber(itemToUpdate.enrollmentNumber);
            setStudentName(itemToUpdate.studentName);
            setStudentField(itemToUpdate.studentField);
            setBookName(itemToUpdate.bookName);
            setBookAuthor(itemToUpdate.bookAuthor);
            setPurchaseDate(itemToUpdate.purchaseDate);
            setReturnDate(itemToUpdate.returnDate);
        }
    }, [num, record]);

    const handleUpdate = () => {
        const updatedRecord = record.map((item) => {
            if (item.id === parseInt(num)) { 
                return {
                    ...item,
                    enrollmentNumber,
                    studentName,
                    studentField,
                    bookName,
                    bookAuthor,
                    purchaseDate,
                    returnDate
                }; 
            }
            return item; 
        });
        setRecord(updatedRecord); 
        navigate("/");
    };

    return (
        <div>
            <h1>Update</h1>
            <input type="number" placeholder="Enter ID" onChange={(e) => setNum(e.target.value)} value={num}/>
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
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default Update;
