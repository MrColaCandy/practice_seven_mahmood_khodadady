import React from 'react';
import "./style.css"

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER:"danger",
  SUCCESS:"success",
  DARK:"dark",
  WARNING:"warning",
  INFO:"info",
 
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  
};

const LOOKS = {
  NORMAL: 'normal',
  OUTLINED: 'outlined',
 
};

const AS={
    BUTTON:"button",
    A:"a",
}
function Button({
  as: Element = 'button', 
  variant = VARIANTS.PRIMARY,
  size = SIZES.MEDIUM,
  look = LOOKS.NORMAL,
  disabled = false,
  href,
  type,
  target,
  children,
  className,
  onClick,
}) {
  
  const additionalClasses = `${variant} ${size} ${look} ${disabled ? 'disabled' : ''} ${className || ''}`;

  
  if (Element === 'a') {
    return (
      <a href={href} target={target} className={`button ${additionalClasses}`} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button type={type} disabled={disabled} className={`button ${additionalClasses}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}


Button.VARIANTS = VARIANTS;
Button.SIZES = SIZES;
Button.LOOKS = LOOKS;
Button.AS=AS;
export default Button;
