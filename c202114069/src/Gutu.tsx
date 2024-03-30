import React from 'react';
import './App.css';

export type GutuProps = {
    dan: number
}

function Gutu(props: GutuProps) {

  return (
    <table>
        <tr><td>{props.dan} X {1} = {props.dan * 1}</td></tr>
        <tr><td>{props.dan} X {2} = {props.dan * 2}</td></tr>
        <tr><td>{props.dan} X {3} = {props.dan * 3}</td></tr>
        <tr><td>{props.dan} X {4} = {props.dan * 4}</td></tr>
        <tr><td>{props.dan} X {5} = {props.dan * 5}</td></tr>
        <tr><td>{props.dan} X {6} = {props.dan * 6}</td></tr>
        <tr><td>{props.dan} X {7} = {props.dan * 7}</td></tr>
        <tr><td>{props.dan} X {8} = {props.dan * 8}</td></tr>
        <tr><td>{props.dan} X {9} = {props.dan * 9}</td></tr>
        
    </table>
  );
}

export default Gutu;

