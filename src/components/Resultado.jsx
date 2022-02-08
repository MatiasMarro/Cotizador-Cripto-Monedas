import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato' ,sans-serif;


    display:flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px

`
const Texto = styled.p`
    font-size: 18px;
        span{
            font-weight: 700
        }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    @media (min-width: 420px) {
    display: block;
    width: 100px;
  }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
        <div>
        <Precio>El precio es de: <span>{PRICE}</span> </Precio>
        <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span> </Texto>
        <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span> </Texto>
        <Texto>El porcentaje de cambio en 24HS: <span>{CHANGEPCT24HOUR}</span> </Texto>
        <Texto>Ultima actualización: <span>{LASTUPDATE}</span> </Texto>
        </div>
    </Contenedor>
  );
};

export default Resultado;
