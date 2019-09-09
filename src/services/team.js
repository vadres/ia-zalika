import { db } from '../config/firebase.cfg';

export const teams  =  [
    { sigla: "pal", nome: "Palmeiras"},
    { sigla: "fla", nome: "Flamengo"},
    { sigla: "gre", nome: "Grêmio"},
    { sigla: "sao", nome: "São Paulo"},
    { sigla: "san", nome: "Santos FC"},
    { sigla: "cor", nome: "Corinthians"},
    { sigla: "int", nome: "Internacional"},
    { sigla: "flu", nome: "Fluminense"},
    { sigla: "cam", nome: "Atlético-MG"},
    { sigla: "cru", nome: "Cruzeiro"},
    { sigla: "cap", nome: "Athletico-PR"},
    { sigla: "vas", nome: "Vasco da Gama"},
    { sigla: "bah", nome: "Bahia"},
    { sigla: "bot", nome: "Botafogo"},
    { sigla: "cha", nome: "Chapecoense"},
    { sigla: "for", nome: "Fortaleza"},
    { sigla: "goi", nome: "Goiás EC"},
    { sigla: "cea", nome: "Ceará SC"},
    { sigla: "ala", nome: "Alagoano"},
    { sigla: "ava", nome: "Avaí FC"}
];

export function saveStats (team, stats){
  db.collection("teams")
    .doc(team)
    .collection("data")
    .set(stats)
    .then(function() {
      console.log("Stats successfully written!"); 
    })
    .catch(function(error) {
      console.error("Error writing stats: ", error);
    });
}

export function initCollection() {
    for (const team of teams){
      console.log(team);
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