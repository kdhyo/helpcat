import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { CloudDownloadOutlined } from "@ant-design/icons";
import axios from "axios";

function FileReUpload(props) {
  const [Images, setImages] = useState(
    props.imgLinks.map((data, i)=>(data.imglink))
  );

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("imgFile", files[0]);
    axios.post("http://localhost:4000/api/upload", formData, config).then((response) => {
      if (response.data.location) {
        setImages([...Images, response.data.location]);
        props.refreshFunction([...Images, response.data.location]);
      } else {
        alert("파일을 저장하는 데에 실패했습니다.");
      }
    });
  };

  const deleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <CloudDownloadOutlined />
          </div>
        )}
      </Dropzone>

      <div style={{ display: "flex", width: "350px", height: "257px", overflowX: "scroll" }}>
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img alt="reUploadImages" style={{ minWidth: "300px", width: "300px", height: "240px" }} src={`${image}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileReUpload;
