import React from "react"
import style from "../style.css"
import PB1 from "../PB1.jpg"
function Card(props){
    return(
        <div class="col-md-4">
        <div class="card card-blog">
            <div class="card-image">
                <a href="#"> <img class="card-img2" src={props.imgsrc} />
                    <div class="card-caption"> {props.cardCaption} </div>
                </a>

                <div class="ripple-cont"></div>
            </div>
            <div class="table">
                <h6 class="category text2"></h6>
                <p className="text2">{props.description} </p>
            </div>
        </div>
    </div>
    
    )
}
export default Card