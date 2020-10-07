import React, { useState } from 'react';
import styled from 'styled-components'
import seaListES from '../data/sea-ES.json'
import { btnTable, imgEarth } from '../images/buttons.js'
import { sortSearch, sortSeason, sortABC, sortPrice, sortReset } from '../logic/sea.js'

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
    const [myCount, setMyCount] = useState(1)
    let table_head = ["Imagen", "Nombre", "Precio", "Hora", "Movimiento", "Temporada", "(Disponible)", "Tamaño"]

    return (    
      <>
        <ButtonsContainer>
            <div>
                <label htmlFor={"table-search"}></label>
                <SearchInput id={"table-search"} onInput={(e) => setTableContent(sortSearch(seaListES, e.target.value))} placeholder={"Buscar..."} />
            </div>
                <BtnSortContainer>
                <BtnSeason onClick={() => {
                    myCount === 2 ? setMyCount(0) : setMyCount(myCount + 1) 
                    setTableContent(sortSeason(seaListES, imgEarth, myCount))}}  alt="Actual Season">
                    <IconImage className={"btn-season"} src={imgEarth.Earth} alt="current_emisphere" />
                </BtnSeason>
                <BtnABC onClick={() => setTableContent(sortABC(seaListES))}>
                    <picture>
                        <source type="image/webp" srcSet={btnTable.ABCWEBP}/>
                        <IconImage src={btnTable.ABCPNG} alt="ABC" />
                    </picture>
                </BtnABC>
                <BtnPrice onClick={() => setTableContent(sortPrice(seaListES))} style={{backgroundColor: "#FDDD5C"}}>
                    <picture>
                        <IconImage src={btnTable.Price}  alt="Price" />
                    </picture>
                </BtnPrice>
                <ResetButton onClick={() => setTableContent(sortReset(seaListES))}>
                    <picture>
                        <source type="image/webp" srcSet={btnTable.ResetWEBP}/>
                        <IconImage src={btnTable.ResetPNG}  alt="Reset" />
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
