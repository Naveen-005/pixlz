import React from 'react';
import './Adjustments.css';
const Adjustments = (props) => {

    const handleChange=(e)=>{
        props.change(e)
       
    }

    return (
        <div className="adjustments-container">

            <div className="sliders">
                <p>Adjustments</p>
                <div className="slider">
                    <label htmlFor="brightness">Brightness:</label>
                    <input type="range" id="brightness" name="brightness" min="-100" max="100" value={props.values.brightness} onChange={handleChange}/>
                </div>
                <div className="slider">
                    <label htmlFor="Contrast">Contrast:</label>
                    <input type="range" id="Contrast" name="Contrast" min="0" max="100" />
                </div>
                <div className="slider">
                    <label htmlFor="Saturation">Saturation:</label>
                    <input type="range" id="Saturation" name="Saturation" min="0" max="100" />
                </div>
                <div className="slider">
                    <label htmlFor="Exposure">Exposure:</label>
                    <input type="range" id="Exposure" name="Exposure" min="0" max="100" />
                </div>
                <div className="slider">
                    <label htmlFor="Hue">Hue:</label>
                    <input type="range" id="Hue" name="Hue" min="0" max="100" />
                </div>
                {/*
                <div className="slider">
                    <label htmlFor="Saturation">Levels:</label>
                    <input type="range" id="Levels" name="Levels" min="0" max="100" />
                </div>
                <div className="slider">
                    <label htmlFor="Shadows">Shadows:</label>
                    <input type="range" id="Shadows" name="Shadows" min="0" max="100" />
                </div>
                <div className="slider">
                    <label htmlFor="Highlights">Highlights:</label>
                    <input type="range" id="Highlights" name="Highlights" min="0" max="100" />
                </div>
    */}
            </div>
        </div>
    );
}

export default Adjustments;
