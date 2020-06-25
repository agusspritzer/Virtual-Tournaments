import React from 'react';
import {
    Card,
    Info_Fecha,
    DiaFecha,
    NumeroFecha,
    
    Info_Torneo,
    CodigoTorneo,
    NombreTorneo,
    FaseTorneo,
    HorarioTorneo} from './styled';



export default function CardCalendario({Numero,Dia, Codigo, Nombre, Fase, Horario}) {
  return(
    <Card>   
        
            <Info_Fecha>
                <NumeroFecha>{Numero}</NumeroFecha>
                <DiaFecha> {Dia}</DiaFecha>
            </Info_Fecha>
            
            <Info_Torneo>
                <CodigoTorneo>{Codigo}</CodigoTorneo>
                <NombreTorneo>{Nombre}</NombreTorneo>
                <FaseTorneo>{Fase}</FaseTorneo>
                <HorarioTorneo>{Horario}</HorarioTorneo>
            </Info_Torneo>
    </Card>
        
)
        
    }



