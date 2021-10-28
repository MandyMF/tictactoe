import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  background: #fff;     
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  color: ${props => props.value  === 0 ? 'red' : 'blue' };

`

const Square = (props: any) => {
  
    return (
        <Button data-testid ='square' disabled={props.value !== 0} onClick={(e) => props.onClick(props.line, props.col, e)} value={ props.value % 2 } >
           {(props.value === 0) ? null : props.value % 2 === 0 ? 'O' : 'X' }
        </Button>
    );
}

export default Square;