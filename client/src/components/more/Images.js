import React, { useEffect, useState } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import "./Images.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Images = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState([]);

  const fetchImage = async () => {
    try {
      const res = await axios.get("http://localhost:2300/image")
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios
      .post("http://localhost:2300/image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    fetchImage();
  };
  useEffect(() => {
    fetchImage();
  }, []);
  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2300/image/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    fetchImage()
    toast.success("Deleted Successfully")
  };

  return (
    <div className="images">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Image Upload</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Image Upload
          </p>
        </div>
      </div>
      <div className="content-div">
        <div>
          <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={handleSubmit} className="upload-btn">
            Upload
          </button>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Images</h1>
          <div className="img-div">
            {data.map((data, i) => {
              return (
                <div className="img" key={i}>
                  <img src={`http://localhost:2300/images/${data.image}`} alt="" width="100" style={{ border: "1px solid #eee" }} />
                  <button className="delete-btn" onClick={() => handleDelete(data._id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
