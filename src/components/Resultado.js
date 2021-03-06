import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//!styled

const Mensaje = styled.p`

    background-color: rgba(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`

    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background: rgba(127,224,237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`

    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`;

//!styled fin

const Resultado = ({cotizacion}) => {
    
    return (  
        
        (cotizacion === 0 ) ? <Mensaje>Elige Marca, Año y Tipo de Seguro</Mensaje> 
        :
            (
                <ResultadoCotizacion>

                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{enter: 500, exit: 500}}
                        >
                        <TextoCotizacion>El Total de es: <span> {cotizacion} </span>  Gs.</TextoCotizacion> 
                        </CSSTransition>
                    </TransitionGroup>
                    
                </ResultadoCotizacion>
            )   
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired,
}
 
export default Resultado;