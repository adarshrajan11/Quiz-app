// src/components/Button.js
import React from 'react'
import './Button.css' // We'll create this file in the next step

const Button = ({
  type,
  disableShadow,
  disabled,
  iconPosition,
  size,
  color,
  children,
}) => {
  const buttonClasses = `button ${type} ${disableShadow ? 'no-shadow' : ''} ${
    disabled ? 'disabled' : ''
  } icon-${iconPosition} ${size} ${color}`

  return (
    <button className={buttonClasses}>
      {iconPosition === 'left' && <span className='material-icons'>star</span>}
      {children}
      {iconPosition === 'right' && <span className='material-icons'>star</span>}
    </button>
  )
}

export default Button
