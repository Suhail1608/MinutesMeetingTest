'use client'
import imageCompression from 'browser-image-compression';
import React, { useState } from 'react'
import './FileUpload.scss'
const FileUpload = ({ value, setValue, placeholder,setFlag }) => {

  const compressImage = async (originalImage) => {
    const options = {
      maxSizeMB: 5,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedImage = await imageCompression(originalImage, options);
      return compressedImage;
    } catch (error) {
      throw error;
    }
  };

  async function handleImage(e) {
    setFlag(true)
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedImage = await compressImage(file);
        
        const reader = new FileReader();
        reader.readAsDataURL(compressedImage);
        reader.onloadend = () => {
          setValue(reader.result.toString());
          setFlag(false)
        };
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  }
  
  return (
    <div className='file-box'>
      <input
        required={true}
        className='file-input'
        id='fileIO'
        placeholder={placeholder}
        onChange={(e) => handleImage(e)}
        type='file'
        accept='image/jpeg, image/png'
      ></input>
      <label htmlFor='fileIO' className='file-upload-btn'>
        Upload
      </label>
    </div>
  );
};


export default FileUpload