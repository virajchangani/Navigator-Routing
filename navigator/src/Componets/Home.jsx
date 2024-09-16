import React from 'react';
import './Style.css';

function Home({ record }) {
  return (
    <div>
      <h1>Library Management System</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Enrollment Num</th>
            <th>Student Name</th>
            <th>Student Field</th>
            <th>Book Name</th>
            <th>Book Author Name</th>
            <th>Purchase Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {record.map((e) => (
            <tr key={e.i}>
              <td>{e.id}</td>
              <td>{e.enrollmentNumber}</td>
              <td>{e.studentName}</td>
              <td>{e.studentField}</td>
              <td>{e.bookName}</td>
              <td>{e.bookAuthor}</td>
              <td>{e.purchaseDate}</td>
              <td>{e.returnDate}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
