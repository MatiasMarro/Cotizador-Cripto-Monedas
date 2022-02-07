import React from 'react';
import styled from '@emotion/styled';

const InputSubmit = styled.input`
    font-family: 'Lato',sans-serif;
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-wight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color: .3s ease;

    &::hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`
const Formulario = () => {
  return (
        <form>



            <InputSubmit 
                type="submit"
                value="Calcular" />
        </form>);
};

export default Formulario;
