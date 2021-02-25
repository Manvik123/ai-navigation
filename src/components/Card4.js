import React from "react"
import App from '../App.scss'

function Card4(props){
    return(
 <div class="container" >    
  <div class="row align-middle">
    <div class="col-md-6 col-lg-9 column">
      <div class="card "><img  class="img" src={props.imgsrc}/>
        
        
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>

    )
}
export default Card4