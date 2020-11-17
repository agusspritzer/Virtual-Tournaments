import React from 'react';
import { db } from "lib/firebase";
import { InfoTorneoContainer } from 'containers';

function infoTorneo({ data }) {

    console.log(data[0]);
    return <InfoTorneoContainer dataTorneo={data} />;
}


export async function getServerSideProps({ params }) {

    const slug = params["torneo-slug"];

    const dataToSend = [];
    const ref = db.collection('torneos');
    const data = await ref.where('slug', '==', slug).get()
        .then(snapshot => {
            if (snapshot.empty) {
                return []; //aca por is devuelve un toreno que no existe
            }

            snapshot.forEach(async doc => {
                dataToSend.push(await doc.data());
            })

        })
        .catch(error => {
            console.log(error);
            return [];
        })


    await db.collection('juegos').doc(dataToSend[0].game).get()
        .then(async doc => {

            if (!doc.exists) {
                return null
            }

            dataToSend[0].game = await doc.data();
        })
        .catch(() => null);

    console.log(dataToSend);
    return { props: { data: dataToSend } }
}


export default infoTorneo;
