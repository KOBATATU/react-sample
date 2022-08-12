import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
    if (files !== null && files.length > 0) {
      fileRef.current = files[0];
    }
  };

  return (
    <div>
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        画像をuploadする
      </p>
      <input
        type="file"
        ref={inputImageRef}
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />
    </div>
  );
};

export default ImageUploader;
