import React from 'react';
import { db } from 'lib/firebase';
import { HomeContainer } from 'containers';

function Home({ data }) {

  return <HomeContainer dataTorneo={data} />;
}

export default Home;

export async function getServerSideProps() {
  const ref = db.collection('torneos');
  const tournamentData = [];
  const snapshotsRefs = [];
  await ref
    .where('state', '==', true)
    .limit(4)
    .get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        return [];
      }


      await snapshot.forEach(async (doc) => {
        let data = await doc.data();

        tournamentData.push({ data });
        snapshotsRefs.push(doc.ref);
      });
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  const gameMap = tournamentData.map(async (ref, i) => {
    const game = ref.data.game;

    await db.collection('juegos').doc(game).get()
      .then(async doc => {

        if (!doc.exists) {
          return null
        }

        tournamentData[i].data.game = await doc.data();
      })
      .catch(() => null);

  })

  await Promise.all(gameMap);


  const faseMap = snapshotsRefs.map(async (ref, i) => {
    const fetching = await ref
      .collection('fases')
      .where('current', '==', true)
      .get()
      .then(async (snapshot) => {
        const faseData = [];
        await snapshot.forEach(async (doc) => {
          faseData.push(await doc.data());
        });

        tournamentData[i] = { ...tournamentData[i], fase: faseData[0] };
      })
      .catch((error) => {
        console.log(error);

        tournamentData[i] = { ...tournamentData[i], fase: [] };
      });

    return await fetching;
  });



  await Promise.all(faseMap);
  return { props: { data: tournamentData } };
}


