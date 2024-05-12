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
                    <input type="number" id="brightness" name="brightness" min="-100" max="100" value={props.values.brightness} onChange={handleChange} style={{ width: '50px' }} />
                    <br />
                    <input type="range" id="brightness" name="brightness" min="-100" max="100" value={props.values.brightness} onChange={handleChange}/>
                </div>
                <div className="slider">
                    <label htmlFor="contrast">Contrast:</label>
                    <input type="number" id="contrast" name="contrast" min="0" max="100" value={props.values.contrast} onChange={handleChange} style={{ width: '50px' }}/>
                    <br />
                    <input type="range" id="contrast" name="contrast" min="0" max="100" value={props.values.contrast} onChange={handleChange}/>
                </div>
                <div className="slider">
                    <label htmlFor="saturation">Saturation:</label>
                    <input type="number" id="saturation" name="saturation" min="0" max="100" value={props.values.saturation} onChange={handleChange} style={{ width: '50px' }}/>
                    <br />
                    <input type="range" id="saturation" name="saturation" min="0" max="100" value={props.values.saturation} onChange={handleChange}/>
                </div>
                <div className="slider">
                    <label htmlFor="exposure">Exposure:</label>
                    <input type="number" id="exposure" name="exposure" min="0" max="100" value={props.values.exposure} onChange={handleChange} style={{ width: '50px' }}/>
                    <br />
                    <input type="range" id="exposure" name="exposure" min="0" max="100" value={props.values.exposure} onChange={handleChange}/>
                </div>
                <div className="slider">
                    <label htmlFor="hue">Hue:</label>
                    <input type="number" id="hue" name="hue" min="0" max="100" value={props.values.hue} onChange={handleChange} style={{ width: '50px' }}/>
                    <br />
                    <input type="range" id="hue" name="hue" min="0" max="100" value={props.values.hue} onChange={handleChange}/>
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
