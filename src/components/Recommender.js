import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import style from '../style.css'
function Recommender(props){
    return(
        <div className="col-md-3 card-col">
               <div class="card  text-black card-size justify-content-center">
                <p>{props.option1}</p>
                <p>{props.option2}</p>
                <p>{props.option3}</p>

                    
                </div>
            </div> 
    )
}
export default Recommender