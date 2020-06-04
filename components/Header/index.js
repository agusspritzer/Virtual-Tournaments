import React from 'react';
import {ContenedorHeader,Grilla} from './styled';

{/* importo el div que creo en styled*/}

{/* Este es el compoennte donde vos a poner el codigo delheader*/}

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/}
class Header extends React.Component{
    render (){
        return (
            <ContenedorHeader>
                 
                     <Grilla>

                        <a id="logo" href="#">
                            Logito
                        </a>

                             <nav>
                                 <ul>
                                     <li>
                                         <a href="#">TORNEOS</a>
                                         <a href="#">CALENDARIO</a>
                                         <a href="#">AYUDA</a>
                                         <a href="#">EL PROYECTO</a>
                                     </li>
                                 </ul>
                             </nav>
                     </Grilla>
                        
                 
                
            </ContenedorHeader>

        )
    }
}

export default Header;