import React, { useState } from 'react';
import fishListEN from '../data/fish-EN.json'
import fishListES from '../data/fish-ES.json'
import styled from 'styled-components'

const imageURL = {
    Hour: "/icons/hour.svg",
    Price: "/icons/star.svg",
    ABCPNG: "/icons/abc.png",
    ABCWEBP: "/icons/abc.webp",
    ResetPNG: "/icons/reset.png",
    HemNorth : "/icons/hemi1.svg", 
    ResetWEBP: "/icons/reset.webp",
    Earth: "/icons/earth.svg", 
    EarthSPNG: "/icons/earthS.png",
    EarthNPNG: "/icons/earthN.png", 
    EarthWEBPN: "/icons/earthS.WEBPN",
    EarthNWEBPN: "/icons/earthN.WEBPN" 
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
            <td dangerouslySetInnerHTML={{ __html: value.Temp ? value.Temp : value.Season}}></td>
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
    const [hem, setHem] = useState("Default")
    const [sortBy, setSortBy] = useState("")
    const sortBySeason = (table) => {
        setSortBy("Season")
        var botone = document.getElementsByClassName("btn-season")[0]
        let hemi = "Default"

        if(hem === "Default"){
            botone.src = imageURL.EarthNPNG
            setHem("North")
            hemi = hemisphere[0]
        }
        else if(hem === "North"){
            botone.src = imageURL.EarthSPNG
            setHem("South")
            hemi = hemisphere[1]
        }
        else if(hem === "South"){
            botone.src = imageURL.Earth
            setHem("Default")
        }
        else {
        }
        var time = new Date();
        let currentMonth = time.getMonth() + 1

        let toble =  table.filter((v) => {
            v.Temp = hemi === hemisphere[0] ? v.SeasonN : hemi === hemisphere[1] ? v.SeasonS : ""  
            let Season
            if(hemi.includes(hemisphere[0])) {
                Season = v.SeasonIntN
            }
            else if(hemi.includes(hemisphere[1])) {
                Season = v.SeasonIntS
            }
            else {
                return v
            }
            
            if(Season.length === 1) { // ex: Firefly
                if(currentMonth === Season[0]) {
                    return true
                }
            }
            else if(Season.length === 2) { // ex: Mar-Apr (3, 4)
                if(Season[0] < Season[1]) {
                    if(currentMonth >=  Season[0] && currentMonth <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(currentMonth >=  Season[0] || currentMonth <=  Season[1]) {
                        return true
                    } 
                }
            }
            else if(Season.length === 3) { // ex: Mar-Apr, Jun (3, 4, 6) 
                if(currentMonth === Season[2]) {
                    return true
                }
                if(Season[0] < Season[1]) {
                    if(currentMonth >=  Season[0] && currentMonth <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(currentMonth >=  Season[0] || currentMonth <=  Season[1]) {
                        return true
                    } 
                }
            }
            else if(Season.length === 4) { // ex: Mar-Apr, Jun-Jul (3, 4, 6, 7) 
                if(Season[0] < Season[1]) {
                    if(currentMonth >=  Season[0] && currentMonth <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[2] < Season[3]) {
                    if(currentMonth >=  Season[2] && currentMonth <=  Season[3]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(currentMonth >=  Season[0] || currentMonth <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[2] > Season[3]) {
                    if(currentMonth >=  Season[2] || currentMonth <=  Season[3]) {
                        return true
                    }
                }
            }
            return false
        })
        setNewTable(toble)
        return
    }

    
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

    let table_head = ["Image", "Name", "Price", "Time", "Location", "Season", "(Hemi.)", "Size"]   
    let hemisphere = ["North", "South"]
    let search_placeholder = "Find..."
    let actualTable = fishListEN
    if(localStorage.getItem("language") === "es") {
        table_head = ["Imagen", "Nombre", "Precio", "Hora", "Ubicación", "Temporada", "(Hemis.)", "Tamaño"]
        search_placeholder = "Buscar..."
        hemisphere = ["Norte", "Sur"]
        actualTable = fishListES
    }
    else {
    }
    
    return (    
      <main>
        <ButtonsContainer>
            <div>
                <label htmlFor={"table-search"}></label>
                <SearchInput  id={"table-search"} onChange={(e) => sortBySearch(actualTable, e.target.value)} placeholder={search_placeholder} />
            </div>
            <BtnSortContainer>
                <BtnSeason onClick={(e) => sortBySeason(actualTable)}  alt="Actual Season">
                        <IconImage className={"btn-season"} src={imageURL.Earth} alt="Hemisphere" />
                </BtnSeason>
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
                    </th>
                </tr>
            </thead>
            <tbody>
                <FishMobileTable actualTable={ newTable ? newTable : actualTable }/>
            </tbody>
        </TableContainer> 
      </main>
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

    @media screen and (max-width: 570px) {
        font-size: 16px;
    }
    @media screen and (max-width: 340px) {
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
  margin-left: 10px;
  padding-left: 20px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }

  @media screen and (max-width: 340px) {
    height: 35px;
  }
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
  margin-right: 20px;
  padding: 5px;
  @media screen and (max-width: 380px) {
    margin-right: 10px;
    width: 35px;
    height: 35px;
  }
`
const BtnSeason = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
  margin-right: 20px;
  padding: 1px;
  @media screen and (max-width: 380px) {
    margin-right: 10px;
    width: 35px;
    height: 35px;
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
  height: auto;
  display: block;
`

export { FishTable }
