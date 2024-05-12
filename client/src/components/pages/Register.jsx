
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [age, setAge] = useState("");
  
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
  
    const alphaRegex = /^[a-zA-Z]+$/;

    if (!fname.match(alphaRegex)) {
      alert("Please enter only alphabets in the First Name field.");
      return;
    }

    if (!lname.match(alphaRegex)) {
      alert("Please enter only alphabets in the Last Name field.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (gender !== "Male" && gender !== "Female" && gender !== "Others") {
      alert("Please select a gender.");
      return;
    }

    if (isNaN(age) || age < 0 || age > 150) {
      alert("Please enter a valid age.");
      return;
    }

    const data = {
      fname: fname,
      lname: lname,
      email: email,
      country: country,
      state: state,
      city: city,
      gender: gender,
      birth: birth,
      age: age
    };

    fetch(`http://localhost:8000/api/content`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Content Added Successfully");
        navigate("/view");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (birth) {
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birth;
      setAge(calculatedAge);
    } else {
      setAge("");
    }
  }, [birth]);


  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/country', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((result) => result.json())
      .then((res) => {
        setCountryData(res);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[])

  useEffect(()=>{
    if(country){
      fetch(`http://localhost:8000/api/state/${country}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((result) => result.json())
        .then((res) => {
          setStateData(res);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
   
   
  },[country])

  useEffect(()=>{
    
    if(state){
      fetch(`http://localhost:8000/api/city/${state}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((result) => result.json())
        .then((res) => {
          setCityData(res);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
   
  },[state])



  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
         

          <div className="col-sm-6 py-5">
            <img src="https://img.freepik.com/free-vector/blogging-concept-illustration_114360-4480.jpg?w=1060&t=st=1687179733~exp=1687180333~hmac=1f4a16781ceae33fdb25c5d084b4b0f941e77ca41f5c19446a23c0250eb2f493" style={{ width: "100%" }} alt="blogging illustration" />
          </div>
          <div className="col-sm-6 blo">
            <center className="py-3">
              <h3 style={{ color: "black" }}>
                Regi<u style={{ color: "#fdc700" }}>ster</u>
              </h3>
            </center>
            <form onSubmit={handleAdd}>
              <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="form-control w-100 " placeholder="Enter Your FirstName" /><br />
              <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="form-control w-100 " placeholder="Enter Your LastName" /><br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control w-100 " placeholder="Enter Your Email" /><br />

<select  onChange={(e) => {setCountry(e.target.value); setCityData(null);  setStateData(null)}} className="form-control w-100 ">
  <option value={null}>Select Country</option>
  {countryData?.map((item, i) => (
    <option key={i} value={item.code}>
      {item.name}
    </option>
  ))}
</select><br/>

<select  onChange={(e) => setState(e.target.value)} className="form-control w-100 ">
  <option value={null}>Select State</option>
  {stateData?.map((item, i) => (
    <option key={i} value={item.code}>
      {item.name}
    </option>
  ))}
</select><br/>


<select  onChange={(e) => setCity(e.target.value)} className="form-control w-100 ">
  <option value={null}>Select City</option>
  {cityData?.map((item, i) => (
    <option key={i} value={item.code}>
      {item.name}
    </option>
  ))}
</select><br/>
                    


              <label>
                Male <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
              </label>{" "}
              <label>
                Female <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
              </label>{" "}
              <label>
                Others <input type="radio" name="gender" value="Others" checked={gender === 'Others'} onChange={(e) => setGender(e.target.value)} />
              </label><br />

              <br />
              <select value={birth} onChange={(e) => setBirth(e.target.value)} className="form-control w-100 ">
              <option value={null}>Select Your Birth Year</option>
                {[...Array(16)].map((item, index) => (
                  <option key={index}>{1999 + index}</option>
                ))}
              </select><br />

              <input type="text" value={age} className="form-control w-100 " placeholder="calculated automatically basis of date of birth" readOnly /><br />

              <input type="submit" className="form-control" value="Submit" style={{ background: "#fdc700" }} /><br />
            </form><br />
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
}