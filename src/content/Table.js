import React from 'react';
import styled from 'styled-components'
import bug1 from '../img/bitterling.png'

const Table = () => {
    return (
        <>
            <BugsTable>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Time</th>
                    <th>Season</th>
                    <th>Location <br/> Size</th>
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

export { Table }