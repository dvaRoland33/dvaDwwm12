import {useState } from "react"
import ReactSlider from "react-slider"

function MultiRange () {
        
    var [min, setMin] = useState(2000)
    var [max, setMax] = useState(80000)  
    return(
        <main>
            <div className="slider">
                <ReactSlider
                    defaultValue={[min,max]}
                    className="horizontal-slider"
                    trackClassName='tracker'
                    min={2000}
                    max={80000}
                    minDistance={1000} //distance mini entre min et max
                    step={1000}
                    withTracks={true}
                    pearling={false}
                    renderThumb={(props) => {
                        return <div {...props} className='thumb'></div>
                        }
                    }
                    renderTrack={ (props) => {
                        return <div {...props} className='track'></div>
                        }
                    }
                     onChange= {
                     ([min,max]) => {
                        setMin={min}
                        setMax={max}
                        }
                    } 
                />
                <div className="slider-label">{min}</div>
                <div className="slider-label">{max}</div>
              </div> 
        </main>
    )
  
}
export default MultiRange