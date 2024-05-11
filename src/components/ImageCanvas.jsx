import { useRef,useState, useEffect } from "react";
import './ImageCanvas.css'

const ImageCanvas = (props) => {
  

  return (

<div className="image-container">
  <img src={URL.createObjectURL(props.image)} className="img-fluid" alt="" />
</div>

  );
};

export default ImageCanvas;
