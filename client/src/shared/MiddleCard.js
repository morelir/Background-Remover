import React from 'react'
import "./MiddleCard.scss"

const MiddleCard = (props) => {
  return (
    <div className={`card_middle ${props.className}`}>
        {props.children}
    </div>
  )
}

export default MiddleCard