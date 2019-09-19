import { toast } from 'react-toastify';
import { db } from '../../../config/firebase.cfg';
import store from '../../index';
import { formatCompound } from '../../../services/format';

export async function getTeams() {
  db.collection("teams")
    .get()
    .then(function(teamsSnap) {
      teamsSnap.forEach(function(doc) {
        db.collection("teams")
          .doc(doc.id)
          .collection("data")
          .get()
          .then(function(dataSnap) {
            dataSnap.forEach(function(docIn) {
              console.log(doc.id + " => " + docIn.data());
            })
          });
      });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  const teams = [];

  return teams;
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
