import React, { useRef, useState, useEffect } from "react";
import './ImageCanvas.css'
//import Jimp from "jimp";

const ImageCanvas = (props) => {

  const canvasRef = useRef(null);

  const img=new Image()

  useEffect(()=>{

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src=URL.createObjectURL(props.image)

  
  },[props.image])
  



  return (
    <div className="image-container">
      {/*<img src={URL.createObjectURL(props.image)} className="img-fluid" alt="" />*/}
      <canvas ref={canvasRef} className="img-fluid"/>
    </div>
  );
};

export default ImageCanvas;
