import React from 'react';
import './App.css';

export type GutuProps = {
    number: number
}

function Gutu(props: GutuProps) {

  return (
    <div>
      <h1>{props.number}단</h1>
      <table>
          <tr >
              <td>{props.number} X {1} = {props.number * 1}</td>
              <td>{props.number} X {2} = {props.number * 2}</td>
              <td>{props.number} X {3} = {props.number * 3}</td>
              <td>{props.number} X {4} = {props.number * 4}</td>
              <td>{props.number} X {5} = {props.number * 5}</td>
              <td>{props.number} X {6} = {props.number * 6}</td>
              <td>{props.number} X {7} = {props.number * 7}</td>
              <td>{props.number} X {8} = {props.number * 8}</td>
              <td>{props.number} X {9} = {props.number * 9}</td>
          </tr>
          
      </table>
    </div>
  );
}

export default Gutu;

