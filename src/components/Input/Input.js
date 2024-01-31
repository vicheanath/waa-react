import React from 'react'
import style from './Input.module.css'
const Input = (
    props
) => {

  if (props.type === 'textarea') {
    return (
      <textarea className={style.Textarea} {...props} />
    )
  }

  return (
    <input className={style.Input} {...props} />
  )
}

export default Input