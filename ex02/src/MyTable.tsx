import React from 'react';
import './App.css';

function MyTable() {

    let numbers = [1,2,3,4,5,6,7,8,9];

    let gugu = numbers.map((n) =>
                        <tr >
                        <td>{n} X {1} = {n * 1}</td>
                        <td>{n} X {2} = {n * 2}</td>
                        <td>{n} X {3} = {n * 3}</td>
                        <td>{n} X {4} = {n * 4}</td>
                        <td>{n} X {5} = {n * 5}</td>
                        <td>{n} X {6} = {n * 6}</td>
                        <td>{n} X {7} = {n * 7}</td>
                        <td>{n} X {8} = {n * 8}</td>
                        <td>{n} X {9} = {n * 9}</td>
                        </tr>
                
            )
        



  return (
    <table>
        <tr>
            <td className="whiteBg">1단</td>
            <td className="grayBg">2단</td>
            <td className="whiteBg">3단</td>
            <td className="grayBg">4단</td>
            <td className="whiteBg">5단</td>
            <td className="grayBg">6단</td>
            <td className="whiteBg">7단</td>
            <td className="grayBg">8단</td>
            <td className="whiteBg">9단</td>
            
            
            </tr>
            { gugu }
        
    </table>
  );
}

export default MyTable;

