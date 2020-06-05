import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

let missing = [0, 2, 1];
export const Hello: React.FunctionComponent<HelloProps> = props => { 
let spreaded = [...missing];
let concated = [].concat(missing);
const iterable = [10, 20, 30];
let sum = 0;
for (let value of iterable) {
  sum = value += 1;
  
}

console.log({missing, spreaded,  concated });
  return(
  <h1>
    Hello from {props.compiler} and {props.framework}!😜
    {"😜".length }
  </h1>
)};