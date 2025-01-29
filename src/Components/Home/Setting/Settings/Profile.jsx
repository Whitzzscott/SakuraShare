import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import ServerAPI from "../../../../Config/ServerAPI";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [compressedFile, setCompressedFile] = useState(null);
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);

      fetch(`${ServerAPI.BaseURL}/modoruser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: storedUsername }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.message) {
            if (data.message.includes('admin: yes')) {
              setRole('admin');
            } else if (data.message.includes('mod: yes')) {
              setRole('mod');
            }
          }
        })
        .catch((error) => console.error('Error fetching user role:', error));
    }
  }, []);

  const onDrop = async (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        setErrorMessage('Invalid file type. Please upload a valid image (jpeg, png, gif, webp).');
        return;
      }

      const file = acceptedFiles[0];

      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: 'image/jpeg',
      });

      setCompressedFile(compressedFile);
      setImage(URL.createObjectURL(compressedFile));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error processing the image.');
      console.error('Error compressing image:', error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    onDrop,
  });

  const handleSubmit = async () => {
    if (!compressedFile) {
      setErrorMessage('No image to submit.');
      return;
    }

    if (!role || !username) {
      setErrorMessage('Failed to fetch user role or username.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', compressedFile, 'profile.jpg');
      formData.append('username', username); // Add username to FormData
      formData.append('role', role); // Add role to FormData

      const uploadResponse = await fetch(`${ServerAPI.BaseURL}/upload`, {
        method: 'POST',
        body: formData,
      });

      const uploadResult = await uploadResponse.json();

      if (uploadResponse.ok && uploadResult.imageId) {
        const imageId = uploadResult.imageId;

        const profileResponse = await fetch(`${ServerAPI.BaseURL}/userProfile`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            imageId,
          }),
        });

        if (profileResponse.ok) {
          setErrorMessage('');
          console.log('Profile updated successfully.');
        } else {
          const profileError = await profileResponse.json();
          setErrorMessage(profileError.message || 'Failed to update profile.');
        }
      } else {
        setErrorMessage(uploadResult.message || 'Failed to upload image.');
      }
    } catch (error) {
      setErrorMessage('Error uploading image or updating profile.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      <p className="text-gray-600 mt-1">Customize your profile information and appearance here.</p>

      <div className="mt-6">
        <div
          {...getRootProps()}
          className={`p-6 bg-white border-2 border-dashed rounded-lg text-center cursor-pointer ${
            isDragActive ? 'border-green-500' : 'border-gray-300'
          } hover:bg-gray-50 transition`}
        >
          <input {...getInputProps()} />
          <p>Drag & drop a profile picture here, or click to select</p>
        </div>

        {image && (
          <div className="mt-4">
            <h3 className="font-semibold">Profile Picture Preview:</h3>
            <img
              src={image}
              alt="Profile Preview"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 mt-2"
            />
          </div>
        )}

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-between w-full py-3 px-6 border border-gray-300 text-gray-800 font-semibold rounded-lg group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
        >
          <span>Submit</span>
          <span className="ml-2 text-xl text-gray-500 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]">
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
