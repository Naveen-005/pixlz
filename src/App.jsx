import { useState, useEffect,useRef } from 'react'

import './App.css'
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Sidebar from './components/Sidebar'
import ImageCanvas from './components/ImageCanvas'


function App() {

  const[image,setImage]=useState(null)
  const handleChange=(e)=>{
    setImage(e.target.files[0])
    console.log("image:\n",image)
  }

  useEffect(() => {
    console.log("image:\n", image);
  }, [image]);

  return (
    <>
      <Sidebar />
      <input type="file"  onChange={handleChange}/>
      {image && <ImageCanvas image={image}/>}

    </>
  )
}

export default App
