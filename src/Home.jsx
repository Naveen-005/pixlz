import App from "./App"
import { useState} from 'react'


function Home(){

    const[image,setImage]=useState(null)
    const handleChange=(e)=>{
      setImage(e.target.files[0])
    }

    const [edit,setEdit]=useState(false)

    const handleEdit=()=>{
        setEdit(true)
    }

    return(
        <>  
            {!edit &&
            <>
                <input type="file"  onChange={handleChange}/>
                <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </>
            }
            {edit && 
                <App image={image}/>
            }
        </>
    )
}

export default Home