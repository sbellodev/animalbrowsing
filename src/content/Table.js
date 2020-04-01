import React from 'react';
import styled from 'styled-components'
import bug1 from '../img/bitterling.png'
import bugInfo from '../data/bugs.json'

console.log(bugInfo[0].Image)



// const BugMiniTable = () => {
//         let i
//         let temp
//         for (i = 0; i < 10; i++){
//             temp += "<tr>"
//             temp += "<td>"+ bugInfo[i].Image +"</td>" 
//             temp += "<td>"+ bugInfo[i].Name +"</td>" 
//             temp += "<td>"+ bugInfo[i].Number +"</td>" 
//             temp += "<td>"+ bugInfo[i].Season +"</td>" 
//             temp += "<td>"+ bugInfo[i].Image +"</td>"  
//             temp += "</tr>"
//             return temp
//         }
//         //return temp
// }
const BugMiniTable = () => {

   const row = bugInfo.map(value =>
        <tr key={value.Number}>
            <td>{value.Image}</td>
            <td>{value.Name}</td>
            <td>{value.Price}</td>
            <td>{value.Time}</td>
            <td>{value.Season}</td>
            <td>{value.Location}</td>
        </tr>
    )
    return row
}
console.log(BugMiniTable())


const Table = () => {
    return (
        <>
            <BugsTable>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Season</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {BugMiniTable()}
                </tbody>
            </BugsTable>
        </>
    )
}
const BugsTable = styled.table`
    background-color: skyblue;
    text-align: left;
    border-collapse: collapse;
    padding: 5px;
    td {
        height: 60px;
        min-width: 60px;
        max-width: 120px;
     
        text-align: left;
    }
    td, th {
        padding: 0px 10px 10px 10px;
    }
    th {
        padding-top: 10px;
    }
`
/*
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Season</th>
                        <th>Location <br/> Size</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img width="50px" alt="sudo" src={bug1} /></td>
                        <td>Common Butterfly</td>
                        <td>1000</td>
                        <td>4 AM <br/>7 PM</td>
                        <td>Sep-Jun (Northern) <br/> Mar-Dec (Southern)</td>
                        <td>River <br/>Big</td>
                    </tr>
                    <tr>
                        <td><img width="50px" alt="sudo" src={bug1} /></td>
                        <td>Common Butterfly</td>
                        <td>1000</td>
                        <td>4 AM <br/>7 PM</td>
                        <td>Sep-Jun (Northern) <br/> Mar-Dec (Southern)</td>
                        <td>River <br/>Big</td>
                    </tr>
                    <tr>
                        <td><img width="50px" alt="sudo" src={bug1} /></td>
                        <td>Common Butterfly</td>
                        <td>1000</td>
                        <td>4 AM <br/>7 PM</td>
                        <td>Sep-Jun (Northern) <br/> Mar-Dec (Southern)</td>
                        <td>River <br/>Big</td>
                    </tr>
                    <tr>
                        <td><img width="50px" alt="sudo" src={bug1} /></td>
                        <td>Common Butterfly</td>
                        <td>1000</td>
                        <td>4 AM <br/>7 PM</td>
                        <td>Sep-Jun (Northern) <br/> Mar-Dec (Southern)</td>
                        <td>River <br/>Big</td>
                    </tr>
                </tbody>
*/ 
export { Table }