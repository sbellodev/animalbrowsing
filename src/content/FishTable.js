import React from 'react';
import styled from 'styled-components'

const FishMobileTable = ({actualTable}) => {
    const row = actualTable.length ? actualTable.map(value =>
         <tr key={value.Number}>
            <td>
                <picture>
                    <source type="image/webp" srcSet={"../img/fish/" +value.ImageWEBP} />
                    <source type="image/png" srcSet={"../img/fish/" +value.ImagePNG} /> 
                    <img src={"../img/fish/" +value.ImageWEBP} alt={value.Name} />
                </picture>
            </td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Time + "<br/>" + value.Location + "<br/>" + value.Size}}></td>
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
    if(sortBy){
        const sortBySearch = (table, inputSearch) => 
            table.filter((v) => {
                inputSearch = inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                return (
                    v.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                    v.PriceInt.toString().includes(inputSearch) ||
                    v.Location.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                    v.Size.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                    v.Season.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                    v.Time.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) 
                )
            })
        // const sortByHour = (table) => {
        //     var time = new Date();
        //     let currentTime = time.getHours() // i.e 18 (from 18:00)
    
        //     return table.filter((v, i, a) => {
        //         if(v.TimeInterval[0] > v.TimeInterval[1]){ 
        //             if(currentTime >=  v.TimeInterval[0] || currentTime <=  v.TimeInterval[1]){
        //                 return currentTime
        //             }
        //         }
        //         else {
        //             if(currentTime >=  v.TimeInterval[0] && currentTime <=  v.TimeInterval[1]){
        //                 return currentTime
        //             }
        //         }
        //         return false
        //     })
        // } 
        const sortBySeason = (table) => {
            var time = new Date();
            let currentSeason = time.getMonth()

            return table.filter((v) => {
                if(v.SeasonInterval.length === 2){ // ex: All year (0, 12) 
                    if(v.SeasonInterval[0] < v.SeasonInterval[1]) { 
                        if(currentSeason >=  v.SeasonInterval[0] && currentSeason <=  v.SeasonInterval[1]){
                            return currentSeason
                        }
                    }
                }
                else if(v.SeasonInterval.length === 4){ // ex: "Mar-Jun (North) Sep-Dec (North)"
                    // Month X < Y
                    if(v.SeasonInterval[0] < v.SeasonInterval[1] || v.SeasonInterval[2] < v.SeasonInterval[3]) { // Between A and B
                        if(    (currentSeason >=  v.SeasonInterval[0] && currentSeason <=  v.SeasonInterval[1]) 
                            || (currentSeason >=  v.SeasonInterval[2] && currentSeason <=  v.SeasonInterval[3])){
                                return currentSeason
                            }
                    }
                    // Month X > Y
                    else if(v.SeasonInterval[0] > v.SeasonInterval[1] || v.SeasonInterval[2] > v.SeasonInterval[3]) {  
                        if(    currentSeason >=  (v.SeasonInterval[0] || v.SeasonInterval[2]) 
                            || currentSeason <=  (v.SeasonInterval[1] || v.SeasonInterval[3])){
                                return currentSeason
                            }
                    }
                }
                else if(v.SeasonInterval.length === 6){ // ex: "Mar-Jun, Oct (North) Sep-Dec, Apr (North)"
                    // Concrete Months
                    if(currentSeason === v.SeasonInterval[2] || currentSeason === v.SeasonInterval[5]){
                        return currentSeason
                    }
                    // Month X < Y
                    if(v.SeasonInterval[0] < v.SeasonInterval[1] || v.SeasonInterval[3] < v.SeasonInterval[4]) { // Between A and B
                        if(    (currentSeason >=  v.SeasonInterval[0] && currentSeason <=  v.SeasonInterval[1]) 
                            || (currentSeason >=  v.SeasonInterval[3] && currentSeason <=  v.SeasonInterval[4])){
                                return currentSeason
                        }
                    }
                    // Month X > Y
                    if(v.SeasonInterval[0] > v.SeasonInterval[1] || v.SeasonInterval[3] > v.SeasonInterval[4]) {  
                        if(    currentSeason >=  v.SeasonInterval[0] || currentSeason <=  v.SeasonInterval[1] 
                            || currentSeason >=  v.SeasonInterval[3] || currentSeason <=  v.SeasonInterval[4]){
                                return currentSeason
                            }
                    }
                }
                else if(v.SeasonInterval.length === 8){ // ex: "May-Jun, Sep-Nov (North) Nov-Dec, Mar-Apr (South)"
                    // Month X < Y
                    if(    v.SeasonInterval[0] < v.SeasonInterval[1]
                        || v.SeasonInterval[2] < v.SeasonInterval[3]
                        || v.SeasonInterval[4] < v.SeasonInterval[5]
                        || v.SeasonInterval[6] < v.SeasonInterval[7]) {
                            if(    (currentSeason >=  v.SeasonInterval[0] && currentSeason <=  v.SeasonInterval[1]) 
                                || (currentSeason >=  v.SeasonInterval[2] && currentSeason <=  v.SeasonInterval[3])
                                || (currentSeason >=  v.SeasonInterval[4] && currentSeason <=  v.SeasonInterval[5])
                                || (currentSeason >=  v.SeasonInterval[6] && currentSeason <=  v.SeasonInterval[7])){
                                    return currentSeason
                            }
                    }
                    // Month X > Y
                    if(    v.SeasonInterval[0] > v.SeasonInterval[1] || v.SeasonInterval[2] > v.SeasonInterval[3]
                        || v.SeasonInterval[4] > v.SeasonInterval[5] || v.SeasonInterval[6] > v.SeasonInterval[7]){  
                            if(currentSeason >= (v.SeasonInterval[0] || v.SeasonInterval[2] || v.SeasonInterval[4] || v.SeasonInterval[6]) 
                            || currentSeason <= (v.SeasonInterval[1] || v.SeasonInterval[3] || v.SeasonInterval[5] || v.SeasonInterval[7])){
                                return currentSeason
                            }
                    }
                }
                return false
            })
        }
        const sortByPrice = (table) => table.sort((a, b) => b.PriceInt - a.PriceInt)
        const sortByABC = (table) => table.sort((a, b) => {
                                        let a_clean = a.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                                        let b_clean = b.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                                        return a_clean > b_clean ? 1 :
                                        a_clean < b_clean ? -1 : 0
                                    })
        const sortByReset = (table) => table.sort((a, b) => a.Number - b.Number)

        switch (sortBy){
            case "Search":
                actualTable = sortBySearch(actualTable, inputSearch)
                break
            case "Season":
                actualTable = sortBySeason(actualTable)
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
    if(localStorage.getItem("language") === "es"){
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
    background-color: #CCE1F2;
    border-collapse: collapse;
    padding: 5px;

    tbody {
        font-family: arial;
        font-weight: normal;
    }
    tr {
        border-bottom: 3px solid ghostwhite;
        border-radius: 50%;
    }
    th {
        padding-top: 20px;
        padding-bottom: 20px;
        width: 25%;
        background-color: #CCE1F2;
        border-top: 3px solid #F5F2E3;
        text-align: center;
        vertical-align: top;
    }
    td {
        text-align: center;
        padding-bottom: 20px;
        padding-top: 20px;        
        vertical-align: top;
    }
    td:last-child {
        text-align: left;
    }
    img {
        width: 50px;
        height: 50px;
    }

    @media screen and (max-width: 570px){
        font-size: 16px;
    }
    @media screen and (max-width: 340px){
        font-size: 14px;
    }
`
export { FishTable }