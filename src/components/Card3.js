import React from "react"
import App from '../App.scss'

function Card3(props){
    return(

<div class="container">
  <div class="row align-left">
    <div class="col-md-6 col-lg-4 ">
      <div class="gr-1 card3" > 
        <div class="txt">
          <h1>
          { props.cardCaption}</h1>
          <p>{props.description}</p>
        </div>
        <a href="#">more</a>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
  </div>
</div>
  

    )
}
export default Card3