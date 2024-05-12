import React, { useRef, useEffect } from "react";
import { brightnessChange } from "../scripts/adjustments";
import './ImageCanvas.css';

const ImageCanvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = URL.createObjectURL(props.image);

    return () => {
      URL.revokeObjectURL(img.src);
    };
  }, [props.image]);

  const brightnessFirstRender=useRef(true);
  useEffect(() => {

    if(brightnessFirstRender.current){
      brightnessFirstRender.current=false
      return
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const adjustedData = brightnessChange(imageData, props._adjustments.brightness);
    ctx.putImageData(adjustedData, 0, 0);

  }, [props._adjustments.brightness]);

  return (
    <div className="image-container">
      <canvas ref={canvasRef} className="img-fluid"/>
    </div>
  );
};

export default ImageCanvas;
