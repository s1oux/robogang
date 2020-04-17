import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import './index.css';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
app.get('/wavelet', (request, response) => {
  const {base} = request.query;
  
  const engine = randomJS.MersenneTwister19937.autoSeed();
  const distribution = randomJS.integer(0, 255);
  
  const calculateApproximation = (array) => {
    const output = [];
    for(let i = 0; i < array.length; i+=2) {
      output.push((array[i] + array[i+1]) / 2);
    }
    return output;
  }
  
  const calculateDetalization = (array) => {
    const output = [];
    for(let i = 0; i < array.length; i+=2) {
      output.push((array[i] - array[i+1]) / 2);
    }
    return output;
  }
  
  const generateNumber = () => distribution(engine);
  
  const generateSequence = (base) => {
    const output = [];
    const length = Math.pow(2, base);
    for(let i = 0; i < length; i++) {
      output.push(generateNumber());
    }
    return output;
  }
  
  const makeHaarConversion = (initData) => {
    return [calculateApproximation(initData), calculateDetalization(initData)];
  }
  
  const input = generateSequence(base);
  
  let nextLevel = input;

  const dataset = [];
  for(let i = base; i > 0; i--) {
    const [approximation, detalization] = makeHaarConversion(nextLevel);
    dataset.push({
      level: i, 
      approximation_set: approximation,
      detalization_set: detalization
    });
    nextLevel = approximation;
  };
    
  
  response.json({
    initial_data: input,
    dataset
  });
  
});
