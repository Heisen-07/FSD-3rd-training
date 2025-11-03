import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div id='vks'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCoJ_-UmLY1fC-GMthOh_zmzZ81NSovJWBhBC8hgeTle-FWtYDxs_u7yvaI_YVq6ebbE&usqp=CAU" alt="" height={100} width={100} />
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  )
}

export default Card
