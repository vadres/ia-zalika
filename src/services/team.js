import { db } from '../config/firebase.cfg';

export async function getTeams() {
  const teams = [];
  let i = 0;
  return new Promise(function(resolve, reject) {
    db.collection("teams")
      .get()
      .then(function(teamsSnap) {
        teamsSnap.forEach(function(doc) {
          db.collection("teams")
            .doc(doc.id)
            .collection("data")
            .orderBy("time", "desc")
            .get()
            .then(function(dataSnap) {
              dataSnap.forEach(function(docIn) {
                for (let team of teams){
                  if (team.initials === doc.id)
                    return;
                }
                teams.push({ ...doc.data(), data: [{ ...docIn.data() }] });
              })
              if (++i === teamsSnap.size)
                resolve(teams);
            });
        });
      })
      .catch(function(error) {
          reject([]);
      });
  }) 
};

export async function getClashes() {
  const snapshot =  await db.collection("clashes").get();
  const teams = [];
  snapshot.forEach(function(doc) {
    teams.push({ ...doc.data() });
  });
  return teams;
};
