import React from 'react';
import {ContenedorHeader,Logo, Button_Prim, Button_Sec} from './styled';

{/* importo el div que creo en styled*/}

{/* Este es el compoennte donde vos a poner el codigo delheader*/}

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/}
class Header extends React.Component{
    render (){
        return (
            <ContenedorHeader>
                 
                    <Logo>
                    <img src="../assets/logo.png"/>
                    </Logo>
                        
                   

                             <nav>
                                 <ul>
                                     <li>
                                         <a href="./_torneos">TORNEOS</a>
                                         <a href="./_app">CALENDARIO</a>
                                         <a href="#">AYUDA</a>
                                         <a href="#">EL PROYECTO</a>

                                         <Button_Sec href="#">INICIA SESION</Button_Sec>
                                         <Button_Prim href="#">REGISTRATE</Button_Prim>
                                     </li>
                                 </ul>
                             </nav>
                     
                 
                
            </ContenedorHeader>

        )
    }
}

export default Header;