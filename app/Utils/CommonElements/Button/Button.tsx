import React from 'react'
import './Button.scss'
function Button(props:any) {
  return (
    <button className='dynamic_button' onClick={props.onClick} type={props?.type} > {props.children}</button>
  )
}

export default Button