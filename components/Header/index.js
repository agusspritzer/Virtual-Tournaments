import React from 'react';
import { ContenedorHeader, Logo } from './styled';
import Link from 'next/link';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Ext_Link } from 'components';
{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
class Header extends React.Component {
    render() {
        return (
            <ContenedorHeader>

                <Logo>
                    <a href="./index">
                        <img src="../assets/logo.png" />
                    </a>
                </Logo>



                <nav>
                    <ul>
                        <li>
                            <Link href="/torneos">
                                TORNEOS
                            </Link>

                            <Link href="/calendario">
                                CALENDARIO
                            </Link>

                            <Link href="/ayuda">
                                AYUDA
                            </Link>

                            <Link href="/proyecto">
                                EL PROYECTO
                            </Link>

                            <Link href="/login" passHref >
                                <Ext_Link ButtonMode="outline" Mensaje="INICIA SESION"></Ext_Link>
                            </Link>

                            <Link href="/registro" passHref >
                                <Ext_Link Mensaje="REGISTRATE"></Ext_Link>
                            </Link>

                        </li>
                    </ul>
                </nav>



            </ContenedorHeader>

        )
    }
}

export default Header;