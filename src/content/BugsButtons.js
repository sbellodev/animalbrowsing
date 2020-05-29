import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import bugListEN from '../data/bug-EN.json'
import bugListES from '../data/bug-ES.json'

const imageURL = {
  Price: "/icons/star.svg",
  Hour: "/icons/hour.svg",
  ABCWEBP: "/icons/abc.webp",
  ABCPNG: "/icons/abc.png",
  ResetWEBP: "/icons/reset.webp",
  ResetPNG: "/icons/reset.png",
}

const BugMobileTable = ({actualTable}) => {
    const row = actualTable.length ? actualTable.map(value =>
         <tr key={value.Number}>
            <td>
                <picture>
                    <source type="image/webp" srcSet={"../img/bug/" +value.ImageWEBP} />
                    <source type="image/png" srcSet={"../img/bug/" +value.ImagePNG} /> 
                    <img src={"../img/bug/" +value.ImageWEBP} alt={value.Name} />
                </picture>
            </td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Time + "<br/>" + value.Location}}></td>
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
    
const BugsButtons = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [Result, setResult] = useState(inputSearch);
    const [newTable, setNewTable] = useState(inputSearch)
    const [sortBy, setSortBy] = useState("");
    const [hemis, setHemis] = useState("") 

    let search_placeholder = ""
    let actualTable = ""
    let table_head = ["Image", "Name", "Price", "Time", "Location", "Season", "(Hemi.)"]   
    if(localStorage.getItem("language") === "es"){
        table_head = ["Imagen", "Nombre", "Precio", "Hora", "Ubicación", "Temporada", "(Hemis.)"]
        document.title = 'Animal Browsing - Lista de bichos';
        search_placeholder = "Buscar..."
        actualTable = bugListES 
    }
    else {
        document.title = 'Animal Browsing - Bug list';
        search_placeholder = "Find..."
        actualTable = bugListEN 
    }

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
    const sortBySearch = (table, inputSearch) => 
        table.filter((v) => {
            inputSearch = inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            console.log(inputSearch)
            console.log(table)
            return (
                v.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.PriceInt.toString().includes(inputSearch) ||
                v.Location.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.Season.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.Time.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) 
            )
        })
    const sortHem = (table, hem) => { 
        setSortBy("Hem")
        return table.filter((v) => v.Season.includes(hem))}
    const sortByABC = (table) => { 
        setSortBy("ABC")
        return table.sort((a, b) => 
                                a.Name > b.Name ? 1 :
                                a.Name < b.Name ? -1 : 0)}
    const sortByPrice = (table) => { 
        setSortBy("Price")
        return table.sort((a, b) => b.PriceInt - a.PriceInt)}
    const sortByReset = (table) => { 
        setSortBy("Reset")
        return table.sort((a, b) => a.Number - b.Number)}

    const setInput = (e) => {
        setInputSearch(e.target.value)
    }

    useEffect(() => {
    }, [newTable])

    return (    
      <main>
          {console.log(newTable)}
          {console.log(Result)}
        <ButtonsContainer>
          <label htmlFor={"table-search"}></label>
          <SearchInput  id={"table-search"} onChange={(e) => setNewTable(sortBySearch(actualTable, e.target.value))} placeholder={search_placeholder} />
          <Button onClick={() => setNewTable(sortBySeason(actualTable))}><IconImage src={imageURL.Hour} alt="Hour" /></Button>
          <Button onClick={() => setNewTable(sortByABC(actualTable))}>
            <picture>
              <source type="image/webp" srcSet={imageURL.ABCWEBP}/>
              <source type="image/png" srcSet={imageURL.ABCPNG}/>
              <IconImage src={imageURL.ABCPNG} alt="ABC" />
            </picture>
          </Button>
          <Button onClick={() => setNewTable(sortByPrice(actualTable))} style={{backgroundColor: "#FDDD5C"}}>
            <picture>
                <IconImage src={imageURL.Price}  alt="price" />
            </picture>
          </Button>
          <ResetButton onClick={() => setNewTable(sortByReset(actualTable))}>
            <picture>
              <source type="image/webp" srcSet={imageURL.ResetWEBP}/>
              <source type="image/png" srcSet={imageURL.ResetPNG}/>
              <IconImage src={imageURL.ResetPNG}  alt="Reset" />
            </picture>
          </ResetButton>
        </ButtonsContainer>
        <TableContainer>
            <thead>            
                <tr>
                    <th>{table_head[0]}</th>
                    <th>{table_head[1]}<br/>{table_head[2]}</th>
                    <th>{table_head[3]}<br/>{table_head[4]}</th>
                    <th>{table_head[5]}<br/>{table_head[6]}<Buttone onClick={() => sortHem(actualTable, "North")}>N</Buttone></th>
                </tr>
            </thead>
            <tbody>
                <BugMobileTable actualTable={ newTable ? newTable : actualTable}/>
            </tbody>
        </TableContainer> 
      </main>
    )
} 


const Buttone = styled.button`
    width: 50px;
    height: 35px;
    background-color: ghostwhite;    
`
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

const ButtonsContainer = styled.div`
  background-color: #CCE1F2;
  display: flex;
  flex-direction: row;
  align-items: center;
  float:right;
  padding-top: 30px;
  padding-bottom: 20px;
  button {
    background-color: ghostwhite;
  }
`
const SearchInput = styled.input`
  font-size: 12px;
  width: 80px;
  height: 35px;
  margin-right: 20px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }

  @media screen and (max-width: 340px){
    width: 60px;
    height: 25px;
    margin-right: 10px;
  }
`
const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
  margin-right: 20px;
  @media screen and (max-width: 340px){
    margin-right: 10px;
  }
`

const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 25px 10px 0;
  border-radius: 50%;
  box-shadow: 1px 1px #888888;
`
const IconImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`

export { BugsButtons }
