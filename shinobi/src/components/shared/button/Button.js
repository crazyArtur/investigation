import React, { useEffect, useState } from 'react';
import { ButtonStyled } from './Button.styles';
import { useHistory } from "react-router-dom";

const Button = ({
  children,
  onClick,
  page,
  selected,
  ...props
}) => {

  const [isSelected, setSelected] = useState({selected});
  
  useEffect(() => {
    setSelected(selected);
  }, [selected])
  
  let history = useHistory();

  const handleClick = page => e => {
    history.push(page);
    
    console.log(page);
  };

  return (
    <ButtonStyled onClick={handleClick(page)} isSelected={isSelected} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;