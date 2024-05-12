import React, { useRef, useEffect } from "react";
import { brightnessChange } from "../scripts/adjustments";
import './ImageCanvas.css';

const ImageCanvas = (props) => {
  const canvasRef = useRef(null);
  const brightnessLayerRef = useRef(null);

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
    //const ctx = canvas.getContext('2d');

    const alpha=0.4*(Math.abs(props._adjustments.brightness)/100)
    console.log("alpha:",alpha)

    const brightnessLayerCanvas = brightnessLayerRef.current;
    const brightnessLayerCtx = brightnessLayerCanvas.getContext('2d');
    brightnessLayerCanvas.width=canvas.width;
    brightnessLayerCanvas.height=canvas.height;
    brightnessLayerCtx.clearRect(0, 0, brightnessLayerCanvas.width, brightnessLayerCanvas.height);
    brightnessLayerCtx.fillStyle = `rgba(128, 128, 128, ${alpha})`;
    brightnessLayerCtx.fillRect(0, 0, brightnessLayerCanvas.width, brightnessLayerCanvas.height);

    const imageData = brightnessLayerCtx.getImageData(0, 0, canvas.width, canvas.height);
    const adjustedData = brightnessChange(imageData, props._adjustments.brightness);
    brightnessLayerCtx.putImageData(adjustedData, 0, 0);

  }, [props._adjustments.brightness]);

  return (
    <div className="image-container">
      <canvas ref={canvasRef} className="img-fluid"/>
      <canvas ref={brightnessLayerRef} className="img-fluid" style={{ position: 'absolute', top: 0, left: 0 }}/>
    </div>
  );
};

export default ImageCanvas;
