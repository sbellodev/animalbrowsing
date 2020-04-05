import React from 'react';
import styled from 'styled-components'
import bugInfo from '../data/bug.json'
import fishInfo from '../data/fish.json'
//import testdata from '../data/test.json'
//import image from '../img/bitterling.png'


// const BugDesktopTable = () => {
//    const row = bugInfo.map(value =>
//         <tr key={value.Number}>
//             <td><img src={"../img/bug/" +value.Image} alt="sudando" /></td>
//             <td>{value.Name}</td>
//             <td>{value.Price}</td>
//             <td>{value.Time}</td>
//             <td>{value.Season}</td>
//             <td>{value.Location}</td>
//         </tr>
//     )
//     return (
//         {row}
//     )
// }
const BugMiniTable = () => {
    const row = bugInfo.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/bug/" +value.Image} alt="sudando" /></td>
            <td>{value.Name}<br/>{value.Price}</td>
            <td> {value.Time} <br/> {value.Location}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     )
     return row
 }
// const FishDesktopTable = () => {
    
//     const row = fishInfo.map(value =>
//          <tr key={value.Number}>
//              <td><img src={"../img/fish/" +value.Image} alt="sudando" /></td>
//              <td>{value.Name}</td>
//              <td>{value.Price}</td>
//              <td>{value.Time}</td>
//              <td>{value.Season}</td>
//              <td>{value.Location}</td>
//          </tr>
//      )
//      return row
//  }

const Table = () => {
    // todo
    //if desktop return
    // code

    //if mobile return
    return (
        <BugTable>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name <br/> Price</th>
                    <th>Time <br/>Location</th>
                    <th>Season <br/> (Hemi.)</th>
                </tr>
            </thead>
            <tbody>
                {BugMiniTable()}
            </tbody>
        </BugTable>
    )
}
/*
<th>Image</th>
<th>Name</th>
<th>Price</th>
<th>Time</th>
<th>Season</th>
<th>Location</th> 
*/
const BugTable = styled.table`
    background-color: skyblue;
    text-align: left;
    border-collapse: collapse;
    padding: 5px;
    max-width: 800px;
    td {
   
        text-align: left;
    }
    td, th {
        padding: 0px 10px 10px 0px;
    }
    th {
        padding-top: 10px;
    }
    td:first-child, th:first-child {
        padding-left: 10px;
    }

    img {
        width: 64px;
        height: 64px;
    }
    @media (max-width: 320px) {
        font-size: 14px;

        td, th {
            padding: 0;
            padding-bottom: 18px;
            text-align: center;
            vertical-align: top;
        }
        td:first-child, th:first-child {
            padding-left: 0px;
        }
        td:last-child, th:last-child{
            width: 80px;
        }
        img {
            width: 50px;
            height: 50px;
        };
    }
`

export { Table }