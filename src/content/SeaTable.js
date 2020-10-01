import React, { useState, useEffect } from 'react';
//import seaListEN from '../data/sea-EN.json'
import seaListES from '../data/sea-ES.json'
import styled from 'styled-components'
import { sortSearch, sortABC, sortPrice, sortReset } from '../logic/sea.js'


const imageURL = {
    Hour: "/icons/hour.svg",
    Price: "/icons/star.svg",
    ABCPNG: "/icons/abc.png",
    ABCWEBP: "/icons/abc.webp",
    ResetPNG: "/icons/reset.png",
    HemNorth : "/icons/current_emi1.svg", 
    ResetWEBP: "/icons/reset.webp",
    Earth: "/icons/earth.svg", 
    EarthSPNG: "/icons/earthS.png",
    EarthNPNG: "/icons/earthN.png", 
    EarthWEBPN: "/icons/earthS.WEBPN",
    EarthNWEBPN: "/icons/earthN.WEBPN" 
}

const SeaMobileTable = ({currentTable}) => {
    const row = currentTable.length ? currentTable.map(value =>
         <tr key={value.Number}>
            <td>
                <picture>
                    <source type="image/webp" srcSet={"../img/sea/" +value.ImageWEBP} />
                    <img src={"../img/sea/" +value.ImagePNG} alt={value.Name} />
                </picture>
            </td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Time + "<br/>" + value.Pattern + "<br/>" + value.Size}}></td>
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
    
const SeaTable = () => {
    const [tableContent, setTableContent] = useState(seaListES)
    const [hem, setHem] = useState("Default")

    let table_head = ["Imagen", "Nombre", "Precio", "Hora", "Movimiento", "Temporada", "(current_emis.)", "Tamaño"]

    const sortBySeason = (table) => {
        var btn_season = document.getElementsByClassName("btn-season")[0]
        let current_emi = "Default"
        var time = new Date();
        let current_month = time.getMonth() + 1

        switch(hem) {
            case "North":
                btn_season.src = imageURL.EarthSPNG
                setHem("South")
                current_emi = "South"
                break;
            case "South":
                btn_season.src = imageURL.Earth
                setHem("Default")
                break;
            default:
                btn_season.src = imageURL.EarthNPNG
                setHem("North")
                current_emi = "North"
                break;
        }

        let toble =  table.filter((v) => {
            v.Temp = current_emi === "North" ? v.SeasonN : current_emi === "South" ? v.SeasonS : ""  
            let Season
            if(current_emi.includes("North")) {
                Season = v.SeasonIntN
            } else if(current_emi.includes("South")) {
                Season = v.SeasonIntS
            } else {
                return v
            }
            
            if(Season.length === 1) { // ex: Firefly
                if(current_month === Season[0]) {
                    return true
                }
            }
            else if(Season.length === 2) { // ex: Mar-Apr (3, 4)
                if(Season[0] < Season[1]) {
                    if(current_month >=  Season[0] && current_month <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(current_month >=  Season[0] || current_month <=  Season[1]) {
                        return true
                    } 
                }
            }
            else if(Season.length === 3) { // ex: Mar-Apr, Jun (3, 4, 6) 
                if(current_month === Season[2]) {
                    return true
                }
                if(Season[0] < Season[1]) {
                    if(current_month >=  Season[0] && current_month <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(current_month >=  Season[0] || current_month <=  Season[1]) {
                        return true
                    } 
                }
            }
            else if(Season.length === 4) { // ex: Mar-Apr, Jun-Jul (3, 4, 6, 7) 
                if(Season[0] < Season[1]) {
                    if(current_month >=  Season[0] && current_month <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[2] < Season[3]) {
                    if(current_month >=  Season[2] && current_month <=  Season[3]) {
                        return true
                    }
                }
                else if(Season[0] > Season[1]) {
                    if(current_month >=  Season[0] || current_month <=  Season[1]) {
                        return true
                    }
                }
                else if(Season[2] > Season[3]) {
                    if(current_month >=  Season[2] || current_month <=  Season[3]) {
                        return true
                    }
                }
            }
            return false
        })
        return toble
    }

    useEffect(() => {
        switch(hem){
            case "North":
                //setHem("South")
                break
            case "South":
                //setHem("Default")
                break
            default:
                //setHem("North")
                break

        }
        
    }, [hem])
     
    return (    
      <>
        <ButtonsContainer>
            <div>
                <label htmlFor={"table-search"}></label>
                <SearchInput id={"table-search"} onInput={(e) => setTableContent(sortSearch(seaListES, e.target.value))} placeholder={"Buscar..."} />
            </div>
                <BtnSortContainer>
                <BtnSeason onClick={() => setTableContent(sortBySeason(seaListES))}  alt="Actual Season">
                        <IconImage className={"btn-season"} src={imageURL.Earth} alt="current_emisphere" />
                </BtnSeason>
                <BtnABC onClick={() => setTableContent(sortABC(seaListES))}>
                    <picture>
                        <source type="image/webp" srcSet={imageURL.ABCWEBP}/>
                        <IconImage src={imageURL.ABCPNG} alt="ABC" />
                    </picture>
                </BtnABC>
                <BtnPrice onClick={() => setTableContent(sortPrice(seaListES))} style={{backgroundColor: "#FDDD5C"}}>
                    <picture>
                        <IconImage src={imageURL.Price}  alt="Price" />
                    </picture>
                </BtnPrice>
                <ResetButton onClick={() => setTableContent(sortReset(seaListES))}>
                    <picture>
                        <source type="image/webp" srcSet={imageURL.ResetWEBP}/>
                        <IconImage src={imageURL.ResetPNG}  alt="Reset" />
                    </picture>
                </ResetButton>
            </BtnSortContainer>
        </ButtonsContainer>
        <main>
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
                    <SeaMobileTable currentTable={ tableContent } />
                </tbody>
            </TableContainer>
        </main>
      </>
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
    button:active {
        transform: translateY(4px);
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
const BtnABC = styled.button`
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
const BtnPrice = styled.button`
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

export { SeaTable }
