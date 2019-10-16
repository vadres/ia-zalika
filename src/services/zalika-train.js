import * as synaptic from 'synaptic';
import { getTeams, getClashes } from '../services/team';

const { Architect } = synaptic;

const findTeam = (init, teams) => (
  teams.filter(el => el.initials === init)[0] 
);

const extractStats = (data) => {
  const [ pt, gp ] = data.u6.split("-");
  return ([ 
    (100 / data.ps) / 100, 
    data.gp / 100, 
    data.gc / 100, 
    data.nsg / 100, 
    data.nm / 100, 
    ...data.md.split("-").map(el => el / 100), 
    ...data.vs.split("-").map(el => el / 100), 
    (pt * 100 / 18)/100,
    gp / 100
  ]);
}

async function train() {
  const teams = await getTeams();
  const clashes = await getClashes();
console.log(teams, clashes);

  var learningRate = .3;
  var myPerceptron = new Architect.Perceptron(30,15,3);

  for (const clash of clashes) {
    let cw, vw, dw;
    
    cw = parseInt(clash.clientGols) > parseInt(clash.visitorGols)? 1: 0;
    vw = parseInt(clash.clientGols) < parseInt(clash.visitorGols)? 1: 0;
    dw = parseInt(clash.clientGols) == parseInt(clash.visitorGols)? 1: 0;
     
    const statsC = extractStats(findTeam(clash.client, teams).data[0]);
    const statsV = extractStats(findTeam(clash.visitor, teams).data[0]);
   
    myPerceptron.activate([ ...statsC, ...statsV ]);
    myPerceptron.propagate(learningRate, [cw, vw, dw]);
  }

  const statsC = extractStats(findTeam("ala", teams).data[0]);
  const statsV = extractStats(findTeam("fla", teams).data[0]);

  console.log(myPerceptron.activate([ ...statsC, ...statsV ])); 
}

train();