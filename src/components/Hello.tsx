import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello: React.FunctionComponent<HelloProps> = props => { 
  let missing = [0, , 1];
let spreaded = [...missing];
let concated = [].concat(missing);

console.log({missing, spreaded,  concated });
  return(
  <h1>
    Hello from {props.compiler} and {props.framework}!😜
    {"😜".length }
  </h1>
)};