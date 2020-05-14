import React from 'react';
import styled from 'styled-components'

// const BugDesktopTable = () => {
//    const row = actualTable.map(value =>
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

const BugMobileTable = ({actualTable}) => {
    console.log("this is actual table")
    console.log(actualTable)
    const row = actualTable.length ? actualTable.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/bug/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td>{value.Time} <br/> {value.Location}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     ) : emptyRow
     return row
}
const FishMobileTable = ({actualTable}) => {
    const row = actualTable.length ? actualTable.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/fish/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name}<br/>{value.Price}</td>
            <td>{value.Time}<br/>{value.Location}<br/>{value.Size}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     ) : emptyRow
     return row
}
// const FishDesktopTable = () => {
    
//     const row = actualTable.map(value =>
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

const emptyRow =
    <tr>
        <td><img src={"../img/notfound.png"} alt=""/></td>
        <td>Anything was found :(</td>
        <td></td>
        <td></td>
    </tr>
    
const Table = ({actualIndex, sortBy, actualTable, inputSearch}) => {
   
    if(sortBy) {
        const sortBySearch = (table, inputSearch) => table.filter((v) => 
                                        v.Image.match(inputSearch.toLowerCase()))
        const sortByPrice = (table) => table.sort((a, b) => b.PriceInt - a.PriceInt)
        const sortByABC = (table) => table.sort((a, b) => 
                                        a.Name > b.Name ? 1 :
                                        a.Name < b.Name ? -1 : 0)
        const sortByReset = (table) => table.sort((a, b) => a.Number - b.Number)

        switch (sortBy) {
            case "Search":
                actualTable = sortBySearch(actualTable, inputSearch)
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
                        <BugMobileTable actualTable={actualTable} />
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
                        <FishMobileTable actualTable={actualTable} />
                    </tbody>
                </TableContainer>
            )          
        default: 
                return <div>Error. Table not rendered.</div>
    }
}


const TableContainer = styled.table`
    font-size: 14px;
    background-color: #F5F2E3;
    border-collapse: collapse;
    padding: 5px;

    th {
        font-family: afont;
        padding-top: 15px;
        background-color: #A0D0E7;
    }
    tr {
        border-bottom: 16px solid #A0D0E7;
        border-top: 16px solid #A0D0E7;
        border-radius: 50%;
    }
    td {
        min-width: 25%;
        text-align: left;
        padding-bottom: 18px;
    }
    td, th {
        text-align: center;
        padding-top: 18px;
        vertical-align: top;
    }
    img {
        width: 50px;
        height: 50px;
    }
`
export { Table }