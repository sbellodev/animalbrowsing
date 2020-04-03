import React from 'react';
import styled from 'styled-components'
import bugInfo from '../data/bug.json'
import fishInfo from '../data/fish.json'
//import testdata from '../data/test.json'
//import image from '../img/bitterling.png'


const BugMiniTable = () => {
   const row = bugInfo.map(value =>
        <tr key={value.Number}>
            <td><img src={"../img/bug/" +value.Image} alt="sudando" /></td>
            <td>{value.Name}</td>
            <td>{value.Price}</td>
            <td>{value.Time}</td>
            <td>{value.Season}</td>
            <td>{value.Location}</td>
        </tr>
    )
    return row
}
const FishMiniTable = () => {
    const row = fishInfo.map(value =>
         <tr key={value.Number}>
             <td><img src={"../img/fish/" +value.Image} alt="sudando" /></td>
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
console.log(FishMiniTable())

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
                    {FishMiniTable()}
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
    img {
        width: 64px;
        height: 64px;
    }
`

export { Table }