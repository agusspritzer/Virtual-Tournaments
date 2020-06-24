import React from 'react';
import {Card, Card_Info, H3, H4, H5} from './styled';

{/* importo el div que creo en styled*/}

{/* Este es el compoennte donde vos a poner el codigo delheader*/}

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/}
class Header extends React.Component{
    render (){
        return (
        <Card>
            <figure>
              <img src="../assets/juegos/pummel.jpg" />
            </figure>
            <Card_Info>
              <p>#PP210</p>
              <H3>TORNEO DE JULIO PUMMEL PARTY</H3>
              <ul>
                <li>
                  <div>
                    <img src="../assets/card_icons/gamepad.png" />
                    <H4>Juego</H4>
                  </div>

                  <H5>Mortal Kombat</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fase.png" />
                    <H4>Fase</H4>
                  </div>
                  <H5>8vos de final</H5>
                </li>

                <li>
                  <div>
                    <img src="../assets/card_icons/fecha.png" />
                    <H4>Proxima Fecha</H4>
                  </div>
                  <H5>13 de Julio</H5>
                </li>
              </ul>
            </Card_Info>
</Card>

        )
    }
}

export default Header;


