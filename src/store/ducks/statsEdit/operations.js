import { toast } from 'react-toastify';
import { db } from '../../../config/firebase.cfg';
import store from '../../index';
import { formatCompound } from '../../../services/format';

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
                  if (team.initials === doc.id){
                    team.data.push({ ...docIn.data() });
                    if (++i === teamsSnap.size)
                      resolve(teams);
                    return;
                  }
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

export async function updateStats () {
  const { team, id, stats } = store.getState().stats;
  console.log(team, stats);
  
  for (const [key, stat] of Object.entries(stats)) {
    if (typeof stat === 'undefined' || stat === "" || !formatCompound(key.toUpperCase(), stat)){
      toast.warn("Algum campo está no formato incorreto!");
      return false;
    }
  }  
  stats['time'] = new Date().getTime();
  db.collection("teams")
    .doc(team)
    .collection("data")
    .doc(id)
    .update(stats)
    .then(function() {
      toast.info("Tudo certo! Dados salvos");
    })
    .catch(function(error) {
      toast.error("Error writing stats: ", error);
    });
    
  return true;  
}
