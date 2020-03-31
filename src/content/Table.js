import React from 'react';
import styled from 'styled-components'

const Table = () => {
    return (
        <>
            <BugsTable>
                <thead>
                    <th>Insecto</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Bichopalo</td>
                        <td>Fanni</td>
                    </tr>
                    <tr>
                        <td>1.000</td>
                        <td>1 euro</td>
                    </tr>
                </tbody>
            </BugsTable>
        </>
    )
}
const BugsTable = styled.table`
    background-color: skyblue;
    margin: 50px;
    text-align: center;
    border-collapse: collapse;
`

export { Table }