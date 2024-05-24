import { useState, useEffect,useRef } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import ImageCanvas from './components/ImageCanvas'
import Adjustments from './components/Adjustments'


function App(props) {



  const [selectedMenu,setSelectedMenu]=useState("adjustments")
  const handleMenuChange=(menuItem)=>{
    setSelectedMenu(menuItem)
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

  return (
    <>
      <Sidebar change={handleMenuChange}/>
      
      {props.image && <ImageCanvas image={props.image} _adjustments={_adjustments}/>}
      {(selectedMenu==="adjustments") &&
      <Adjustments values={_adjustments} change={handleAdjustmentChange}/>}

    </>
  )
}

export default App
