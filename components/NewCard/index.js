import React from 'react';
import { Card, Card_Img, Card_Info } from '../CardActive/styled';
import { Titulo } from 'components';
import Link from 'next/link';


export default function NewCard({ destino, gameImg, inscDisp, torneoName, gameIcon, gameTitle, faseIcon, faseTitle }) {
    <Link href={'/torneos/' + destino}>
        <Card>
            <Card_Img>
                <figure>
                    <img src={gameImg} />
                </figure>
                {inscDisp == "active" &&
                    <div>
                        <p>INSCRIPCION DISPONIBLE</p>
                    </div>}
            </Card_Img>

            <Card_Info>
                <Titulo level={3}>{torneoName}</Titulo>
                <ul>
                    <li>
                        <div>
                            <img src={gameIcon} />
                            <Titulo level={4}>{gameTitle}</Titulo>
                        </div>

                        <Titulo level={5}>{Game}</Titulo>
                    </li>

                    <li>
                        <div>
                            <img src={faseIcon} />
                            <Titulo level={4}>{faseTitle}</Titulo>
                        </div>
                        <Titulo level={5}>{Fase}</Titulo>
                    </li>

                    <li>
                        <div>
                            <img src={fechaIcon} />
                            <Titulo level={4}>{fechaName}</Titulo>
                        </div>
                        <Titulo level={5}>{ProxFecha}</Titulo>
                    </li>
                </ul>
            </Card_Info>

        </Card>
    </Link>
}