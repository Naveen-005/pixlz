import { useState, useEffect,useRef } from 'react'

import './App.css'
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Sidebar from './components/Sidebar'
import ImageCanvas from './components/ImageCanvas'
import Adjustments from './components/Adjustments'


function App() {

  const[image,setImage]=useState(null)
  const handleChange=(e)=>{
    setImage(e.target.files[0])
    console.log("image:\n",image)
  }

  const[_adjustments,setAdjustments]=useState({
    brightness:0,
    contrast:0,
    saturation:0,
    exposure:0,
    hue:0
  })

  const handleAdjustmentChange=(e)=>{
    setAdjustments({..._adjustments,
      [e.target.name]:e.target.value
    })

  }

  useEffect(() => {
    //console.log("image:\n", image);
  }, [image]);

  return (
    <>
      <Sidebar />
      <input type="file"  onChange={handleChange}/>
      {image && <ImageCanvas image={image} _adjustments={_adjustments}/>}

      <Adjustments values={_adjustments} change={handleAdjustmentChange}/>

    </>
  )
}

export default App
