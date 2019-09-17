import * as synaptic from 'synaptic';

const { Trainer, Architect } = synaptic;

var myPerceptron = new Architect.Perceptron(30,15,3);
var myTrainer = new Trainer(myPerceptron);

myTrainer.XOR(); // { error: 0.004998819355993572, iterations: 21871, time: 356 }

myPerceptron.activate([0,0]); // 0.0268581547421616
myPerceptron.activate([1,0]); // 0.9829673642853368
myPerceptron.activate([0,1]); // 0.9831714267395621
myPerceptron.activate([1,1]); // 0.02128894618097928

console.log(myPerceptron.toJSON());