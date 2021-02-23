import React from "react"
import App from '../App.scss'
import DB1 from '../PB1.jpg'
function Card2(props){
    return(
        <div class="container">
  <div class="row align-middle">
    <div class="col-md-6 col-lg-4 column">
      <div class="card "><img  class="img" src={props.imgsrc}/>
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
    <div class="col-md-6 col-lg-4 column">
      <div class="card "><img  class="img" src={props.imgsrc2}/>
        <div class="txt">
          <h1>{ props.cardCaption1}</h1>
          <p>{props.description1}</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card "><img  class="img" src={props.imgsrc3}/>
        <div class="txt">
          <h1>{ props.cardCaption2}</h1>
          <p>{props.description2}</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Card2