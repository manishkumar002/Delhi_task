import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Veiw() {
  const [data, setData] = useState([]);

  useEffect(() => {
    demo();
  }, []);

  function demo() {
    fetch('http://localhost:8000/api/content', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className="container">
      <div className='table table-responsive'>
      <table className="table">
        <thead className="thead-dark">
          <tr style={{ background: '#302b63' }}>
            <th>Id</th>
            <th>FNAME</th>
            <th>LNAME</th>
            <th>EMAIL</th>
            <th>COUNTRY</th>
            <th>STATE</th>
            <th>CITY</th>
            <th>GENDER</th>
            <th>BIRTH</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
                           <td>{index + 1}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>{item.state}</td>
              <td>{item.city}</td>
              <td>{item.gender}</td>
              <td>{item.birth}</td>
              <td>{item.age}</td>  
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Veiw;





