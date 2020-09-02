import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';




import { ContenedorMain, TorneoImg, FullWidthSection, TorneoInfo } from 'components';

export default function InfoTorneoContainer() {
    return (
        <>
            <FullWidthSection>
                <TorneoImg
                    idTorneo="#PP210"
                    nameTorneo="TORNEO DE_TERRORIST"
                    gameTorneo="Counter Strike: GO"
                    disponible="INSCRIPCION DISPONIBLE"
                />
            </FullWidthSection>

            <ContenedorMain sintop="0">
                <TorneoInfo />
            </ContenedorMain>



        </>
    );
}
