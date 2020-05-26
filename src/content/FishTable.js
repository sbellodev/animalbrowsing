import React from 'react';
import styled from 'styled-components'

const FishMobileTable = ({actualTable}) => {
    const row = actualTable.length ? actualTable.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/fish/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td>{value.Time} <br/> {value.Location}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     ) : emptyRow
     return row
}

const emptyRow = <tr>
                    <td>:(</td>
                    <td>Not a thing was found...</td>
                    <td></td>
                    <td></td>
                </tr>
    
const FishTable = ({sortBy, actualTable, inputSearch}) => {
    if(sortBy) {
        const sortBySearch = (table, inputSearch) => 
            table.filter((v, i, a) => {
                inputSearch = inputSearch.toLowerCase()
                return (
                    v.Name.toLowerCase().match(inputSearch) ||
                    v.PriceInt.toString().match(inputSearch) ||
                    v.Location.toLowerCase().match(inputSearch) ||
                    v.Season.toLowerCase().match(inputSearch) ||
                    v.TimeInterval.toLowerCase().match(inputSearch) 
                )
            })
        const sortByHour = (table) => {
            var time = new Date();
            let currentTime = time.getHours() // i.e 18 (from 18:00)

            return table.filter((v, i, a) => {
                /* i.e. case time interval A: 4AM to 17PM, case time interval B: 17PM to 4AM
                *  with var 2AM
                */
                if(v.TimeInterval[0] > v.TimeInterval[1]){ // A dont, B pass
                    if(currentTime >=  v.TimeInterval[0]){ //  B dont
                        return (currentTime >=  v.TimeInterval[0])
                    }
                    if(currentTime <=  v.TimeInterval[1]){ //  B pass
                        return (currentTime <=  v.TimeInterval[1])
                    }
                }
                else {
                    if(currentTime >=  v.TimeInterval[0] && currentTime <=  v.TimeInterval[1]){ //  A pass, B dont
                        return (currentTime >=  v.TimeInterval[0] && currentTime <=  v.TimeInterval[1])
                    }
                }
                return false
            })
        } 
        const sortByPrice = (table) => table.sort((a, b) => b.PriceInt - a.PriceInt)
        const sortByABC = (table) => table.sort((a, b) => 
                                        a.Name > b.Name ? 1 :
                                        a.Name < b.Name ? -1 : 0)
        const sortByReset = (table) => table.sort((a, b) => a.Number - b.Number)

        switch (sortBy) {
            case "Search":
                actualTable = sortBySearch(actualTable, inputSearch)
                break
            case "Hour":
                actualTable = sortByHour(actualTable)
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
        }
    }

    let table_head = ["Image", "Name", "Price", "Time", "Location", "Season", "(Hemi.)", "Size"]
    if(localStorage.getItem("language") === "es") {
        table_head = ["Imagen", "Nombre", "Precio", "Hora", "Ubicación", "Temporada", "(Hemis.)", "Tamaño"]
    }
    return ( 
        <TableContainer>
            <thead>            
                <tr>
                    <th>{table_head[0]}</th>
                    <th>{table_head[1]}<br/>{table_head[2]}</th>
                    <th>{table_head[3]}<br/>{table_head[4]}<br/>{table_head[7]}</th>
                    <th>{table_head[5]}<br/>{table_head[6]}</th>
                </tr>
            </thead>
            <tbody>
                <FishMobileTable actualTable={actualTable}/>
            </tbody>
        </TableContainer> 
    )
}


const TableContainer = styled.table`
    font-size: 18px;
    width: 100%;
    background-color: #A0D0E7;
    border-collapse: collapse;
    padding: 5px;

    tbody {
        font-family: arial;
        font-weight: normal;
    }
    tr {
        border-bottom: 3px solid #F5F2E3;
        border-radius: 50%;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        width: 25%;
        background-color: #A0D0E7;
        border-top: 3px solid #F5F2E3;
        text-align: center;
        vertical-align: top;
    }
    td {
        text-align: center;
        padding-bottom: 18px;
        padding-top: 18px;        
        vertical-align: top;
    }
    td:last-child {
        text-align: left;
    }
    img {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 570px) {
        font-size: 16px;
    }
    @media (max-width: 340px) {
        font-size: 14px;
    }
`
export { FishTable }