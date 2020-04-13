import React from 'react';
import styled from 'styled-components'
import bugInfo from '../data/bug-EN.json'
import fishInfo from '../data/fish-EN.json'
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



//sortByPrice(fishInfo)
const BugMobileTable = () => {
    const row = bugInfo.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/bug/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td>{value.Time} <br/> {value.Location}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     )
     return row
}
const FishMobileTable = () => {
    const row = fishInfo.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/fish/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name}<br/>{value.Price}</td>
            <td>{value.Time}<br/>{value.Location}<br/>{value.Size}</td>
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

const Table = ({actualIndex, sortBy}) => {
    
    if(sortBy) {
        const sortBySearch = (table) => {
            console.log("henlo this is search")
        }
        const sortByPrice = (table) => table.sort((a, b) => b.PriceInt - a.PriceInt)
        
        const sortByABC = (table) => table.sort((a, b) => 
                                        a.Name > b.Name ? 1 :
                                        a.Name < b.Name ? -1 : 0)

        const sortByReset = (table) => table.sort((a, b) => a.Number - b.Number)

        const actualTable = actualIndex === "Bugs" ? bugInfo :
                            actualIndex === "Fish" ? fishInfo : ""

        switch (sortBy) {
            case "Search":
                sortBySearch(actualTable)
                break
            case "Price":
                sortByPrice(actualTable)
                break
            case "ABC":
                sortByABC(actualTable)
                break
            case "Reset":
                sortByReset(actualTable)
                break
            default:
                console.log("Error on table's buttons")
        }
    

    }
      
    switch(actualIndex) {
        case "Bugs":
            return (         
                <TableContainer>
                    <thead>            
                        <tr>
                            <th>Image</th>
                            <th>Name<br/>Price</th>
                            <th>Time<br/>Location</th>
                            <th>Season<br/>(Hemi.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BugMobileTable />
                    </tbody>
                </TableContainer>
            )
        case "Fish":
            return (
                <TableContainer>
                    <thead>            
                        <tr>
                            <th>Image</th>
                            <th>Name<br/>Price</th>
                            <th>Time<br/>Location<br/>Size</th>
                            <th>Season<br/>(Hemi.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FishMobileTable />
                    </tbody>
                </TableContainer>
            )          
        default: 
                return <div>Error. Table not rendered.</div>
    }
}


const TableContainer = styled.table`
    background-color: #F5F2E3;
    text-align: left;
    border-collapse: collapse;
    padding: 5px;
    max-width: 800px;

    td {
        text-align: left;
    }
    tr {
        background-color: #F5F2E3;
        border-bottom: 16px solid #A0D0E7;
        border-top: 16px solid #A0D0E7;
        border-radius: 50%;
    }
    tr:nth-child(odd) {
    }
    td, th {
        padding: 0px 10px 10px 0px;
    }
    th {
        padding-top: 15px;
        font-family: afont;
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
            padding-top: 18px;
            text-align: center;
            vertical-align: top;
        }
        td {
            padding-bottom: 18px;
        }
        th {
         background-color: #A0D0E7;
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