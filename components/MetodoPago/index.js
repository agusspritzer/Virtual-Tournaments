import React from 'react';
import { PagoContainer, Opciones, MercadoPago, Monedas, } from './styled';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Titulo } from 'components';

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
export default function MetodoPago() {
    return (
        <PagoContainer>

            <Titulo level={4}>Elegí tu método de pago</Titulo>
            <Opciones>


                <a mp-mode="dftl" href={"http://mpago.la/1PZTNdP"} name="MP-payButton">
                    <img src={`/assets/mpago.png`} />
                    <Titulo level={4}>Mercado Pago</Titulo>
                </a>


                <Monedas>
                    <img src={`/assets/moneda.png`} />
                    <Titulo level={4}>Mis monedas <span>(520)</span></Titulo>
                </Monedas>
            </Opciones>

        </PagoContainer>

    )
}



