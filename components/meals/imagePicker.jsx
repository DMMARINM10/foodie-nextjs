"use client";

import classes from "@/styles/components/meals/imagePicker.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef(null);

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = () => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet</p>
          ) : (
            <Image src={pickedImage} alt="selected image" fill />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
