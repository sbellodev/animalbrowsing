import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
//import fossilListEN from '../data/fossil-EN.json'
import fossilListES from '../data/fossil-ES.json'
import { showCheckedboxes, updateStorage, sortBySearch, clearCheckboxes, fillCheckboxes } from '../logic/fossil.js'
import { btnIMG } from '../images/buttons.js'


const FossilTableContent = ({actualTable}) => {
    const row = actualTable.length ? actualTable.map(value =>
            <ul key={value.Number}>
                {!value.First && <p><input name="checks" id={value.Name} type="checkbox" /><label htmlFor={value.Name}>{value.Name}</label></p>}
                {value.First && <p>{value.Name}</p>}
                {value.First && <li><input name="checks" id={value.First} type="checkbox" /><label htmlFor={value.First}>{value.First}</label></li>}
                {value.Second && <li><input name="checks" id={value.Second} type="checkbox" /><label htmlFor={value.Second}>{value.Second}</label></li>}
                {value.Third && <li><input name="checks" id={value.Third} type="checkbox" /><label htmlFor={value.Third}>{value.Third}</label></li>}
                {value.Fourth && <li><input name="checks" id={value.Fourth} type="checkbox" /><label htmlFor={value.Fourth}>{value.Fourth}</label></li>}
                {value.Fiveth && <li><input name="checks" id={value.Fiveth} type="checkbox" /><label htmlFor={value.Fiveth}>{value.Fiveth}</label></li>}
            </ul>
     ) : emptyRow
     return row
}
const emptyRow = <ul>
                    <p>No hay nada</p>
                    <li>u_u'</li>
                </ul>

const FossilTable = () => {    
    const [newTable, setNewTable] = useState(fossilListES);
    const [numFossils, setNumFossils] = useState(localStorage.length);

    useEffect(() => {
        showCheckedboxes()   
    })

    return (
        <FossilContainer onClick={() => setNumFossils(updateStorage())}>
            <ButtonsContainer>
                <label htmlFor="search-fossil"></label>
                <SearchInput id={"search-fossil"} onInput={(e) => setNewTable(sortBySearch(fossilListES, e.target.value))} placeholder={"Buscar..."}/>
                <label htmlFor="reset-button"></label>
                <ResetButton onClick={() => clearCheckboxes()}>
                    <picture>
                        <source type="image/webp" srcSet={btnIMG.ResetWEBP}/>
                        <IconImage src={btnIMG.ResetPNG}  alt="Reset" />
                    </picture>
                </ResetButton>
                <label htmlFor="fill-button"></label>
                <FillButton onClick={() => fillCheckboxes()}>
                    <picture>
                        <IconImage src={btnIMG.FillPNG}  alt="Fill" />
                    </picture>
                </FillButton>
            </ButtonsContainer>

            <div>
                {<p>{numFossils} de 72 partes.</p>}
                <FossilTableContent actualTable={newTable ? newTable : fossilListES}/>
            </div>
        </FossilContainer>
    )
}

const FossilContainer = styled.main`
    width: 60%;
    margin: 0 auto;
    font-size: 18px;
    font-family: arial;
    font-weight: normal;
    
    p {
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    ul {
        padding: 0;
        padding-bottom: 20px;
        border: 2px solid ghostwhite;
        box-shadow: 3px 4px ghostwhite;
        border-radius: 10px;
        padding-left: 20px;
    }
    li {
        margin-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        list-style-type: none;
    }
    label {
        padding-left: 5px;
    }
    @media screen and (max-width: 570px){
        font-size: 16px;
        li {
            margin-left: 20px;
        }
    }
`
const ButtonsContainer = styled.div`
    background-color: #CCE1F2;
    display: flex;
    flex-direction: row;
    align-items: center;
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

    @media screen and (max-width: 340px){
        width: 60px;
        height: 25px;
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
const FillButton = styled.button`
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

export { FossilTable }