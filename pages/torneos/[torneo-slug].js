import React from 'react';
import { db } from "lib/firebase";
import { InfoTorneoContainer } from 'containers';

function infoTorneo({ data }) {

    console.log(data[0]);
    return <InfoTorneoContainer />;
}


export async function getServerSideProps({ params }) {

    const slug = params["torneo-slug"];

    const ref = db.collection('torneos');
    const data = await ref.where('slug', '==', slug).get()
        .then(snapshot => {
            if (snapshot.empty) {
                return []; //aca por is devuelve un toreno que no existe
            }
            const dataToSend = [];
            snapshot.forEach(async doc => {
                dataToSend.push(await doc.data());
            })
            return dataToSend;
        })
        .catch(error => {
            console.log(error);
            return [];
        })
    console.log(data);
    return { props: { data } }
}


export default infoTorneo;
