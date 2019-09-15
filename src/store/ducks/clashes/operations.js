import { toast } from 'react-toastify';
import { db } from '../../../config/firebase.cfg';
import store from '../../index';

export async function getTeams() {
  const snapshot =  await db.collection("teams").get();
  const teams = [];
  snapshot.forEach(function(doc) {
    teams.push({ sigla: doc.id, nome: doc.data().name });
  });
  return teams;
};

export async function saveClash () {
  const clash = { ...store.getState().clashes };
  delete clash.teams;
  console.log(clash);
  for (let key in clash) {
    if (typeof clash[key] === 'undefined' || clash[key] === ""){
      toast.warn("Algum campo está no formato incorreto!");
      return false;
    }
  }  
  if (clash.visitor == clash.client){
    toast.warn("O confronto esta com times iguais!");
    return false;
  }

  clash['time'] = new Date().getTime();
  db.collection("clashes")
    .add(clash)
    .then(function() {
      toast.info("Tudo certo! Dados salvos");
    })
    .catch(function(error) {
      toast.error("Error writing clash: ", error);
    });
    
  return true;  
}
