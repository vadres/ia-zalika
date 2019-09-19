import * as synaptic from 'synaptic';
import { teams, clashes } from '../services/team';

const { Architect } = synaptic;

var learningRate = .3;
var myPerceptron = new Architect.Perceptron(30,15,3);

//trainer
for (let team of teams){
  for (let [initials, data] of Object.entries(team)){

  }
}
for (var i = 0; i < 20000; i++) {
  // 0 xor 0 => 0
    myPerceptron.activate([0,0]);
    myPerceptron.propagate(learningRate, [0]);
  // 0 xor 1 => 1
    myPerceptron.activate([0,1]);
    myPerceptron.propagate(learningRate, [1]);
  // 1 xor 0 => 1
    myPerceptron.activate([1,0]);
    myPerceptron.propagate(learningRate, [1]);
  // 1 xor 1 => 0
    myPerceptron.activate([1,1]);
    myPerceptron.propagate(learningRate, [0]);
  }

  //teste
  //console.log(myPerceptron.activate([0,0])); 