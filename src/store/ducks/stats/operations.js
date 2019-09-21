import { toast } from 'react-toastify';
import { db } from '../../../config/firebase.cfg';
import store from '../../index';
import { formatCompound } from '../../../services/format';
import '../../../services/zalika-train';

export async function getTeams() {
  const snapshot =  await db.collection("teams").get();
  const teams = [];
  snapshot.forEach(function(doc) {
    teams.push({ sigla: doc.id, nome: doc.data().name });
  });
  return teams;
};

export async function saveStats () {
  const { team, stats } = store.getState().stats;
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
    .add(stats)
    .then(function() {
      toast.info("Tudo certo! Dados salvos");
    })
    .catch(function(error) {
      toast.error("Error writing stats: ", error);
    });
    
  return true;  
}
