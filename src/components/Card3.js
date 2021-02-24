import React from "react"
import App from '../App.scss'

function Card3(props){
    return(
 <div class="container" >    
  <div class="row align-middle">
    <div class="col-md-10 col-lg-6">
      <div class="card3 gr-1">
        <div class="txt">
          <h1>
          { props.cardCaption}</h1>
          
        </div>
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