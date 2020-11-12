import React from 'react';
import { db } from "lib/firebase";
import { HomeContainer } from 'containers';

function Home() {
  return <HomeContainer />;
}

export async function getServerSideProps() {

  const ref = db.collection('torneos');
  const data = await ref.where('state', '==', true).limit(4).get()
    .then(snapshot => {
      if (snapshot.empty) {
        return [];
      }
      const dataToSend = [];
      snapshot.forEach(async (doc) => {
        const fase = await doc.ref.collection("fases").where("current", "==", true).get().then((snapshot) => {
          const faseData = [];
          snapshot.forEach(async doc => {
            faseData.push(await doc.data());
          })
          return faseData[0];
        }).catch((error) => {
          console.log(error);
          return
          ([])
        });

        console.log("Fase", fase);

        dataToSend.push({ data: await doc.data() });
      });
      console.log("dataToSend", dataToSend);
      return dataToSend;
    })
    .catch(error => {
      console.log(error);
      return [];
    })
  console.log(data);
  return { props: { data } }
}

export default Home;
