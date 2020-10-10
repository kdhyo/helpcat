import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { CloudDownloadOutlined } from "@ant-design/icons";
import axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

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
              width: 214,
              height: 150,
              border: "2px solid #bababa",
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

      <div style={{ display: "flex", width: "214px", height: "150px", overflowX: "scroll", border: "2px solid #bababa"}}>
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img alt="uploadImages" style={{ minWidth: "200px", width: "200px", height: "120px" }} src={`${image}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
