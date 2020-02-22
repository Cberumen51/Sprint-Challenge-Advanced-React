import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  ReactDOM.render(<App />, div);
});

describe('testing sum', () => {
  it('should add two numbers together', () => {
    let expected = 3;
    let firstNum = 1;
    let secondNum = 2;
  
    let acutal= sum(firstNum, secondNum);
  
    expected(acutal).ToBe(expected)
  })


})
