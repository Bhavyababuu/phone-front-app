// ImageUploadComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Uploadfile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
    </div>
  );
};

export default Uploadfile;
