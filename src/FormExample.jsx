import { useState } from "react";

function FormExample() {
    const [formData ,setFormData ] = useState({
        name:"",
        email:"",
        password:"",
    });

    const [submittedData,setSubmittedData]= useState(null);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handlesubmit = (e)=>{
        e.preventDefault();
        setSubmittedData(formData);
    };

  return (
    <>
        <div style={{padding:"20px"}}>
            <h2>Forms</h2>
            <form onSubmit={handlesubmit}>
                <div>
                    <input 
                        type = "text"
                        name = "name"
                        placeholder="Enter Email "
                        value = {formData.name}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <input 
                        type="email"
                        name = "email"
                        placeholder="Enter Email"
                        value = {formData.email}
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <input 
                        type = "password"
                        name="password"
                        placeholder="Enter Your Password"
                        value={formData.password}
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <button type = "submit" >Submit</button>
                </div>
            </form>
            {submittedData && (
                <div style={{marginTop:"20px"}}>
                    <h3>Entered Data:</h3>
                    <p><strong>Name : {submittedData.name}</strong></p>
                    <p><strong>Email : {submittedData.email}</strong></p>
                    <p><strong>Password : {submittedData.password}</strong></p>
                </div>
            )}
        </div>
    </>
  );
}

export default FormExample;