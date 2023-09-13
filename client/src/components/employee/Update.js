import React, { useState } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./Update.css"
import axios from "axios";
import {  useSelector } from "react-redux";
import toast from "react-hot-toast";

const Update = () => {
const data = useSelector(state => state.employee.value)
    const [formdata, setFormdata] = useState({
        firstName: data?.firstName || '',
        lastName: data?.lastName || '',
        email: data?.email || '',
        mobile:data?.mobile || 0,
        dob: data?.dob || '',
        gender: data?.gender || '',
        address: data?.address || '',
        country: data?.country || '',
        city: data?.city || '',
        skill: data?.skill || [],
      });
      console.log(data)
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.put(`http://localhost:2300/employee/${data._id}`, { ...formdata });
          toast.success("Updated Successfully")
          console.log(response.data);
          navigate("/search")
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleCheckbox = (e) => {
        const { value } = e.target;
        const { skill } = formdata;
        if (skill.includes(value)) {
          setFormdata({ ...formdata, skill: skill.filter((val) => val !== value) });
        } else {
          setFormdata({ ...formdata, skill: [...skill, value] });
        }
      };
  return (
    <div className="update">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Edit Employee</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Edit
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "white", padding: "7px", borderTop: "3px solid #00c0ef", marginTop: "5px" }}>
        <div style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>Employee Details</div>
        <div style={{ padding: "10px 10px" }}>
          <form className="employeeFields" onSubmit={handleSubmit}>
            <div className="notSkill">
              <div className="form-div">
                <label htmlFor="id">First Name</label>
                <input id="id" type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} value={formdata.firstName} required />
              </div>
              <div className="form-div">
                <label htmlFor="name">Last Name</label>
                <input id="name" type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} value={formdata.lastName} required />
              </div>
              <div className="form-div">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formdata.email} required />
              </div>

              <div className="form-div">
                <label htmlFor="salary">Mobile Number</label>
                <input id="salary" type="number" name="mobile" placeholder="Mobile Number" onChange={handleInputChange} value={formdata.mobile === 0 ? "" : formdata.mobile} required />
              </div>
              <div className="form-div">
                <label htmlFor="department">Date of Birth</label>
                <input id="department" type="date" name="dob" onChange={handleInputChange} value={formdata.dob} required />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Gender: &nbsp;</p>
                <label>
                  <input type="radio" name="gender" value="male" checked={formdata.gender === "male"} onChange={handleInputChange} /> Male
                </label>
                &nbsp;&nbsp;&nbsp;
                <label>
                  <input type="radio" name="gender" value="female" checked={formdata.gender === "female"} onChange={handleInputChange} /> Female
                </label>
              </div>
              <div className="form-div">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" name="address" placeholder="Address" onChange={handleInputChange} value={formdata.address} required />
              </div>
              <div className="form-div">
                <label htmlFor="country">Country</label>
                <input id="country" type="text" name="country" placeholder="Country" onChange={handleInputChange} value={formdata.country} required />
              </div>
              <div className="form-div">
                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" placeholder="City" onChange={handleInputChange} value={formdata.city} required />
              </div>
            </div>
            <div className="skill-div">
              <label>Skill:</label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="AWS" checked={formdata.skill.includes("AWS")} onChange={handleCheckbox} /> AWS
              </label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="Fullstack" checked={formdata.skill.includes("Fullstack")} onChange={handleCheckbox} /> Full Stack Developer
              </label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="Devops" checked={formdata.skill.includes("Devops")} onChange={handleCheckbox} /> DevOps
              </label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="Middleware" checked={formdata.skill.includes("Middleware")} onChange={handleCheckbox} /> Middleware
              </label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="QA-Automation" checked={formdata.skill.includes("QA-Automation")} onChange={handleCheckbox} /> QA-Automation
              </label>
              <br />
              <label>
                <input type="checkbox" name="skill" value="WebServices" checked={formdata.skill.includes("WebServices")} onChange={handleCheckbox} /> Web Services
              </label>
            </div>
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
              <button type="submit" className="btn-submit">
                Update
              </button>
              <button type="submit" className="btn-clear" onClick={() => navigate('/search')}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
