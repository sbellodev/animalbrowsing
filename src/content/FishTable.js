import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import fishListEN from '../data/fish-EN.json'
import fishListES from '../data/fish-ES.json'

const imageURL = {
  Price: "/icons/star.svg",
  Hour: "/icons/hour.svg",
  ABCWEBP: "/icons/abc.webp",
  ABCPNG: "/icons/abc.png",
  ResetWEBP: "/icons/reset.webp",
  ResetPNG: "/icons/reset.png",
}

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
    
const FishTable = () => {
    const [newTable, setNewTable] = useState("")
    const [sortBy, setSortBy] = useState("")

    let search_placeholder = ""
    let actualTable = ""
    let table_head = ["Image", "Name", "Price", "Time", "Location", "Season", "(Hemi.)", "Size"]   
    let hemisphere = []
    if(localStorage.getItem("language") === "es"){
        table_head = ["Imagen", "Nombre", "Precio", "Hora", "Ubicación", "Temporada", "(Hemis.)", "Tamaño"]
        document.title = 'Animal Browsing - Lista de peces';
        search_placeholder = "Buscar..."
        actualTable = fishListES 
        hemisphere = ["Norte", "Sur"]
    }
    else {
        document.title = 'Animal Browsing - Fish list';
        search_placeholder = "Find..."
        actualTable = fishListEN
        hemisphere = ["North", "South"]
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
            }
        )}
    const sortBySearch = (table, inputSearch) => {
        let toble = table.filter((v) => {
            inputSearch = inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            return (
                v.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.PriceInt.toString().includes(inputSearch) ||
                v.Location.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.Season.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.Size.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                v.Time.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) 
                )
            })
        setNewTable(toble)
    }

    const sortHem = (table, hem) => {
        setSortBy("Hemis")
        let toble = table.filter((v) => v.Season.includes(hem))
        setNewTable(toble)
    }
    const sortByABC = (table) => { 
        setSortBy("ABC")
        return table.sort((a, b) => 
                                a.Name > b.Name ? 1 :
                                a.Name < b.Name ? -1 : 0)
    }
    const sortByPrice = (table) => { 
        setSortBy("Price")
        return table.sort((a, b) => b.PriceInt - a.PriceInt)
    }
    const sortByReset = (table) => { 
        setSortBy("Reset")
        return table.sort((a, b) => a.Number - b.Number)
    }

    useEffect(() => {
    }, [sortBy])

    return (    
      <main>
        <ButtonsContainer>
            <div>
                <label htmlFor={"table-search"}></label>
                <SearchInput  id={"table-search"} onChange={(e) => sortBySearch(actualTable, e.target.value)} placeholder={search_placeholder} />
            </div>
            <BtnSortContainer>
                <Button onClick={() => setNewTable(sortBySeason(actualTable))}><IconImage src={imageURL.Hour} alt="Season" /></Button>
                <Button onClick={() => setNewTable(sortByABC(actualTable))}>
                    <picture>
                    <source type="image/webp" srcSet={imageURL.ABCWEBP}/>
                    <source type="image/png" srcSet={imageURL.ABCPNG}/>
                    <IconImage src={imageURL.ABCPNG} alt="ABC" />
                    </picture>
                </Button>
                <Button onClick={() => setNewTable(sortByPrice(actualTable))} style={{backgroundColor: "#FDDD5C"}}>
                    <picture>
                        <IconImage src={imageURL.Price}  alt="Price" />
                    </picture>
                </Button>
                <ResetButton onClick={() => setNewTable(sortByReset(actualTable))}>
                    <picture>
                    <source type="image/webp" srcSet={imageURL.ResetWEBP}/>
                    <source type="image/png" srcSet={imageURL.ResetPNG}/>
                    <IconImage src={imageURL.ResetPNG}  alt="Reset" />
                    </picture>
                </ResetButton>
            </BtnSortContainer>
        </ButtonsContainer>
        <TableContainer>
            <thead>            
                <tr>
                    <th>{table_head[0]}</th>
                    <th>{table_head[1]}<br/>{table_head[2]}</th>
                    <th>{table_head[3]}<br/>{table_head[4]}<br/>{table_head[7]}</th>
                    <th>{table_head[5]}<br/>{table_head[6]}
                        <BtnHemContainer>
                            <BtnHem onClick={() => sortHem(actualTable, hemisphere[0])}>N</BtnHem>
                            <BtnHem onClick={() => sortHem(actualTable, hemisphere[1])}>S</BtnHem>
                        </BtnHemContainer>
                    </th>
                </tr>
            </thead>
            <tbody>
                <FishMobileTable actualTable={ newTable ? newTable : actualTable}/>
            </tbody>
        </TableContainer> 
      </main>
    )
}

const BtnHemContainer = styled.div``
const BtnHem = styled.button`
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
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  button {
    background-color: ghostwhite;
  }
`
const BtnSortContainer = styled.div`
  display: flex;
  align-items: center;
`
const SearchInput = styled.input`
  font-size: 12px;
  width: 70px;
  height: 35px;
  margin-right: 10px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }

  @media screen and (max-width: 340px){
    
    height: 35px;
  }
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
  margin-right: 20px;
  @media screen and (max-width: 380px){
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

export { FishTable }
