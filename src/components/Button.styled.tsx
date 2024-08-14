import styled, { css } from "styled-components";

type ButtonPropsType = {
  btnType: string
  color: string
}

export const Button = styled.button<ButtonPropsType>`
  padding: 6px 20px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
    background-color: ${props => props.color || '#4E71FE'};
    color: #fff;
  `}

  ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
    background-color: transparent;
    color: ${props => props.color || '#4E71FE'};
    border: 2px solid ${props => props.color || '#4E71FE'};
    padding: 4px 18px;
  `}

  &:hover {
    opacity: 0.8;
  }

`