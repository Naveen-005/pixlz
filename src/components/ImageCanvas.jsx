import React, { useRef, useState, useEffect } from "react";
import './ImageCanvas.css'
//import Jimp from "jimp";
import { brightnessChange } from "../scripts/adjustments";

const ImageCanvas = (props) => {

  const canvasRef = useRef(null);
  const[ctx,setCtx]=useState(null)
  const[canvas,setCanvas]=useState(null)

  const img=new Image()
  //let canvas,ctx
  //console.log("Outside brightness: ",props._adjustments.brightness)
  //console.log("props: ",props)

  useEffect(()=>{

    setCanvas(canvasRef.current);
    setCtx(canvas?.getContext('2d'))

    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    
    img.onload = () => {

      canvas.width = img?.width;
      canvas.height = img?.height;
      ctx?.drawImage(img, 0, 0);
    };

    img.src=URL.createObjectURL(props.image)

  
  },[props.image])

  useEffect(()=>{

    console.log("brightness: ",props._adjustments.brightness)

    var imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);

    if(imageData){
      
      imageData=brightnessChange(imageData,props._adjustments.brightness);
      //console.log("image data:",imageData)
      ctx.putImageData(imageData, 0, 0);
    }


    //img.src = canvas.toDataURL();

  },[props._adjustments.brightness])
  

  return (
    <div className="image-container">
      {/*<img src={URL.createObjectURL(props.image)} className="img-fluid" alt="" />*/}
      <canvas ref={canvasRef} className="img-fluid"/>
    </div>
  );
};

export default ImageCanvas;
