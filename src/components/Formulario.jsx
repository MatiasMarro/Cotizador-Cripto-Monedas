import  { useEffect } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

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
    margin-top: 30px;

    &::hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`
const Formulario = () => {



    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)

    useEffect(() => {
        const consultarAPI = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado.Data)
        }

        consultarAPI()
    }, [])
    

    
    
  return (
        <form>


            <SelectMonedas />
            
            <InputSubmit 
                type="submit"
                value="Calcular" />
        </form>);
};

export default Formulario;
