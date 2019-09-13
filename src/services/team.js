import { db } from '../config/firebase.cfg';

export const getTeams  = _getTeams();

async function _getTeams() {
  const snapshot =  await db.collection("teams").get();
  const teams = [];
  snapshot.forEach(function(doc) {
    teams.push({ sigla: doc.id, nome: doc.data().name });
  });
  return teams;
};

export function saveStats (team, stats){
  db.collection("teams")
    .doc(getTeams)
    .collection("data")
    .add(stats)
    .then(function() {
      console.log("Stats successfully written!"); 
    })
    .catch(function(error) {
      console.error("Error writing stats: ", error);
    });
}

export function initCollection() {
    for (const team of getTeams){
      db.collection("teams")
        .doc(team.sigla)
        .set({ name: team.nome, initials: team.sigla })
        .then(function() {
          console.log("Document successfully written!"); 
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }