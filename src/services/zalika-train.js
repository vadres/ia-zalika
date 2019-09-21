import * as synaptic from 'synaptic';
import { getTeams, getClashes } from '../services/team';

const { Architect } = synaptic;

const findTeam = (init, teams) => (
  teams.filter(el => el.initials === init)[0] 
);

const extractStats = (data) => (
  [ 
    data.ps, 
    data.gp, 
    data.gc, 
    data.nsg, 
    data.nm, 
    ...data.md.split("-"), 
    ...data.vs.split("-"), 
    ...data.u6.split("-")
  ]
)

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

  const statsC = extractStats(findTeam("bot", teams).data[0]);
  const statsV = extractStats(findTeam("fla", teams).data[0]);

  console.log(myPerceptron.activate([ ...statsC, ...statsV ])); 
}

train();